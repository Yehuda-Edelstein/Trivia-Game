// VARIABLES 
const description = document.querySelector(".description")
const instructions = document.querySelector("#instructions")
const startButton = document.querySelector(".start-button")

let instructionsShown = false

// FUNCTIONS
function howToPlay (event) {
    event.preventDefault()
    if (instructionsShown == true) {return}
    const instructionsText = document.createElement("p") 
    instructionsText.innerText = "This is how you play"
    instructions.appendChild(instructionsText)
    
    const x = document.getElementById("close-button")
    x.style.display = "block"
    instructionsShown = true

    function closeButton (event) {
        event.preventDefault()
        x.style.display = "none"
        instructionsText.style.display = "none"
        instructionsShown = false
        
    }
    x.addEventListener("click", closeButton)
}
instructions.addEventListener("click", howToPlay)

function startGame (event) {
    event.preventDefault()
    window.location = href="question-1.html"
}
startButton.addEventListener("click", startGame)