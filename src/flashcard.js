import React from "react";
import "./css/style.css";
import "./css/reset.css";

export default function Flashcard(props) {
    const [hideCard, setHideCard] = React.useState(true);
    const [childData, setChildData] = React.useState("");
    const {index, answer, question, counter, updateCounter, addColorArr, colorArr} = props;
    //TODO usestate lista para armazenar indexes e suas cores
    return hideCard ? (
        <ul className="cards" onClick={() => setHideCard(false)}>
            <Question index={index} childData={childData}/>
        </ul>
    ) : (
        <ul className="cards">
            <Card answer={answer} question={question} dataToPass={setChildData} setHideCard={setHideCard} counter={counter} updateCounter={updateCounter} addColorArr={addColorArr} colorArr={colorArr}/>
        </ul>
    )
}

function Question(props) {
    const {index, childData} =  props;
    
    return(
        <div className={`card ${childData}`}>
            <div className={`question ${childData}`}>
                <p>Pergunta {index + 1}</p>
                {childData === "" ? <ion-icon name="play-outline"></ion-icon> : <ColorCase color={childData}/>}
            </div>
        </div>
    )
}

function Card(props) {
    const {question, answer, dataToPass, setHideCard, counter, updateCounter, addColorArr, colorArr} = props;
    const [showQuestion, setShowQuestion] = React.useState(true);
    const [hideAnswer, setHideAnswer] = React.useState(false);

    return (
        <>
            { showQuestion ? 
                <div className="card-front" onClick={() => setShowQuestion(false)}>
                    <p>{question}</p>
                    <ion-icon name="repeat-outline"></ion-icon>
                </div>
            : 
            <div className={hideAnswer ? "hide" : "card-answer"}>
                <p>{answer}</p>
                <div className="buttons">
                    <button className="nao-lembrei" onClick={() => {
                        //setHideAnswer(true);
                        dataToPass("red");
                        addColorArr([...colorArr,"red"]);
                        setHideCard(true);
                        updateCounter(counter + 1);
                    }}>Não lembrei</button>
                    <button className="quase-nao-lembrei" onClick={() => {
                        dataToPass("yellow");
                        addColorArr([...colorArr,"yellow"]);
                        setHideCard(true);
                        updateCounter(counter + 1);
                    }}>Quase não lembrei</button>
                    <button className="zap" onClick={() => {
                        dataToPass("green");
                        addColorArr([...colorArr,"green"]);
                        setHideCard(true);
                        updateCounter(counter + 1);
                    }}>Zap!</button>
                </div>
            </div>
            }
        </>
    )
}

function ColorCase(props) {
    const {color} = props;

    switch (color) {
        case "green":
            return <ion-icon name="checkmark-circle"></ion-icon>;
        case "yellow":
            return <ion-icon name="help-circle"></ion-icon>;
        case "red":
            return <ion-icon name="close-circle"></ion-icon>
    }
}