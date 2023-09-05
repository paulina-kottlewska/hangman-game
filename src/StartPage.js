import React from "react";
import "./App.css";

function StartPage({ handleStartGame, flowers, blackPen, pencil }) {

    const title = "HANGMAN".split("").map((letter, index) => (
        <div key={index} className="letter-title">{letter}</div>
    ))

    return (
        <>
            <div className="left-column left-column-start-background">
                <div className="title-letters-container">
                    {title}
                </div>
                <img src={pencil} alt="yellow pencil and eraser" className="img-pencil"></img>
            </div>
            <div className="start-button-container">
                <button className="start-game button-base" onClick={handleStartGame}>
                    Start Game
                </button>
                <img src={flowers} alt="doodled flowers" className="img-flowers"></img>
                <img src={blackPen} alt="black pen" className="img-black-pen"></img>
            </div>
        </>
    )
}

export default StartPage;