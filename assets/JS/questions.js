// quizQuestions array
// question - is the question
// choices - is an arrary of answers
// correctAnswer - is the array location of the answer

const quizQuestions = [
    {
      question: "What does JavaScript primarily add to a web page?",
      choices: ["Styling", "Behavior","Structure", "Animation."],
      correctAnswer: 1,
    },
    {
      question:
        "What does the 'DOM' stand for in JavaScript?",
      choices: [" Document Object Model", "Data Object Model", "Design Object Model", "Document Oriented Model."],
      correctAnswer: 0,
    },
    {
      question:
        "How can you comment a single line in JavaScript?",
      choices: [" // Comment", '/* Comment */', "<!-- Comment -->", " 'Comment'"],
      correctAnswer: 0,
    },

    {
      question:
        "What is the purpose of the 'getElementById' method? ",
      choices: [ "To get elements by class name "," To get elements by tag name " , "To get elements by their ID" , " To get elements by attribute name"],
      correctAnswer: 2,
    },

    {
    question: "What is the correct way to declare a variable in JavaScript?",
      choices: ['var x;', "variable x;", "v x;", "declare x;"],
      correctAnswer: 0,
    },
    {
      question: "Which keyword is used to create a function in JavaScript?",
      choices: ["func", "function", "fn", "create"],
      correctAnswer: 1,
    }
    ,
    {
      question: "What does the 'typeof' operator return for an array?",
      choices: ["array", "object", "string", "number"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of 'JSON.parse()' in JavaScript?",
      choices: ["Converts a string to a JSON object", "Converts a JSON object to a string", "Parses HTML content", "Creates a new JavaScript object"],
      correctAnswer: 0,
    },
    {
      question: "What does the 'NaN' in JavaScript stand for?",
      choices: ["Not a Number", "No Action Needed", "Negative and Null", "Newly Assigned Number"],
      correctAnswer: 0,
    }
    ,
    {
      question: "Are you going to pass this course?",
      choices: ["Nope", "Maybe", "you might just make it", "Yes!"],
      correctAnswer: 3,
    }
];

export  { quizQuestions };