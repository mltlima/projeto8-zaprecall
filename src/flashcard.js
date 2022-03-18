import React from "react";

export default function Flashcard() {
    const [hideAnswer, setHideAnswer] = React.useState(true);
    return (
        <ul className="card">
            { hideAnswer ? 
                <div className="card-front" onClick={() => setHideAnswer(false)}>
                    <p>card front</p>
                </div>
            : 
                <div className="card-answer" onClick={() => setHideAnswer(true)}>
                    <p>card back</p>
                </div>
            }
        </ul>
    );
}