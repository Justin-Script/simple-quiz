

// --------------------
// EASY QUESTIONS
// --------------------
const easyQuestions = [

  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "How To Make Lumpia",
      "HyperLink Text Markup Language",
      "Hyper Text Markingup Language"
    ],
    answer: 0
  },

  {
    question: "What does PHP stand for?",
    options: [
      "Peace HyperText Preprocessor",
      "Php HyperLink Preprocessor",
      "Php HyperText Preprocessor",
      "All of the above"
    ],
    answer: 2
  },

  {
    question: "Which language is used to style web pages?",
    options: [
      "HTML",
      "CSS",
      "Java",
      "Python"
    ],
    answer: 1
  }

];

// --------------------
// NORMAL QUESTIONS
// --------------------
const normalQuestions = [

  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<url>"
    ],
    answer: 0
  },

  {
    question: "Which CSS property changes the text color?",
    options: [
      "background-color",
      "font-color",
      "color",
      "text-style"
    ],
    answer: 2
  },

  {
    question: "Which JavaScript keyword is used to declare a variable that can be reassigned?",
    options: [
      "const",
      "let",
      "fixed",
      "static"
    ],
    answer: 1
  },

  {
    question: "Which method is used to select an element by its ID?",
    options: [
      "querySelectorAll()",
      "getElementById()",
      "getElementsByClassName()",
      "selectElement()"
    ],
    answer: 1
  },

  {
    question: "What is the correct JavaScript operator for strict equality?",
    options: [
      "=",
      "==",
      "===",
      "!="
    ],
    answer: 2
  },

  {
    question: "Which event occurs when a button is clicked?",
    options: [
      "onhover",
      "onclick",
      "onchange",
      "onfocus"
    ],
    answer: 1
  },

  {
    question: "Which array method adds an item to the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "slice()"
    ],
    answer: 0
  },

  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Management",
      "Document Orientation Mode",
      "Digital Object Model"
    ],
    answer: 0
  },

  {
    question: "Which loop is commonly used to iterate through an array?",
    options: [
      "while",
      "for",
      "switch",
      "try"
    ],
    answer: 1
  },

  {
    question: "Which function displays a popup message in JavaScript?",
    options: [
      "prompt()",
      "alert()",
      "console.log()",
      "confirm()"
    ],
    answer: 1
  }

];

const hardQuestions = [

  {
    question: "Which of the following is NOT a JavaScript data type?",
    options: [
      "String",
      "Number",
      "Boolean",
      "Character"
    ],
    answer: 3
  },

  {
    question: "Which method is used to convert a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.convert()",
      "JSON.toObject()"
    ],
    answer: 0
  },

  {
    question: "What is the output of the following code: console.log(typeof NaN); ?",
    options: [
      "'number'",
      "'NaN'",
      "'undefined'",
      "'object'"
    ],
    answer: 0
  }
];

export { easyQuestions, normalQuestions, hardQuestions };
