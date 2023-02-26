const questions = [
    {
        'que': 'Which of the following is a markup language ?',
        'a':'HTML',
        'b':'CSS',
        'c':"Javascript",
        'd':'nodejs',
        'correct': 'a'
    },
    {
        'que': 'What year java Script lunched ?',
        'a':'1996',
        'b':'1995',
        'c':"1994",
        'd':'1993',
        'correct': 'b'
    },
    {
        'que': 'short cut of CasCading Style Sheet ?',
        'a':'HTML',
        'b':'CSS',
        'c':"Javascript",
        'd':'nodejs',
        'correct': 'b'
    },
    {
        'que': 'JS means ?',
        'a':'HTML',
        'b':'CSS',
        'c':"Javascript",
        'd':'nodejs',
        'correct': 'c'
    }

]
let index = 0;
let total = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset();
     const data = questions [index]
     console.log(data)
     quesBox.innerHTML = `${index+1})${data.que}`;
     optionInputs[0].nextElementSibling.innerHTML = data.a;
     optionInputs[1].nextElementSibling.innerHTML = data.b;
     optionInputs[2].nextElementSibling.innerHTML = data.c; 
     optionInputs[3].nextElementSibling.innerHTML = data.d;
}
const sumbmitQuiz = () => {
    const data = questions [index]
     const ans = getAnswer()
     if (ans === data.correct){
          right++;
     }else{
        wrong++;
     }
     index++;
     loadQuestion();
     return;
}
const getAnswer = () => {
    optionInputs.forEach(
        (input) => {
            if(input.checked){
                return input.value;
            }
        }
    )
}
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
           
}
const endQuiz = () =>{
    document.getElementById("box").innerHTML = `
    <h3> Thank you for playing Quiz </h3>
    <h2> ${right}/${total} are correct </h2>`
}
// inital call
loadQuestion();