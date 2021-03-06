import React, { useState } from 'react'

import { Alert, Button, ButtonGroup } from '@blueprintjs/core'

function Game() {

    const weapons = ["paper", "scissors", "rock"];
    const [loading, setLoading] = useState(false);
    const [playerOne, setPlayerOne] = useState('')
    const [playerTwo, setPlayerTwo] = useState('')
    const [winer, setWiner] = useState('')
    const [playerScore, setPlayerScore] = useState(0)
    const [computerScore, setComputerScore] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [totalGame, setTotalGame] = useState(0)
    const [totalTie, setTotalTie] = useState(0)

    const _win = 'You win!'
    const _lose = 'Computer wins'
    const _tie = 'it\'s a tie'

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
                return ("You win!")
            }
            return "it's a tie"
        }
        else if (player1 === "rock") {
            if (player2 === "scissors") {
                return ("You win!")
            } else if (player2 === "paper") {
                return ("Computer wins")
            }
            return "it's a tie"
        }
        else if (player1 === "scissors") {
            if (player2 === "rock") {
                return ("Computer wins")
            } else if (player2 === "paper") {
                return ("You win!")
            }
            return "it's a tie"
        }
    }

    return (
        <div>
            <div className="w-100 bg-pink vh-100 center">
                <div className="pa4 cf">
                <div className="bp3-card fl mb3-l mb3 mb0-l pa3 w-25-l w-50-m w-50 tl">
                        <span className="b fw5 f5"> Games Played </span>
                        <span className="tr b fw5 f4 fr black"> { } {totalGame}</span>
                    </div>
                    <div className="bp3-card fl mb3-l mb3 mb0-l pa3 w-25-l w-50-m w-50 tl">
                        <span className="b fw5 f5"> Games Tied </span>
                        <span className="tr b fw5 f4 fr blue"> {totalTie} </span>
                    </div>
                    <div className=" bp3-card fl pa3 w-25-l w-50-m w-50 tl">
                        <span className="b fw5 f5"> Player score </span>
                        <span className="tr b fw5 f4 fr green"> { } {playerScore}</span>
                    </div>
                    <div className=" bp3-card fl pa3 w-25-l w-50-m w-50 tl">
                        <span className="b fw5 f5"> Computer score </span>
                        <span className="tr b fw5 f4 fr red"> {computerScore} </span>
                    </div>

                </div>
                <div className="tc ">
                    {playerOne.length ?
                        <span className="f1 lh-copy">You have choosen</span>
                        :
                        <span className="f1 lh-copy">Choose anyone</span>
                    }
                    <span className="f1 lh-copy truncate"> {'  '}{playerOne}!!!</span>
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
                            disabled={playerOne.length > 0 ? false : true}
                            className="w-100 tc center mb4"
                            onClick={() => {
                                setLoading(true);
                                getWinner();
                                setIsOpen(true);
                                // setComputerScore()
                            }}
                        />
                    </ButtonGroup>
                    <Alert
                        // className={}
                        cancelButtonText="Cancel"
                        confirmButtonText="Play Again"
                        icon="trash"
                        intent="danger"
                        isOpen={isOpen}
                        // loading={loading}
                        onCancel={() => {
                            setIsOpen(false);
                            setLoading(false)
                            setTotalGame(totalGame+1)
                            setPlayerOne('')
                            setComputerScore(winer === _lose ? (computerScore+1)  : computerScore)
                            setPlayerScore(winer === _win ? (playerScore+1) : playerScore)
                            setTotalGame(totalGame+1)
                            setTotalTie(winer === _tie ? totalTie+1 : totalTie)
                        }
                        }
                        onConfirm={() => {
                            setIsOpen(false);
                            setLoading(false);
                            setPlayerOne('');
                            setComputerScore(winer === _lose ? (computerScore+1)  : computerScore)
                            setPlayerScore(winer === _win ? (playerScore+1) : playerScore)
                            setTotalGame(totalGame+1)
                            setTotalTie(winer === _tie ? totalTie+1 : totalTie)
                            console.log('pc score:', computerScore)
                            console.log('my score:', playerScore)
                            console.log('winer:', winer)
                        }
                        }
                    >
                        <h2>Computer choose {'   '}{playerTwo}</h2>
                        <h1>{winer}</h1>
                    </Alert>
                </div>
            </div>
        </div>
    )
}

export default Game
