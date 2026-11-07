(function () {
  'use strict';
  const $ = id => document.getElementById(id);
  const bank = window.QUIZ_BANK;
  const engine = window.QuizEngine;
  if (!bank || !engine) {
    const error = document.createElement('p');
    error.className = 'error-note';
    error.textContent = 'The game files could not load. Keep index.html, styles.css, questions.js, engine.js, and app.js together, then reload.';
    $('main').replaceChildren(error);
    return;
  }
  let state = null;
  let sound = false;
  let audioContext = null;
  let screen = 'home';
  const shortTopics = {aids:'Pharmaceutical Aids', ions:'Essential Ions', gi:'GI Agents', topical:'Topical & Other Agents'};
  const topicLabel = id => id === 'all' ? 'All topics · Mixed round' : bank.topics.find(t => t.id === id)?.label || id;

  function icon(name, className = 'icon') {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', className);
    svg.setAttribute('aria-hidden', 'true');
    const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
    use.setAttribute('href', '#i-' + name);
    svg.append(use);
    return svg;
  }

  // No external images, fonts, requests, or sound files are needed.
  for (const slot of document.querySelectorAll('.scene-slot')) {
    slot.append($('scene-template').content.cloneNode(true));
  }
  for (const topic of bank.topics) {
    const option = document.createElement('option');
    option.value = topic.id; option.textContent = topic.label;
    $('topic-select').append(option);
  }
  function updatePool() {
    const topic = $('topic-select').value;
    const count = bank.questions.filter(q => topic === 'all' || q.topic === topic).length;
    $('pool-description').textContent = `${count} questions in the pool · 10 picked each round`;
  }
  $('topic-select').addEventListener('change', updatePool);
  updatePool();

  function showScreen(name) {
    screen = name;
    for (const id of ['home','game','result']) $(id + '-screen').hidden = id !== name;
    window.scrollTo({top:0, behavior:'instant'});
  }

  function playTone(isCorrect) {
    if (!sound) return;
    try {
      const Audio = window.AudioContext || window.webkitAudioContext;
      if (!Audio) return;
      audioContext ??= new Audio();
      if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
      const start = audioContext.currentTime;
      const notes = isCorrect ? [523.25,659.25,783.99] : [277.18,207.65];
      notes.forEach((frequency,index) => {
        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const at = start + index * .08;
        osc.type = 'sine'; osc.frequency.value = frequency;
        gain.gain.setValueAtTime(0,at);
        gain.gain.linearRampToValueAtTime(.055,at+.012);
        gain.gain.exponentialRampToValueAtTime(.001,at+.19);
        osc.connect(gain); gain.connect(audioContext.destination);
        osc.start(at); osc.stop(at+.21);
      });
    } catch (_) { /* Sound is optional; gameplay remains available. */ }
  }
  $('sound-toggle').addEventListener('click', () => {
    sound = !sound;
    const label = sound ? 'Turn sound off' : 'Turn sound on';
    $('sound-toggle').setAttribute('aria-label',label);
    $('sound-toggle').setAttribute('aria-pressed',String(sound));
    $('sound-toggle').title = label;
    $('sound-toggle').replaceChildren(icon(sound ? 'sound' : 'muted'));
    if (sound) playTone(true);
  });

  function mood() {
    if (!state) return 'happy';
    if (state.outcome === 'lost') return 'sad';
    return state.mistakes >= 3 ? 'worried' : 'happy';
  }
  function updateRoo() {
    for (const scene of document.querySelectorAll('#game-screen .roo-scene, #result-screen .roo-scene')) scene.dataset.mood = mood();
    $('lives').replaceChildren();
    const remaining = engine.MAX_MISTAKES - state.mistakes;
    $('lives').setAttribute('role','img');
    $('lives').setAttribute('aria-label',`${remaining} of 5 lives remaining`);
    for (let i = 0; i < engine.MAX_MISTAKES; i++) $('lives').append(icon('heart',i < remaining ? 'life' : 'life lost'));
    $('lives-caption').textContent = `${remaining} ${remaining === 1 ? 'life' : 'lives'} left`;
    $('correct-count').textContent = state.correct;
    $('mistake-count').textContent = state.mistakes;
    const messages = ['You’ve got this. Let’s hop to it!','One bump. Plenty of road ahead.','Take a breath. You’re still in it.','Two lives left. Think it through.','One life left. Make this hop count.','A little rest, then another round.'];
    $('roo-message').textContent = messages[state.mistakes];
  }

  function renderProgress() {
    const progress = $('round-progress');
    progress.replaceChildren();
    progress.setAttribute('aria-valuenow',state.history.length);
    progress.setAttribute('aria-valuetext',`${state.history.length} of 10 items answered`);
    for (let i = 0; i < engine.ROUND_SIZE; i++) {
      const segment = document.createElement('span');
      segment.className = 'progress-segment';
      segment.setAttribute('aria-hidden','true');
      if (state.history[i]) segment.classList.add(state.history[i].correct ? 'correct' : 'wrong');
      else if (i === state.index) segment.classList.add('current');
      progress.append(segment);
    }
  }

  function startGame(topic) {
    state = engine.makeRound(bank,topic);
    $('round-topic').textContent = topicLabel(topic);
    showScreen('game');
    renderQuestion();
  }

  function renderQuestion() {
    const q = state.questions[state.index];
    $('question-counter').textContent = `QUESTION ${String(state.index+1).padStart(2,'0')} / 10`;
    $('question-topic').textContent = shortTopics[q.topic];
    $('question-title').textContent = q.question;
    $('answers').replaceChildren();
    q.options.forEach((option,i) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'answer-button';
      button.dataset.choice = i;
      const letter = document.createElement('span');
      letter.className = 'answer-letter'; letter.textContent = 'ABCD'[i];
      letter.setAttribute('aria-hidden','true');
      const copy = document.createElement('span');
      copy.className = 'answer-copy'; copy.textContent = option;
      button.setAttribute('aria-label',`${'ABCD'[i]}) ${option}`);
      button.append(letter,copy);
      button.addEventListener('click',() => selectAnswer(i));
      $('answers').append(button);
    });
    $('feedback').hidden = true;
    $('feedback').textContent = '';
    $('next-button').hidden = true;
    $('keyboard-hint').hidden = false;
    updateRoo(); renderProgress();
    $('question-title').focus({preventScroll:true});
  }

  function selectAnswer(choice) {
    if (!state || screen !== 'game') return;
    const record = engine.answer(state,choice);
    if (!record) return;
    playTone(record.correct);
    updateRoo(); renderProgress();
    if (state.phase === 'ended') {
      renderResults();
      return;
    }
    const q = record.question;
    for (const button of $('answers').children) {
      const index = Number(button.dataset.choice);
      button.disabled = true;
      if (index === q.answer) {
        button.classList.add('correct');
        button.append(icon('check','icon answer-icon'));
      } else if (index === choice) {
        button.classList.add('wrong');
        button.append(icon('cross','icon answer-icon'));
      } else button.classList.add('dimmed');
    }
    $('feedback').className = record.correct ? 'feedback' : 'feedback wrong';
    $('feedback').textContent = record.correct ? 'That’s right! One good hop closer.' : `Not quite. Correct answer: ${q.options[q.answer]}`;
    $('feedback').hidden = false;
    $('next-button').hidden = false;
    $('keyboard-hint').hidden = true;
    const scene = document.querySelector('#game-screen .roo-scene');
    scene.classList.remove('bounce','shake');
    void scene.offsetWidth;
    scene.classList.add(record.correct ? 'bounce' : 'shake');
    $('next-button').focus({preventScroll:true});
  }

  function renderResults() {
    showScreen('result');
    const lost = state.outcome === 'lost';
    $('result-eyebrow').textContent = lost ? 'FIVE MISTAKES · GAME OVER' : 'TEN QUESTIONS · ROUND COMPLETE';
    $('result-title').textContent = lost ? 'A pause, not the end.' : state.correct === 10 ? 'Ten out of ten. Roo-tastic!' : 'You kept Roo hopping.';
    const remaining = engine.ROUND_SIZE-state.history.length;
    $('result-subtitle').textContent = lost ? `The round ended on your fifth incorrect item. You answered ${state.history.length} of 10 questions${remaining ? `; ${remaining} ${remaining === 1 ? 'was' : 'were'} left unattempted` : ''}. Review your answers, then give it another hop.` : `You completed all 10 questions with ${state.correct} correct and ${state.mistakes} ${state.mistakes === 1 ? 'mistake' : 'mistakes'}. Take a moment to review what you learned.`;
    $('result-score').textContent = `${state.correct} / 10`;
    $('result-answered').textContent = `${state.history.length} / 10`;
    $('result-mistakes').textContent = `${state.mistakes} / 5`;
    $('review-count').textContent = `${state.history.length} ${state.history.length === 1 ? 'item' : 'items'} to review`;
    const last = state.history.at(-1);
    $('last-answer').textContent = `Last item: ${last.correct ? 'correct' : 'incorrect'}.${remaining ? ' Unattempted items are excluded from the review.' : ' Select an item below to see its answer.'}`;
    $('review-list').replaceChildren();
    state.history.forEach((record,i) => {
      const detail = document.createElement('details');
      detail.className = 'review-item';
      if (!record.correct) detail.open = true;
      const summary = document.createElement('summary');
      const number = document.createElement('span');
      number.className = 'review-number'; number.textContent = String(i+1).padStart(2,'0');
      const status = document.createElement('span');
      status.className = record.correct ? 'review-status' : 'review-status wrong';
      status.setAttribute('aria-label',record.correct ? 'Correct' : 'Incorrect');
      status.append(icon(record.correct ? 'check' : 'cross'));
      const question = document.createElement('span');
      question.className = 'review-question'; question.textContent = record.question.question;
      const chevron = document.createElement('span');
      chevron.className = 'review-chevron'; chevron.textContent = '⌄'; chevron.setAttribute('aria-hidden','true');
      summary.append(number,status,question,chevron);
      const content = document.createElement('div');
      content.className = 'review-detail';
      if (!record.correct) {
        const chosen = document.createElement('p');
        chosen.className = 'review-chosen';
        chosen.textContent = `Your answer: ${record.question.options[record.choice]}`;
        content.append(chosen);
      }
      const correct = document.createElement('p');
      correct.className = 'review-correct';
      correct.textContent = `Correct answer: ${record.question.options[record.question.answer]}`;
      content.append(correct); detail.append(summary,content); $('review-list').append(detail);
    });
    updateRoo();
    $('result-title').focus({preventScroll:true});
  }

  $('start-form').addEventListener('submit',event => {
    event.preventDefault();
    startGame($('topic-select').value);
  });
  $('next-button').addEventListener('click',() => {
    if (state && engine.next(state)) renderQuestion();
  });
  $('replay-button').addEventListener('click',() => startGame(state.topic));
  $('topics-button').addEventListener('click',() => {
    state = null; showScreen('home'); $('topic-select').focus({preventScroll:true});
  });
  $('quit-button').addEventListener('click',() => $('quit-dialog').showModal());
  $('quit-dialog').addEventListener('close',() => {
    if ($('quit-dialog').returnValue === 'leave') {
      state = null; showScreen('home'); $('topic-select').focus({preventScroll:true});
    }
  });
  // Keep the brand link from discarding a round without confirmation.
  document.querySelector('.brand').addEventListener('click',event => {
    event.preventDefault();
    if (screen === 'game') $('quit-dialog').showModal();
    else {state = null; showScreen('home'); $('home-title').setAttribute('tabindex','-1'); $('home-title').focus({preventScroll:true});}
  });
  document.addEventListener('keydown',event => {
    if (screen !== 'game' || !state || $('quit-dialog').open || event.repeat || event.ctrlKey || event.altKey || event.metaKey) return;
    if (state.phase === 'answering' && /^[1-4]$/.test(event.key)) {
      event.preventDefault(); selectAnswer(Number(event.key)-1);
    } else if (state.phase === 'feedback' && event.key === 'Enter' && event.target === document.body) {
      event.preventDefault(); $('next-button').click();
    }
  });
})();
