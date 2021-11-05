// VARIABLES
const startButton = document.querySelector(".start-button")

// FUNCTIONS
function startGame (event) {
    event.preventDefault()
    
    startButton.style.display = "none"
    
    const description = document.querySelector(".description")
    var delayInMilliseconds = 2000
    description.innerText = "Let the games begin!"
    setTimeout(function() {
        description.innerHTML = "Question 1"
    }, delayInMilliseconds)
}

// EVENT LISTENERS
startButton.addEventListener("click", startGame)