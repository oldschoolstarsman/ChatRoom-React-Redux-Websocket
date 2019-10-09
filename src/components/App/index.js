// == Import : npm
import React from 'react';
// le composant global permet de spécifier des styles globaux, pratique pour styler body
import { Global } from '@emotion/core';
import PropTypes from 'prop-types';

// == Import : local
import Settings from 'src/containers/Settings';
import Messages from 'src/containers/Messages';
import Form from 'src/containers/Form';
// libre à moi d'utiliser un fichier theme, pratique pour avoir des variables
import { globalStyles } from 'src/styles/theme';
// plutôt qu'une feuille de style, je vais chargé un composant enrichi de styles
import AppStyled from './App.styled';

// == Composant
// on a créé un container pour App, on récupère des props avec des valeurs venant du state
const App = ({ ownTheme }) => (
  // on transmet des props au composant stylé
  <AppStyled id="app" ownTheme={ownTheme}>
    <Global styles={globalStyles} />
    {/*
    on peut toujours transmettre des props "en dur"
    - pour les données qui n'évoluent pas dans le temps on peut passer des props à l'instanciation dans le jsx
    - pour les données qui évoluent dans le temps (cad les données du state) on utilisera un conteneur
    <Settings promo="Universe" />
    */}
    <Settings />
    <Messages />
    <Form />
  </AppStyled>
);

App.propTypes = {
  ownTheme: PropTypes.object.isRequired,
};

// == Export
export default App;
