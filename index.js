const Quizquestions = {
    questions: [
        {
            question: "what is the capital of india",
            options: ['delhi', 'kokalata', 'kerala']
        },
        {
            question: "what is the capital of kerala",
            options: ['trivandrum', 'kozhikode', 'kochi']
        },
        {
            question: "what is the my name",
            options: ['anshad', 'dahsna', 'anshaad']
        },
    ]
}
let result = 0
let count = 0
document.addEventListener('click', function (e) {
    if (e.target.id == 'correct-option') {
        document.getElementById("correct-option-a").style.backgroundColor = 'green'
        setTimeout(showSecondquestion, 1000)
        result++
        console.log(result)
        count++

    } else if (e.target.id == 'wrong-option-b' || e.target.id === 'wrong-option-c') {
        if (count == 0) {
            setTimeout(showSecondquestion, 1000)
            count++
        } else if(count == 1) {
            setTimeout(showThirdquestion, 1000)
            count++
        } else if(count == 2) {
            setTimeout(showresult, 1000)
        }
        document.getElementById(e.target.id).previousElementSibling.style.backgroundColor = 'red'
    } else if (e.target.id == 'correct-option-b') {
        document.getElementById("correct-option-b").style.backgroundColor = 'green'
        setTimeout(showThirdquestion, 1000)
        result++
        console.log(result)
        count++

    } else if (e.target.id == 'correct-option-c') {
        document.getElementById("correct-option-c").style.backgroundColor = 'green'
        setTimeout(showresult, 1000)
        result++
        console.log(result)

    }
})

document.getElementById('container').innerHTML = `<div class="question-a" id="question-a">
            <p>${Quizquestions.questions[0].question}</p>
            <label id="correct-option-a" for="option-a">${Quizquestions.questions[0].options[0]}</label>
            <input type="checkbox" name="option-a" id="correct-option">
            <label for="option-b">${Quizquestions.questions[0].options[1]}</label>
            <input type="checkbox" name="option-b" id="wrong-option-b">
            <label for="option-c">${Quizquestions.questions[0].options[2]}</label>
            <input type="checkbox" name="option-c" id="wrong-option-c">
        </div>`

function showSecondquestion() {
    document.getElementById('container').innerHTML = `<div class="question-a" id="question-a">
            <p>${Quizquestions.questions[1].question}</p>
            <label id="correct-option-b" for="option-a">${Quizquestions.questions[1].options[0]}</label>
            <input type="checkbox" name="option-a" id="correct-option-b">
            <label for="option-b">${Quizquestions.questions[1].options[1]}</label>
            <input type="checkbox" name="option-b" id="wrong-option-b">
            <label for="option-c">${Quizquestions.questions[1].options[2]}</label>
            <input type="checkbox" name="option-c" id="wrong-option-c">
        </div>`
}

function showThirdquestion() {
    document.getElementById('container').innerHTML = `<div class="question-a" id="question-a">
            <p>${Quizquestions.questions[2].question}</p>
            <label id="correct-option-c" for="option-a">${Quizquestions.questions[2].options[0]}</label>
            <input type="checkbox" name="option-a" id="correct-option-c">
            <label for="option-b">${Quizquestions.questions[2].options[1]}</label>
            <input type="checkbox" name="option-b" id="wrong-option-b">
            <label for="option-c">${Quizquestions.questions[2].options[2]}</label>
            <input type="checkbox" name="option-c" id="wrong-option-c">
        </div>`
}      


function showresult() {
    document.getElementById('container').innerHTML = `<h1>your result is ${result}</h1>`
} 
