import React from 'react';

export default function FrontPage() {
    const [hideFrontPage, setHideFrontPage] = React.useState(true);

    return (
        <>
            { hideFrontPage ? 
                <div class="front-page">
                    <img src="assets/logo.png"/>
                    <p>ZapRecall</p>
                    <button onClick={() => setHideFrontPage(false)}>Iniciar Recall!</button>
                </div>
            : null }
        </>
    );
}