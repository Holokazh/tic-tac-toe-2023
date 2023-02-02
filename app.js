let player_1 = "X"
let player_2 = "O"
let nb_turn = 0
let turn_player = true
let game = true
var blocks = document.querySelectorAll(`.block`);


function isWin() {
    if (nb_turn < 9) {
        if ((player_1 === blocks[0].textContent && player_1 === blocks[1].textContent && player_1 === blocks[2].textContent) ||
            (player_1 === blocks[3].textContent && player_1 === blocks[4].textContent && player_1 === blocks[5].textContent) ||
            (player_1 === blocks[6].textContent && player_1 === blocks[7].textContent && player_1 === blocks[8].textContent) ||
            (player_1 === blocks[0].textContent && player_1 === blocks[4].textContent && player_1 === blocks[8].textContent) ||
            (player_1 === blocks[2].textContent && player_1 === blocks[4].textContent && player_1 === blocks[6].textContent)) 
            {
                console.log("p1 win !")
                game = false
            } 
            else if ((player_2 === blocks[0].textContent && player_2 === blocks[1].textContent && player_2 === blocks[2].textContent) ||
            (player_2 === blocks[3].textContent && player_2 === blocks[4].textContent && player_2 === blocks[5].textContent) ||
            (player_2 === blocks[6].textContent && player_2 === blocks[7].textContent && player_2 === blocks[8].textContent) ||
            (player_2 === blocks[0].textContent && player_2 === blocks[4].textContent && player_2 === blocks[8].textContent) ||
            (player_2 === blocks[2].textContent && player_2 === blocks[4].textContent && player_2 === blocks[6].textContent)) 
            {
                console.log("p2 win !")
                game = false
            }
    } else {
        console.log("match nul")
        game = false
    }
}

function resetGame() {
    blocks.forEach(block => {
        block.textContent = ""
    })

    console.clear()
    nb_turn = 0
    turn_player = true
    game = true
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
                        isWin()
                    }, 1)
                } else {
                    alert("tu peux pas fdp")
                }
            } else if (game === false) {
                console.log("partie finito")
            }
        })
})