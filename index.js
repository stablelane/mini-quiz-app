const Quizquestions = {
    questions: [
        {
            question: "what is the capital of india",
            options: ['delhi', 'kokalata', 'kerala'],
            correctOption: 'delhi'
        },
        {
            question: "what is the capital of kerala",
            options: ['trivandrum', 'kozhikode', 'kochi'],
            correctOption: 'trivandrum'
        },
        {
            question: "what is my name",
            options: ['anshad', 'dahsna', 'anshaad'],
            correctOption: 'anshad'
        },
        {
            question: "jilakka",
            options: ['anshad', 'dahsna', 'anshaad'],
            correctOption: 'anshad'
        },
        {
            question: "jilakka",
            options: ['anshad', 'dahsna', 'anshaad'],
            correctOption: 'dahsna'
        }
    ]
}
let result = 0
let count = 0

function addquestion(id = 0) {
    document.getElementById('container').innerHTML = `<div class="question-a" id="question-a">
            <p>${Quizquestions.questions[id].question}</p>
            <label for="option-a">${Quizquestions.questions[id].options[0]}</label>
            <input type="radio" name="options" id="option-a" class="option">
            <label for="option-b">${Quizquestions.questions[id].options[1]}</label>
            <input type="radio" name="options" id="option-b" class="option">
            <label for="option-c">${Quizquestions.questions[id].options[2]}</label>
            <input type="radio" name="options" id="option-c" class="option">
        </div>`
    document.querySelectorAll('.option').forEach(item => item.addEventListener('click',(e) => checkAnswer(e,count)))
}

addquestion()

function checkAnswer(e, questionNo) {
    if (e.target.labels[0].innerText == Quizquestions.questions[questionNo].correctOption) {
        console.log("correct item")
        e.target.labels[0].style.backgroundColor = 'green'
        count++
        result++
        if (count < Quizquestions.questions.length) {
            setTimeout(addquestion, 1000, count)

        } else {
            setTimeout(showresult, 1000)
        }

    } else {
        console.log("wrong item")
        e.target.labels[0].style.backgroundColor = 'red'
        count++
        if (count < Quizquestions.questions.length) {
            setTimeout(addquestion, 1000, count)

        } else {
            setTimeout(showresult, 1000)
        }
    }
    console.log(count,result)
}

function showresult() {
    document.getElementById('container').innerHTML = `<h1>your result is ${result}</h1>`
}