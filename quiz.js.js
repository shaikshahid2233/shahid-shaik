const app = document.querySelector("#app");
const dashbord = document.querySelector("#dashbord");
const quizContainer = document.querySelector("#quiz-container");
const scoreBoard = document.querySelector("#score-board");
const usernameInput = document.querySelector("#username");
const startQuizBtn = document.querySelector("#start-quiz-btn");
const nextQuestionBtn = document.querySelector("#next-question-btn");
const quizForm = document.querySelector("#quiz-form");
const question = document.querySelector("#question");
const options = document.querySelector("#options");
const scoreBoardBody = document.querySelector("score-board-body");

let currentQuestion = 0 ;
let score = 0;
let questions = [
    {
        text: "Who is the Caption of indian Cricket ?",
        options: [
            "virat kholi",
            "Rohit Sharam",
            "KL Rahul",
            "Hardik Pandya",
        ],
        answer: 1
    },
    {
        text: "Who is the present NO 1 bowler in cricket?",
        options: [
            "Mohammad Siraj",
            "jaspit Bumra",
            "Mohammad Shami",
            "Bhuwanwshwar Kumar",
        ],
        answer:0
    },
    {
        text:"Most Runs in Cricket playing History?",
        options: [
            "ricky Ponting",
            "bren lara",
            "hasim Amla",
            "sachin tendulkar",
        ],
        answer:3
    },
    {
        text:"kiron pollad is which country player?",
        options: [
            "indian",
            "West Indies",
            "Srilanka",
            "England",
        ],
        answer:1
    }

];
startQuizBtn.addEventListener("click",function(event){
    event.preventDefault();
    dashbord.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
});

nextQuestionBtn.addEventListener("click",function(event){
    event.preventDefault();
    let selectedOption = -1;
    for (let i=0; i < quizForm.elements.lenght - 1; i++){
        if (quizForm.elements[i].checked){
            selectedOption = i ;
            break;
        }
    
    }
    if (selectedOption === questions[currentQuestion].answer){
        score++
    }
    currentQuestion++;
    if (currentQuestion === questions.length){
        quizContainer.style.display = "none";
        scoreBoard.style.display = "block";
        updateScoreBoard();
    } else {
        loadQuestion();
    }
});

function loadQuestion() {
    question.textContent = questions[currentQuestion].text;
    options.innerHTML = "";
    for (let i = 0; i < questions[currentQuestion].options.length; i++) {
        options.innerHTML +=`
        <div>
        <input type="radio" id="option-${i}" name="option" value="${i}">
        <label for="option-${i}">${questions[currentQuestion].options[i]}</label>}
        </div>
        `;
    }
    nextQuestionBtn.disabled = false;
}

function updateScoreBoard () {
    scoreBoardBody.innerHTML = "";
    let username = usernameInput.value || "anonymous";
    scoreBoardBody.innerHTML +=`
    <tr>
      <td> ${username}</td>
      <td>${score}/${questions.length}</td>
    <tr>
    `;
}


