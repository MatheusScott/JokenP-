const result = document.querySelector(".result")
const myScore = document.querySelector("#human-score")
const npcScore = document.querySelector("#machine-score")

let humanScoreNumber = 0
let npcScoreNumber = 0

const playerHuman = (humanChoice) => {
    playTheGame(humanChoice, playerNpc())
}

const playerNpc = () => {
    const choicer = ["rock", "paper", "sciossors"]
    const randomChoice = Math.floor(Math.random() * 3)

    return choicer[randomChoice]
}

const playTheGame = (human, machine) => {
    if (human === machine) {

        result.innerHTML = "Deu empate"

    } else if ((human === "paper" && machine === "rock") ||
        (human === "rock" && machine === "sciossors") ||
        (human === "sciossors" && machine === "paper")) {
            
        humanScoreNumber++
        myScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou"

    } else {
        npcScoreNumber++
        npcScore.innerHTML = npcScoreNumber
        result.innerHTML = "NPC Ganhou"
    }
}