import React from "react";

export default function Flashcard(props) {
    const [hideAnswer, setHideAnswer] = React.useState(true);
    return (
        <ul className="card">
            { hideAnswer ? 
                <div className="card-front" onClick={() => setHideAnswer(false)}>
                    <p>{props.question}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            : 
                <div className="card-answer" onClick={() => setHideAnswer(true)}>
                    <p>{props.answer}</p>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            }
        </ul>
    );
}
