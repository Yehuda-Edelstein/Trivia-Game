// - VARIABLES
window.location = "home-page.html"

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
        question: "According to the World Quizzing Championships, who is the best trivia player in the world?",
        answer1: "Didier Bruyere",
        answer2: "Kevin Ashman",
        answer3: "Pat Gibson",
        rightAnswer: "Kevin Ashman",
        funFact: "Apart from being the world's greatest quiz player, Ashman is a supporter of the Tottenham Hotspur Club (Spurs) and has interest in folk music."
    },
    {
        question: "Recorded and aired in 1940, the first trivia-like game show was called __________________?",
        answer1: "Lies and Honesty",
        answer2: "Perception or Deception",
        answer3: "Truth or Consequences",
        rightAnswer: "Truth or Consequences",
        funFact: "The show was licensed by CBS and has become known as the original trivia game show and it ran for a total of 48 years, airing it's final episode in 1988."
    },
    {
        question: "Trivial Pursuit is a game in which a player answers a question right in order to receive a _______ for that catogory of trivia.'",
        answer1: "Wedge",
        answer2: "Slice",
        answer3: "Piece",
        rightAnswer: "Wedge",
        funFact: "The game of 'Trivial Pursuit' was invented in Montreal, Canada in 1979 by Chris Haney and Scott Abott. After noticing their Scrabble game was missing crucial tiles, they decided to make their own game."
    },
    {
        question: "How many questions are there in the trivia game show 'Who Wants to Be a Millionaire'?",
        answer1: "13",
        answer2: "22",
        answer3: "15",
        rightAnswer: "15",
        funFact: "In the history of the show, only six lucky players have ever won the full jackpot. However, many people have decided to leave early, taking their winnings instead of continuing."
    },
    {
        question: "Which on of the movies listed below does NOT include trivia as in integral part.",
        answer1: "Slumdog Millionaire",
        answer2: "The Game",
        answer3: "Quiz Show",
        rightAnswer: "The Game",
        funFact: "David Fincher's 'The Game' may sound like a movie about a light-hearted game, it's quite the opposite. The 1997 psychological thriller made a whopping $109M at the box office."
    },
    {
        question: "Who was the first host for the mobile trivia app called 'HQ?'",
        answer1: "Scott Rogowsky",
        answer2: "Jim Vance",
        answer3: "Leon Witkowsky",
        rightAnswer: "Scott Rogowsky",
        funFact: "Scott started hosting HQ in the summer of 2017, and spoke his catchphrase 'let's get down to the nitty-gritty' at least once every episode he hosted."
    },
    {
        question: "The first question of this Trivia Game, Trivia Game invovled what aspect about the first every documentation of the term trivia?",
        answer1: "Year",
        answer2: "Documentation",
        answer3: "Definition",
        rightAnswer: "Year",
        funFact: "The average short term memory for a person ranges somewhere form 15-30 seconds. If you got this answer right, you have a pretty good short term memory"
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
    answer1.className = ("no-modal")
    answer2.className = ("no-modal")
    answer3.className = ("no-modal")

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

        answer1.className = ("")
        answer2.className = ("")
        answer3.className = ("")

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





    
