// -- VARIABLES
let questions = [
    {
        question: "In what year was the term 'trivia' first documented publically?",
        answer1: "1965",
        answer2: "1932",
        answer3: "1907",
        rightAnswer: "1965",
        funFact: "On February 5, 1965, the Columbia Daily Spectator published a column by Ed Goodgold, which coined the term 'Trivia' for the well-known parlour game."
    },
    {
        question: "Which state holds the largest trivia contest in America?",
        answer1: "Maryland",
        answer2: "Vermont",
        answer3: "Wisconsin",
        rightAnswer: "Wisconsin",
        funFact: "Stevens Point, Wisconsin holds the largest current contest for trivia at the University of Wisconsin-Stevens Point's college radio station. The contest is open to anyone and usually consists of 400 teams."
    },
    {
        question: "The word 'Trivia' derives from the Roman words meaning 'three ______.'",
        answer1: "Choices",
        answer2: "Trees",
        answer3: "Roads",
        rightAnswer: "Roads",
        funFact: "The words 'three roads' was another way of saying common knowledge or 'commonplace' in Roman times."
    },
    {
        question: "In what year was the term 'trivia' first documented publically?",
        answer1: "1965",
        answer2: "1932",
        answer3: "1907",
        rightAnswer: "1965",
        funFact: "On February 5, 1965, the Columbia Daily Spectator published a column by Ed Goodgold, which coined the term 'Trivia' for the well-known parlour game."
    },
    {
        question: "Which state holds the largest trivia contest in America?",
        answer1: "Maryland",
        answer2: "Vermont",
        answer3: "Wisconsin",
        rightAnswer: "Wisconsin",
        funFact: "Stevens Point, Wisconsin holds the largest current contest for trivia at the University of Wisconsin-Stevens Point's college radio station. The contest is open to anyone and usually consists of 400 teams."
    },
    {
        question: "The word 'Trivia' derives from the Roman words meaning 'three ______.'",
        answer1: "Choices",
        answer2: "Trees",
        answer3: "Roads",
        rightAnswer: "Roads",
        funFact: "The words 'three roads' was another way of saying common knowledge or 'commonplace' in Roman times."
    },
    {
        question: "In what year was the term 'trivia' first documented publically?",
        answer1: "1965",
        answer2: "1932",
        answer3: "1907",
        rightAnswer: "1965",
        funFact: "On February 5, 1965, the Columbia Daily Spectator published a column by Ed Goodgold, which coined the term 'Trivia' for the well-known parlour game."
    },
    {
        question: "Which state holds the largest trivia contest in America?",
        answer1: "Maryland",
        answer2: "Vermont",
        answer3: "Wisconsin",
        rightAnswer: "Wisconsin",
        funFact: "Stevens Point, Wisconsin holds the largest current contest for trivia at the University of Wisconsin-Stevens Point's college radio station. The contest is open to anyone and usually consists of 400 teams."
    },
    {
        question: "The word 'Trivia' derives from the Roman words meaning 'three ______.'",
        answer1: "Choices",
        answer2: "Trees",
        answer3: "Roads",
        rightAnswer: "Roads",
        funFact: "The words 'three roads' was another way of saying common knowledge or 'commonplace' in Roman times."
    },
    {
        question: "The word 'Trivia' derives from the Roman words meaning 'three ______.'",
        answer1: "Choices",
        answer2: "Trees",
        answer3: "Roads",
        rightAnswer: "Roads",
        funFact: "The words 'three roads' was another way of saying common knowledge or 'commonplace' in Roman times."
    }
]


const q = document.querySelector(".question")
const heading = q.querySelector("h1")
const answers = q.querySelector("ul")
const nextQuestion = document.querySelector(".next-question")

const modal = document.querySelector(".modal")

const endGameModal = document.querySelector(".end-game")
const gameScore = document.querySelector(".score")
const playAgainButton = document.querySelector(".play-again")


const game = document.createElement("div")
game.className = "game"
game.innerText = "Click here to start game"
q.appendChild(game)

let questionNumber = Number(q.dataset["number"])
let isQuestionedAnswered = false
let questionsAnswered = 0
let score = 0

game.style.display = "none"
heading.innerText = questions[questionNumber].question

    const answer1 = document.createElement("li")
    answer1.innerText = questions[questionNumber].answer1
    answers.appendChild(answer1)

    const answer2 = document.createElement("li")
    answer2.innerText = questions[questionNumber].answer2
    answers.appendChild(answer2)

    const answer3 = document.createElement("li")
    answer3.innerText = questions[questionNumber].answer3
    answers.appendChild(answer3)

    let y = document.querySelector(".questions-answered")
    y.innerText = `Questions answered -- ${questionNumber}/10`

// FUNCTIONS
function answerQuestion (event) {
    if (isQuestionedAnswered == true) {return}
    
    if (event.target.innerText == questions[questionNumber].rightAnswer) {
        let status = document.querySelector(".status")
        status.innerText = "Correct"
        status.style.color = "green"
        score++
    } else {
        let status = document.querySelector(".status")
        status.innerText = "Incorrect"
        status.style.color = "red"
    }

  
    let x = document.querySelector(".modal")
    x.style.display = "block"

    let funFact = document.querySelector(".fun-fact")
    funFact.innerText = `Fun Fact -- ${questions[questionNumber].funFact}`

    document.body.style.backgroundColor = "rgba(50, 0, 0, .5)"
    isQuestionedAnswered = true
    questionNumber++
    questionsAnswered++
    y.innerText = `Questions answered -- ${questionNumber}/10`

    if (questionsAnswered == questions.length) {
        nextQuestion.innerText = "Finish Game"
        
        function finishGame () {
            modal.style.display = "none"
            

            endGameModal.style.display = "block"
            scorePercent = Math.floor((score / questions.length) * 100)
            gameScore.innerHTML = `${scorePercent}%`

            function playAgain () {
                window.location = "index.html"

            }
            playAgainButton.addEventListener("click", playAgain)
        }
        nextQuestion.addEventListener("click", finishGame)
    }
    

        function nextQ () {
            if (questionsAnswered == questions.length) {return}

            x.style.display = "none"
            document.body.style.backgroundColor = "rgba(255, 0, 0, .2)"
            isQuestionedAnswered = false

            heading.innerText = questions[questionNumber].question
            answer1.innerText = questions[questionNumber].answer1
            answer2.innerText = questions[questionNumber].answer2
            answer3.innerText = questions[questionNumber].answer3

            
        }
        nextQuestion.addEventListener("click", nextQ)
}
answer1.addEventListener("click", answerQuestion)
answer2.addEventListener("click", answerQuestion)
answer3.addEventListener("click", answerQuestion)





    
