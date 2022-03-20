import React from "react";
import Flashcard from "./flashcard";

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
    //let flawless = 0;
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
              {counter !== cardsArray.length ? null : 
              <FinalResults flawless={colorArr.includes("red") ? false : true}/>}
              <div className="colors">
                {colorArr.map((color) => <ColorCase2 color={color}/>)}
              </div>
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

function FinalResults(props) {
  const {flawless} = props;
  console.log(flawless)
  return flawless ? (
    <>
      <p className="result">🥳 Parabéns!</p>
      <p>Você não esqueceu de nenhum flashcard!</p>
    </>
  ) : (
    <>
      <p className="result">😥 Putz...</p>
      <p>Ainda faltam alguns...
        Mas não desanime!</p>
    </>

  )
  
}

function ColorCase2(props) {
  const {color} = props;

  switch (color) {
      case "green":
          return <div className="green"> <ion-icon name="checkmark-circle"></ion-icon> </div>;
      case "yellow":
          return <div className="yellow"> <ion-icon name="help-circle"></ion-icon> </div>;
      case "red":
          return <div className="red"> <ion-icon name="close-circle"></ion-icon> </div>;
  }
}