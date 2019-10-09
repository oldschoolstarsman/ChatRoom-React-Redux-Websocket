import { keyframes } from '@emotion/core';
import Color from 'color';

const theme = {
  colorGrey: '#CBCFCF',
  colorLight: '#ecf0f1',
  colorDark: '#2c3e50',
  color: '#009dff',
};

export const grow = keyframes({
  '0%': {
    transform: 'scale(0)',
  },
  '100%': {
    transform: 'scale(1)',
  },
});

export const globalStyles = {
  body: {
    fontFamily: 'sans-serif',
    background: theme.colorGrey,
  },
};

// on utilise la librairie Color https://www.npmjs.com/package/color 
// pour créer facilement des fonctions de manipulation de couleur
// pour éviter de se répeter on se crée une fonction
// elle prend en params : une couleur, un taux de à 1
// elle retourne directement une couleur hexadécimale plus foncée
export const darken = (orginColor, amount) => (
  Color(orginColor)
    .darken(amount)
    .hex()
);


export default theme;
