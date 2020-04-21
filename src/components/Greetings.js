import React from 'react';

export const Greetings = ({ lang, children }) => {
  let greet = '';
  switch (lang) {
    case 'de':
      greet = 'Hallo';
      break;
    case 'fr':
      greet = 'Bonjour';
      break;
    case 'en':
      greet = 'Hello';
      break;
    case 'es':
      greet = 'Hola';
      break;
    default:
      break;
  }

  return (
    <h2>
      {greet}, {children}
    </h2>
  );
};
