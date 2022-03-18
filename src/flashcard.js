import React from "react";

export default function Flashcard(props) {
    const [hideCard, setHideCard] = React.useState(true);
    const {index, answer, question} = props;

    return (
        <ul className="card" onClick={() => setHideCard(false)}>   
            {hideCard ? <Question index={index}/>: <Card answer={answer} question={question}/>}
        </ul>
    );
}

function Question(props) {
    const {index} =  props;

    return(
        <div className="question">
            <p>Pergunta {index + 1}</p>
        </div>
    )
}

function Card(props) {
    const [hideAnswer, setHideAnswer] = React.useState(true);
    const {question, answer} = props;

    return (
        <>
            { hideAnswer ? 
                <div className="card-front" onClick={() => setHideAnswer(false)}>
                    <p>{question}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            : 
            <div className="card-answer" onClick={() => setHideAnswer(true)}>
                <p>{answer}</p>
                <ion-icon name="play-outline"></ion-icon>
            </div>
            }
        </>
    )
}
