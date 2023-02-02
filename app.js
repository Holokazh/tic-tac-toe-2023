const player_1 = "X"
const player_2 = "O"
let nb_turn = 0
let turn_player = true
let game = true

var nbTurnHTML = document.getElementById("nb-turn")
nbTurnHTML.textContent = nb_turn

var playerWin = document.getElementById("player-win")

var containerBlocks = document.querySelector(".container-block")

var blocks = document.querySelectorAll(".block");

var lineWin = document.getElementById("lineWin");

function isWinWithGraphics() {
    if (nb_turn >= 5) {
        if (player_1 === blocks[0].textContent && player_1 === blocks[1].textContent && player_1 === blocks[2].textContent) 
        {
            lineWin.style = "display: block; top: 16%; background-color: blue;"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[3].textContent && player_1 === blocks[4].textContent && player_1 === blocks[5].textContent) 
        {
            lineWin.style = "display: block; top: 49.5%; background-color: blue;"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[6].textContent && player_1 === blocks[7].textContent && player_1 === blocks[8].textContent) 
        {
            lineWin.style = "display: block; top: 82.5%; background-color: blue;"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[0].textContent && player_1 === blocks[4].textContent && player_1 === blocks[8].textContent) 
        {
            lineWin.style = "display: block; top: 50%; background-color: blue; transform: rotate(45deg);"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[2].textContent && player_1 === blocks[4].textContent && player_1 === blocks[6].textContent) 
        {
            lineWin.style = "display: block; top: 50%; background-color: blue; transform: rotate(-45deg);"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[0].textContent && player_1 === blocks[3].textContent && player_1 === blocks[6].textContent) 
        {
            lineWin.style = "display: block; top: 50%; right: 33%; background-color: blue; transform: rotate(90deg);"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[1].textContent && player_1 === blocks[4].textContent && player_1 === blocks[7].textContent) 
        {
            lineWin.style = "display: block; top: 50%; background-color: blue; transform: rotate(90deg);"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        else if (player_1 === blocks[2].textContent && player_1 === blocks[5].textContent && player_1 === blocks[8].textContent) 
        {
            lineWin.style = "display: block; top: 50%; left: 33.5%; background-color: blue; transform: rotate(90deg);"
            playerWin.textContent = "GAGNANT : Joueur 1"
            game = false
        } 
        // Player 2
        else if (player_2 === blocks[0].textContent && player_2 === blocks[1].textContent && player_2 === blocks[2].textContent) 
        {
            lineWin.style = "display: block; top: 16%; background-color: red;"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (player_2 === blocks[3].textContent && player_2 === blocks[4].textContent && player_2 === blocks[5].textContent) 
        {
            lineWin.style = "display: block; top: 49.5%; background-color: red;"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        }
        else if (player_2 === blocks[6].textContent && player_2 === blocks[7].textContent && player_2 === blocks[8].textContent) 
        {
            lineWin.style = "display: block; top: 82.5%; background-color: red;"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (player_2 === blocks[0].textContent && player_2 === blocks[4].textContent && player_2 === blocks[8].textContent) 
        {
            lineWin.style = "display: block; top: 50%; background-color: red; transform: rotate(45deg);"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (player_2 === blocks[2].textContent && player_2 === blocks[4].textContent && player_2 === blocks[6].textContent) 
        {
            lineWin.style = "display: block; top: 50%; background-color: red; transform: rotate(-45deg);"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (player_2 === blocks[0].textContent && player_2 === blocks[3].textContent && player_2 === blocks[6].textContent) 
        {
            lineWin.style = "display: block; top: 50%; right: 33%; background-color: red; transform: rotate(90deg);"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (player_2 === blocks[1].textContent && player_2 === blocks[4].textContent && player_2 === blocks[7].textContent) 
        {
            lineWin.style = "display: block; top: 50%; background-color: red; transform: rotate(90deg);"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (player_2 === blocks[2].textContent && player_2 === blocks[5].textContent && player_2 === blocks[8].textContent) 
        {
            lineWin.style = "display: block; top: 50%; left: 33.5%; background-color: red; transform: rotate(90deg);"
            playerWin.textContent = "GAGNANT : Joueur 2"
            game = false
        } 
        else if (nb_turn === 9) {
            alert("match nul")
            game = false
        }
    }
}

blocks.forEach(block => {
    block.addEventListener("click", event => {
        if (game === true) {
            e = event.target
        
            if (e.textContent === "") {
                if (turn_player === true) {
                    e.textContent = player_1
                    turn_player = false
                    nb_turn++
                } else if (turn_player === false) {
                    e.textContent = player_2
                    turn_player = true
                    nb_turn++
                }
                setTimeout(() => {
                    isWinWithGraphics()
                }, 1)
            } else {
                alert("tu peux pas fdp")
            }
        } else if (game === false) {
            alert("partie finito")
        }
        nbTurnHTML.textContent = nb_turn
    })
})

function resetGame() {
    playerWin.textContent = ""

    lineWin.style = "display: none"

    blocks.forEach(block => {
        block.textContent = ""
    })

    // console.clear()
    nb_turn = 0
    turn_player = true
    game = true

    nbTurnHTML.textContent = nb_turn
}
