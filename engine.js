/* Pure game rules, shared by the browser and the Node test suite. */
(function (root) {
  'use strict';
  const ROUND_SIZE = 10;
  const MAX_MISTAKES = 5;

  function shuffle(items, random = Math.random) {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  function makeRound(bank, topic = 'all', random = Math.random) {
    const available = bank.questions.filter(q => topic === 'all' || q.topic === topic);
    if (available.length < ROUND_SIZE) throw new Error('This topic needs at least 10 questions.');
    let selected;
    if (topic === 'all') {
      // Cycle through shuffled topic pools so all four topics appear in a mixed round.
      const pools = shuffle(bank.topics, random).map(t => shuffle(available.filter(q => q.topic === t.id), random));
      selected = [];
      while (selected.length < ROUND_SIZE && pools.some(pool => pool.length)) {
        for (const pool of pools) {
          if (pool.length && selected.length < ROUND_SIZE) selected.push(pool.pop());
        }
      }
      selected = shuffle(selected, random);
    } else selected = shuffle(available, random).slice(0, ROUND_SIZE);
    const questions = selected.map(q => {
      const options = shuffle(q.options.map((text, index) => ({text, correct:index === q.answer})), random);
      return {...q, options:options.map(o => o.text), answer:options.findIndex(o => o.correct)};
    });
    return {topic, questions, index:0, correct:0, mistakes:0, history:[], phase:'answering', outcome:null};
  }

  function answer(state, choice) {
    if (state.phase !== 'answering') return null;
    if (!Number.isInteger(choice) || choice < 0 || choice > 3) return null;
    const question = state.questions[state.index];
    const isCorrect = choice === question.answer;
    const record = {question, choice, correct:isCorrect};
    state.history.push(record);
    if (isCorrect) state.correct++; else state.mistakes++;
    // The fifth wrong item ends the round immediately, including on question 10.
    if (state.mistakes >= MAX_MISTAKES) {
      state.phase = 'ended'; state.outcome = 'lost';
    } else if (state.history.length === ROUND_SIZE) {
      state.phase = 'ended'; state.outcome = 'completed';
    } else state.phase = 'feedback';
    return record;
  }

  function next(state) {
    if (state.phase !== 'feedback') return false;
    state.index++; state.phase = 'answering';
    return true;
  }

  const api = {ROUND_SIZE, MAX_MISTAKES, shuffle, makeRound, answer, next};
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.QuizEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
