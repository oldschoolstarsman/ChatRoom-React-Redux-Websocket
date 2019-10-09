import styled from '@emotion/styled';

import theme, { darken } from 'src/styles/theme';

// je définis un composant, styled.div retourne un composant div enrichi de styles
// si je veux autre chose qu'un div, il existe une fonction hoc par élement html
// par exemple styled.h2, styled.section, styled.p

const AppStyled = styled.div({
  width: '500px',
  maxWidth: '90%',
  margin: 'auto',
  boxShadow: '0 0 30px rgba(0,0,0,.25)',
  height: '100vh',
  backgroundColor: theme.colorLight,
  display: 'flex',
  flexDirection: 'column',
},
(props) => { // en 2ème param on passe une fonction retournant un objet style en fonciton des props
  const styles = {
    // on est dans du js, on peut utiliser le spread \o/
    // on déverse tous les styles récupérés en props
    ...props.ownTheme,
    // on en ajoute d'autres calculés en fonction des props
    color: darken(props.ownTheme.backgroundColor, 0.5),
    // allez-y, testez ;) on se connecte avec
    // captain.sportsextremes@herocorp.io
    // pingpong
    // on obtient un thème custom
  };
  return styles;
});

export default AppStyled;
