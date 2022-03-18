import React from "react";
import Flashcard from "./flashcard";

const cardsArray = [
    {
      quastion: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
    },
    {
      quastion: " O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
      quastion: "Componentes devem iniciar com __",
      answer: "letra maiúscula"
    },
    {
      quastion: "Podemos colocar __ dentro do JSX",
      answer: "expressões"
    },
    {
      quastion: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
      quastion: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
      quastion: "Usamos props para __",
      answer: "passar diferentes informações para componentes "
    },
    {
      quastion: "Usamos estado (state) para __",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
  ];

export default function FlashcardPage() {
    
    return (
        <div class="flashcard-page">
            <header>
                <img src="assets/logo.png"/>
                <p>ZapRecall</p>
            </header>
            <ul class="questions">
                <Flashcard/>
                <Flashcard/>
                <Flashcard/>
                <Flashcard/>
            </ul>
        </div>
    );
}