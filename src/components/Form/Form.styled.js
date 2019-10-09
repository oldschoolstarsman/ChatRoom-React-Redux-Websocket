import styled from '@emotion/styled';

import theme, { darken } from 'src/styles/theme';

const FormStyled = styled.form({
  position: 'relative',

  '.form-input': {
    background: darken(theme.colorLight, 0.05),
    padding: '1rem 5rem 1rem 1rem',
    fontSize: '1.3em',
    border: '0',
    borderTop: '1px solid $colorGrey',
    width: '100%',

    '&:focus': {
      background: darken(theme.colorLight, 0.1),
    },
  },

  '.form-submit': {
    position: 'absolute',
    right: '0',
    top: '0',
    height: '100%',
    background: 'transparent',
    border: '0',
    fontSize: '1.5em',
    color: theme.color,
    padding: '0 1em',

    '&:hover': {
      color: darken(theme.color, 0.05),
    },
  },
});

export default FormStyled;
