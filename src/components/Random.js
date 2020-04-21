import React from 'react';

export const Random = ({ min, max }) => {
  
  let randomNum = Math.floor(Math.random() * max - min + min);

  return (
    <h2>
      Random value between {min} and {max} => {randomNum}
    </h2>
  );
};
