import React, { useState } from "react";
import Cards from "./Cards";
import Score from "./Score";

const Main = () => {
  const [cards, setCards] = useState([
    { number: 1, name: "Bear", image: "./images/bear.png" },
    { number: 2, name: "Chick", image: "./images/chick.png" },
    { number: 3, name: "Cow", image: "./images/cow.png" },
    { number: 4, name: "Koala", image: "./images/koala.png" },
    { number: 5, name: "Monkey", image: "./images/monkey.png" },
    { number: 6, name: "Mouse", image: "./images/mouse.png" },
    { number: 7, name: "Owl", image: "./images/owl.png" },
    { number: 8, name: "Panda", image: "./images/panda.png" },
    { number: 9, name: "Penguin", image: "./images/penguin.png" },
    { number: 10, name: "Raccoon", image: "./images/racoon.png" },
    { number: 11, name: "Sheep", image: "./images/sheep.png" },
    { number: 12, name: "Fox", image: "./images/fox.png" },
  ]);
  const [cardAnswers, setCardAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  function randomizeArr(a, b) {
    return 0.5 - Math.random();
  }

  const handleClick = (event) => {
    const answer = event.target.alt;

    if (!cardAnswers.includes(answer)) {
      setCardAnswers([...cardAnswers, answer]);
      setScore((prevScore) => prevScore + 1);
    } else if (cardAnswers.includes(answer)) {
      setCardAnswers([]);
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
    }
    setCards((prevCards) => prevCards.sort(randomizeArr).slice());
  };

  return (
    <>
      <Score score={score} bestScore={bestScore} />
      <p id='max-score'>Max Score: 12</p>
      <div className='game-body'>
        {cards.map((card, index) => (
          <Cards
            name={card.name}
            image={card.image}
            key={index}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
