import styled from '@emotion/styled';

import theme, { grow } from 'src/styles/theme';

const SettingsStyled = styled.div({
  position: 'fixed',
  top: '1rem',
  right: '1rem',
  width: '220px',

  '.settings-input': {
    borderRadius: '.5em',
    padding: '1em',
    background: '#fff',
    border: '0',
    fontSize: '1.3em',
    width: '100%',
    marginBottom: '1rem',
  },

  '.settings-submit': {
    background: theme.color,
    color: 'white',
    border: 'none',
    padding: '.5rem',
    borderRadius: '3px',
    display: 'block',
    width: '100%',
    fontSize: '1em',
    ':hover': {
      background: theme.colorDark,
    },
  },

  '.info': {
    padding: '1rem',
    fontSize: '1.3em',
    marginTop: '1rem',
    background: '#fff',
    borderRadius: '1rem',
    animation: `${grow} .3s ease`,
  },
});

export default SettingsStyled;
