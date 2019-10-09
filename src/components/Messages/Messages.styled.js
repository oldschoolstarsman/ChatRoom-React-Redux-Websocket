import styled from '@emotion/styled';

import theme, { grow } from 'src/styles/theme';

// tous nos styles sont définis via des objets
const MessagesStyled = styled.section({
  height: '100%',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: '1rem',
  scrollBehavior: 'smooth',
  '.message': {
    marginBottom: '1rem',
    '&-author': {
      paddingLeft: '1rem',
      marginBottom: '1rem',
    },
    '&-content': {
      animation: `${grow} .4s cubic-bezier(.36,1.59,.89,1.1)`,
      backgroundColor: theme.colorGrey,
      padding: '1rem',
      borderRadius: '1rem',
      display: 'inline-block',
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        left: '2rem',
        bottom: '100%',
        borderBottom: `10px solid ${theme.colorGrey}`,
        borderRight: '10px solid transparent',
      },
    },
    '&--not-mine': {
      textAlign: 'right',
      '.message-content': {
        background: theme.color,
        color: theme.colorLight,
        '::before': {
          left: 'auto',
          right: '2rem',
          borderBottomColor: theme.color,
          borderLeft: '15px solid transparent',
          borderRight: '0',
        },
      },
    },
  },
},
/*
, (props) => { // on peut spécifier en deuxième paramètre une fonction prenant les props en paramètre
  let overridenStyles = {};
  if (props.currentUser === 'Karin') {
    overridenStyles = {
      '.message-content': {
        backgroundColor: 'orange',
      },
    };
  }
  return overridenStyles;
}
*/
);

export default MessagesStyled;
