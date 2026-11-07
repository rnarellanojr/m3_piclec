# QuizRoo

A Hangaroo-inspired **multiple-choice pharmacy review game** built with plain HTML, CSS, and JavaScript. The uploaded questions remain multiple choice: one incorrect item costs one life. All artwork is original inline SVG.

## Play

1. Choose one topic or **Mix it up · All topics**.
2. Answer a round of **10 randomly selected questions**, with no repeated question within that round.
3. Each correct answer earns **1 point**. Each incorrect item costs **1 life**.
4. The **fifth incorrect answer ends the game immediately**, even before item 10. If this happens on item 10, the result is still game over.
5. Complete all 10 items with fewer than five mistakes to finish the round.
6. Review attempted items and correct answers, then replay or change topics.

There is no timer, skip button, or second attempt on an answered item. The score always uses a denominator of 10; unattempted items earn no points and are identified separately. Questions and option order shuffle on each round. Replays may include items from previous rounds. Mixed rounds include two or three questions from each of the four topics.

## Question bank

All **90 questions and their marked answer keys** were transcribed from the supplied material. The app preserves that material rather than adding independent clinical content.

| Topic | Questions |
| --- | ---: |
| Pharmaceutical Aids & Antioxidants | 40 |
| Physiological & Essential Ions | 15 |
| GI Agents | 15 |
| Topical, Dental & Miscellaneous Agents | 20 |

## Upload to GitHub Pages

1. Extract the ZIP on your computer. **Upload the extracted files, not the ZIP itself.**
2. Create a GitHub repository, for example `quizroo`. A public repository works with GitHub Free.
3. Use **Add file → Upload files** to upload the extracted contents. Ensure `index.html` is directly in the repository root, alongside `styles.css`, `questions.js`, `engine.js`, `app.js`, and `favicon.svg`. Commit the files to `main`.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then **Save**.
7. When deployment finishes, use the website URL shown in Pages settings. A project repository normally uses `https://YOUR-USERNAME.github.io/quizroo/`.

The included `.nojekyll` file can be uploaded too. It is optional for the main app files. No package installation, API key, build command, server, or custom domain is needed. Relative file paths support GitHub project sites.

GitHub's [official publishing instructions](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site) describe these settings.

## Open on your computer

Extract the ZIP and double-click `index.html`. Keep the files together. The app uses classic local scripts and does not fetch question data, so it also runs directly from a local folder. Once downloaded, it needs no internet connection to play. On phones, use the published Pages URL.

## Controls and accessibility

- Tap or click an answer; use **Next question** after feedback.
- On a keyboard, use **1–4** for A–D. Press **Enter** on the focused Next question button to advance.
- The sound button toggles optional synthesized effects. Sound begins off.
- A leave-round dialog prevents the in-app Leave round and logo controls from accidentally discarding progress.
- Includes keyboard focus styles, text feedback, screen-reader labels, and reduced-motion support.

## Edit the questions

Edit `questions.js` with a text editor. Each item uses this structure:

```js
{
  "id": "ions-16",
  "topic": "ions",
  "question": "Your question here?",
  "options": ["First option", "Second option", "Third option", "Fourth option"],
  "answer": 1
}
```

`answer` is the zero-based index of the correct option: **0 = A, 1 = B, 2 = C, 3 = D** in the stored bank. Displayed answer positions shuffle, with the key updated automatically. Use unique IDs and at least 10 items in each topic. Keep commas and quotation marks valid. No asterisk is needed in the game bank.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Screens, controls, and original kangaroo artwork |
| `styles.css` | Desktop and mobile appearance, animations |
| `questions.js` | Editable 90-item question bank |
| `engine.js` | Selection, shuffling, scoring, and game-over rules |
| `app.js` | Game interaction, feedback, optional sounds, and review |
| `favicon.svg` | Browser-tab icon |
| `tests/game.test.cjs` | Core rules and question-bank checks |

For developer verification with Node.js installed:

```sh
node --test tests/game.test.cjs
```

The tests cover early game over, a fifth mistake on item 10, 10-item completion, repeated clicks, invalid choices, clean replays, topic selection, unique items, and correct-key preservation during shuffling.

## Classroom use

This is a practice game. It has no login, analytics, student-data collection, saved scores, or teacher dashboard. A page reload clears the current round. As with other client-side quizzes, the question bank and keys can be read in the source, so use a controlled assessment system for secure graded examinations.

An independent educational game inspired by the five-lives format, with no affiliation to the original Hangaroo game.
