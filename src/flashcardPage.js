import React from "react";
import Flashcard from "./flashcard";
import ColorCase from "./flashcard"

const cardsArray = [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript"
    },
    {
      question: " O React é __",
      answer: "uma biblioteca JavaScript para construção de interfaces"
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "letra maiúscula"
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "expressões"
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "interagindo com a DOM para colocar componentes React na mesma"
    },
    {
      question: "Usamos o npm para __",
      answer: "gerenciar os pacotes necessários e suas dependências"
    },
    {
      question: "Usamos props para __",
      answer: "passar diferentes informações para componentes "
    },
    {
      question: "Usamos estado (state) para __",
      answer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }
  ];

export default function FlashcardPage() {
    const [colorArr, setColorArr] = React.useState([]);
    const [counter, setCounter] = React.useState(0);
    shuffleCards();
    return (
        <div class="flashcard-page">
            <header>
                <img src="assets/logo.png"/>
                <p>ZapRecall</p>
            </header>
            <ul class="questions">
                {cardsArray.map((card, index) => 
                <Flashcard question={card.question} answer={card.answer} index={index} addColorArr={setColorArr} colorArr={colorArr} counter={counter} updateCounter={setCounter}/>
                )}
            </ul>
            <footer>
              <p>{counter}/{cardsArray.length} CONCLUÍDOS</p>
              {colorArr.map((color) => <ColorCase2 color={color}/>)}
            </footer>
        </div>
    );
}

function shuffleCards() {
  const length = cardsArray.length;
  for (let i = length; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * i);
    const currentIndex = i - 1;
    const temp = cardsArray[currentIndex];
    cardsArray[currentIndex] = cardsArray[randomIndex];
    cardsArray[randomIndex] = temp;
  }
}

function ColorCase2(props) {
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