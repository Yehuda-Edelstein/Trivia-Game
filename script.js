// VARIABLES
const startButton = document.querySelector(".start-button")
let description = document.querySelector(".description")

const answer1 = "1965"

// FUNCTIONS



function startGame (event) {
    event.preventDefault()
    
    startButton.style.display = "none"
    
    
    let delayInMilliseconds = 2000
    description.innerText = "Let the games begin!"

    setTimeout(function() {
        description.innerHTML = "Question 1"
        let triviaQuestion = document.createElement("div")
        triviaQuestion.classList.add("questions")
        triviaQuestion.innerText = "In what year was the game of 'trivia' first invented?"
        document.body.appendChild(triviaQuestion)

        let answerButton1 = document.createElement("button")
        let answerButton2 = document.createElement("button")
        let answerButton3 = document.createElement("button")

        answerButton1.innerText = "1965"
        answerButton2.innerText = "1903"
        answerButton3.innerText = "1933"

        answerButton1.classList.add("answer-buttons")
        answerButton2.classList.add("answer-buttons")
        answerButton3.classList.add("answer-buttons")
        
        document.body.appendChild(answerButton1)
        document.body.appendChild(answerButton2)
        document.body.appendChild(answerButton3)

        const answerButtons = document.querySelectorAll(".answer-buttons")

        for (let i = 0; i < answerButtons.length; i++) {
            function chooseAnswer (event) {
                event.preventDefault()
                console.log(answerButtons[i].innerText)
            }
                answerButtons[i].addEventListener("click", chooseAnswer)
                
            
        }


            


    }, delayInMilliseconds)    
    
}

// EVENT LISTENERS
startButton.addEventListener("click", startGame)