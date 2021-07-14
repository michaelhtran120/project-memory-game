import React from "react";

const Cards = ({ name, handleClick, image }) => {
  return (
    <div className='card' onClick={handleClick}>
      <img src={image} alt={name} width='150' height='150' />
    </div>
  );
};

export default Cards;
