'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const bank = require('../questions.js');
const engine = require('../engine.js');

function rng(seed=12345) {
  return () => {seed = (1664525 * seed + 1013904223) >>> 0; return seed / 4294967296;};
}
function respond(state, correct) {
  const q = state.questions[state.index];
  return engine.answer(state,correct ? q.answer : (q.answer+1)%4);
}

test('bank has 90 unique questions with a usable marked answer and 4 distinct options',() => {
  assert.equal(bank.questions.length,90);
  assert.equal(new Set(bank.questions.map(q => q.id)).size,90);
  for (const q of bank.questions) {
    assert.equal(q.options.length,4,q.id);
    assert.equal(new Set(q.options).size,4,q.id);
    assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer <= 3,q.id);
    assert.ok(bank.topics.some(t => t.id === q.topic),q.id);
    assert.ok(q.question.length > 0,q.id);
  }
});

test('every topic creates 10 distinct items and keeps each correct answer after shuffling',() => {
  const original = JSON.stringify(bank);
  for (const topic of ['all',...bank.topics.map(t => t.id)]) {
    for (let seed=1; seed<=40; seed++) {
      const round = engine.makeRound(bank,topic,rng(seed));
      assert.equal(round.questions.length,10);
      assert.equal(new Set(round.questions.map(q => q.id)).size,10);
      for (const q of round.questions) {
        const source = bank.questions.find(s => s.id === q.id);
        assert.equal(q.options[q.answer],source.options[source.answer]);
        assert.deepEqual([...q.options].sort(),[...source.options].sort());
        if (topic !== 'all') assert.equal(q.topic,topic);
      }
      if (topic === 'all') {
        const counts = bank.topics.map(t => round.questions.filter(q => q.topic === t.id).length);
        assert.ok(counts.every(c => c === 2 || c === 3));
      }
    }
  }
  assert.equal(JSON.stringify(bank),original,'the source bank must remain unchanged');
});

test('five wrong items immediately end the round, block a sixth answer and block next',() => {
  const state = engine.makeRound(bank,'all',rng());
  for (let i=0; i<5; i++) {
    respond(state,false);
    if (i<4) {assert.equal(state.phase,'feedback'); assert.equal(engine.next(state),true);}
  }
  assert.equal(state.mistakes,5);
  assert.equal(state.correct,0);
  assert.equal(state.history.length,5);
  assert.equal(state.phase,'ended');
  assert.equal(state.outcome,'lost');
  assert.equal(respond(state,true),null);
  assert.equal(engine.next(state),false);
  assert.equal(state.history.length,5);
});

test('five correct then five wrong still fails immediately on item 10',() => {
  const state = engine.makeRound(bank,'all',rng());
  for (let i=0; i<10; i++) {respond(state,i<5); if (i<9) engine.next(state);}
  assert.equal(state.history.length,10);
  assert.equal(state.correct,5);
  assert.equal(state.outcome,'lost');
});

test('ten correct completes with no mistakes; replay starts clean',() => {
  const state = engine.makeRound(bank,'ions',rng());
  for (let i=0; i<10; i++) {respond(state,true); if (i<9) engine.next(state);}
  assert.equal(state.phase,'ended');
  assert.equal(state.outcome,'completed');
  assert.equal(state.correct,10);
  assert.equal(state.mistakes,0);
  assert.equal(engine.next(state),false);
  const replay = engine.makeRound(bank,state.topic,rng(47));
  assert.equal(replay.history.length,0);
  assert.equal(replay.correct,0);
  assert.equal(replay.mistakes,0);
  assert.equal(replay.index,0);
  assert.equal(replay.phase,'answering');
});

test('four mistakes and six correct completes; tenth answer cannot be counted twice',() => {
  const state = engine.makeRound(bank,'gi',rng());
  for (let i=0; i<10; i++) {respond(state,i>=4); if (i<9) engine.next(state);}
  assert.equal(state.outcome,'completed');
  assert.equal(state.correct,6);
  assert.equal(state.mistakes,4);
  assert.equal(engine.answer(state,0),null);
  assert.equal(state.history.length,10);
});

test('double answers, invalid choices, premature next, and unavailable topics cannot change a round',() => {
  const state = engine.makeRound(bank,'topical',rng());
  assert.equal(engine.next(state),false);
  for (const choice of [-1,4,1.5,null,NaN,'0']) assert.equal(engine.answer(state,choice),null);
  assert.equal(state.history.length,0);
  respond(state,true);
  assert.equal(state.correct,1);
  assert.equal(respond(state,false),null);
  assert.equal(state.mistakes,0);
  assert.equal(state.history.length,1);
  assert.equal(engine.next(state),true);
  assert.equal(engine.next(state),false);
  assert.equal(state.index,1);
  assert.throws(() => engine.makeRound(bank,'missing'),/at least 10/);
});
