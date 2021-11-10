// - VARIABLES
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

const questionSection = document.querySelector(".question")
const nextQuestion = document.querySelector(".next-question")
const heading = questionSection.querySelector("h1")
const answers = questionSection.querySelector("ul")

// - START GAME DIV
const game = document.createElement("div")
game.className = "game"
game.innerText = "Click here to start game"
questionSection.appendChild(game)

let questionNumber = Number(questionSection.dataset["number"])
let isQuestionedAnswered = false
let questionsAnswered = 0
let score = 0

// - START GAME VARIABLES
game.style.display = "none"
heading.innerText = questions[questionNumber].question

    const answer1 = document.createElement("li")
    const answer2 = document.createElement("li")
    const answer3 = document.createElement("li")

    answer1.innerText = questions[questionNumber].answer1
    answer2.innerText = questions[questionNumber].answer2
    answer3.innerText = questions[questionNumber].answer3

    answers.appendChild(answer1)
    answers.appendChild(answer2)
    answers.appendChild(answer3)

    let amountAnswered = document.querySelector(".questions-answered")
    amountAnswered.innerText = `Questions answered -- ${questionNumber}/10`


// END GAME MODEL VARIABLES
const endGameModal = document.querySelector(".end-game")
const gameScore = document.querySelector(".score")
const playAgainButton = document.querySelector(".play-again")
const homePage = document.querySelector(".home-page")
endGameModal.appendChild(homePage)

// - FUNCTIONS
function answerQuestion (event) {
    if (isQuestionedAnswered == true) {return}
    if (event.target.innerText == questions[questionNumber].rightAnswer) {
        let status = document.querySelector(".status")
        status.innerText = "Correct"
        status.style.color = "green"
        // ADD ANIMATION FOR CORRECT ANSWER
        score++
    } else {
        let status = document.querySelector(".status")
        status.innerText = "Incorrect"
        status.style.color = "red"
        // ADD ANIMATION FOR INCORRECT ANSWER
    }
    // - QUESTIONS MODAL
    let questionsModal = document.querySelector(".modal")
    questionsModal.style.display = "block"
    let funFact = document.querySelector(".fun-fact")
    funFact.innerText = `Fun Fact -- ${questions[questionNumber].funFact}`
    // - ADDS OPACITY 
    document.body.style.backgroundColor = "rgba(50, 0, 0, .5)"
    // - CHANGES VARIABLES TO CONTINUE GAME
    isQuestionedAnswered = true
    questionNumber++
    questionsAnswered++
    // - SHOWS HOW MANY QUESTIONS HAVE BEEN ANSWERED
    amountAnswered.innerText = `Questions answered -- ${questionNumber}/10`
        
        // - ENDGAME
        if (questionsAnswered == questions.length) {
            nextQuestion.innerText = "Finish Game"
            // - BASIC ENDGAME FUNC
            function finishGame () {
                // - HIDES QUESTIONS MODAL
                modal.style.display = "none"
                // - DISPLAYS ENDGAME MODAL
                endGameModal.style.display = "block"
                // - COMPUTES & DISPLAYS CORRECT-ANSWER PERCENTAGE
                scorePercent = Math.floor((score / questions.length) * 100)
                gameScore.innerHTML = `${scorePercent}%`

                    // - REDIRECTING FUNCS
                    function backToHome () {
                        window.location = "home-page.html"
                    }
                    homePage.addEventListener("click", backToHome)

                    function playAgain () {
                        window.location = "index.html"
                    }
                    playAgainButton.addEventListener("click", playAgain)
                }
                nextQuestion.addEventListener("click", finishGame)
        }

    function nextQ () {
        if (questionsAnswered == questions.length) {return}

        questionsModal.style.display = "none"
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





    
