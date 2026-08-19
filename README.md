# Simple Quiz

A browser-based quiz built with HTML, CSS, and JavaScript ES modules.

## Features

- Easy, Normal, and Hard difficulty levels
- Multiple-choice questions answered with `A`, `B`, `C`, or `D`
- Score tracking
- Modal quiz interface
- Questions separated from quiz logic using `export` and `import`

## Files

```text
index.html       Quiz interface
style.css        Page and modal styles
questions.js     Question data and exports
quiz.js          Quiz logic and imports
```

## Run the Quiz

1. Open the `simpleQuiz By Justin_Script` folder in VS Code.
2. Open `index.html` with the VS Code Live Server extension.
3. Select a difficulty level.
4. Enter an answer such as `A`, then click **Submit**.
5. Click **Next** to continue.

A local server is required because JavaScript modules do not work reliably when the HTML file is opened directly with `file://`.

## Add Questions

Add questions to the appropriate array in `questions.js`:

```js
{
  question: "Your question here",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answer: 0
}
```

The `answer` value is the correct option index:

- `0` = A
- `1` = B
- `2` = C
- `3` = D
