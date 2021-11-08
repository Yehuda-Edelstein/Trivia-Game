const funFact = document.querySelector("#fun-fact")

const answer1 = document.querySelector("#answer-1")
const answer2 = document.querySelector("#answer-2")
const answer3 = document.querySelector("#answer-3")

nextButton = document.querySelector(".next-question")
nextButton.style.display = "none"

funFact.style.display = "none"


let isAnswered = false

function firstAnswer (event) {
    event.preventDefault()
    if (isAnswered == true) {return}
    answer1.style.backgroundColor = "green"
    isAnswered = true
    nextButton.style.display = "block"
    
    funFact.style.display = "block"
    score = 10
    scoreBox.innerHTML = `Score -- ${score}`
}

function secondAnswer (event) {
    event.preventDefault()
    if (isAnswered == true) {return}
    answer2.style.backgroundColor = "red"
    isAnswered = true
    nextButton.style.display = "block"

    funFact.style.display = "block"
}

function thirdAnswer (event) {
    event.preventDefault()
    if (isAnswered == true) {return}
    answer3.style.backgroundColor = "red"
    isAnswered = true
    nextButton.style.display = "block"

    funFact.style.display = "block"
}
answer1.addEventListener("click", firstAnswer)
answer2.addEventListener("click", secondAnswer)
answer3.addEventListener("click", thirdAnswer)



function nextQuestion (event) {
    event.preventDefault()
    window.location = "question-2.html"
}

nextButton.addEventListener("click", nextQuestion)

