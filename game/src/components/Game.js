import React, { useState } from 'react'

import { Button, ButtonGroup } from '@blueprintjs/core'


function Game() {

    const weapons = ["paper", "scissors", "rock"];
    const [loading, setLoading] = useState(false);
    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')
    const [winer, setWiner] = useState('')

    const chooseWeapon = (weapon) => {
        const choiceP1 = weapon;
        const choiceP2 = weapons[Math.floor(Math.random() * 3)];
        const winner = getWinner(choiceP1, choiceP2)
        setPlayerOne(choiceP1)
        setPlayerTwo(choiceP2)
        setWiner(winner)
    }

    const getWinner = (player1, player2) => {
        if (player1 === "paper") {
            if (player2 === "scissors") {
                return ("Computer wins")
            } else if (player2 === "rock") {
                return ("You win!!!!!")
            }
        }
    }

    return (
        <div>
            <div className="w-100 bg-pink vh-100 center">
                <div className="flex justify-around pa4">
                    <div className="bp3-card w-40 tl pa2 bg-red">
                        <span> Player score </span>
                        <span className="tr fr"> 10 </span>
                    </div>
                    <div className="bp3-card w-40 tl pa2 bg-green">
                        <span> Computer score </span>
                        <span className="tr fr"> 20 </span>
                    </div>
                </div>
                <div className="flex justify-around pa4">
                    <div className="pa3">
                        <img
                            src="https://hacktoberfest.lingonsaft.com/images/rock.png"
                            alt="rock"
                            onClick={() => chooseWeapon("rock")}
                            className="grow h4 w4 br-100 ba b--black-05"
                        />
                        <div>
                            <span className="f2 b "> rock </span>
                        </div>
                    </div>
                    <div className="pa3">
                        <img
                            src="https://hacktoberfest.lingonsaft.com/images/paper.png"
                            alt="rock"
                            onClick={() => chooseWeapon("paper")}
                            className="grow h4 w4 br-100 ba b--black-05"
                        />
                        <div>
                            <span className="f2 b "> paper </span>
                        </div>
                    </div>
                    <div className="pa3">
                        <img
                            src="https://hacktoberfest.lingonsaft.com/images/scissors.png"
                            alt="rock"
                            onClick={() => chooseWeapon("scissors")}
                            className="grow h4 w4 br-100 ba b--black-05"
                        />
                        <div>
                            <span className="f2 b "> scissor </span>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around pa4">
                    <ButtonGroup>
                        <Button
                            intent="success"
                            // rightIcon="tick"
                            text="Start the Game"
                            loading={loading}
                            // disabled={name.length > 0 ? false : true}
                            className="w-100 tc center mb4"
                            onClick={() => { setLoading(true); }}
                        />
                    </ButtonGroup>
                </div>
                <h1>Choices are</h1>
                <h2>player one:{playerOne}</h2>
                <h2>player two:{playerTwo}</h2>
                <h1>{winer}</h1>
            </div>
        </div>
    )
}

export default Game
