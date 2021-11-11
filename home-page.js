// VARIABLES 
const description = document.querySelector(".description")
const instructions = document.querySelector("#instructions")
const startButton = document.querySelector(".start-button")
const div = document.querySelector(".instructions")


let instructionsShown = false


// FUNCTIONS
function howToPlay (event) {
    event.preventDefault()
    if (instructionsShown == true) {return}

    instructions.innerText = ""

    const instructionsText = document.createElement("p") 
    instructionsText.innerText = "Try your best to answer the questions correctly. That's it, really."
    instructions.appendChild(instructionsText)
    
    const x = document.getElementById("close-button")
    x.style.display = "block"
    instructionsShown = true
    div.className = ("no-hover")

    function closeButton (event) {
        event.preventDefault()
        x.style.display = "none"
        instructionsText.style.display = "none"
        instructionsShown = false
        div.className = ("instructions")
        instructions.innerText = "How to Play"
    }
    x.addEventListener("click", closeButton)
}
instructions.addEventListener("click", howToPlay)

function startGame (event) {
    event.preventDefault()
    window.location = href="https://pages.git.generalassemb.ly/Yehuda-Edelstein/Trivia-Game/index.html"
}
startButton.addEventListener("click", startGame)
