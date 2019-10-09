// == Import : npm
import React from 'react';
import { render } from 'react-dom';
// prérecquis : pour brancher nos composants avec le state global géré par le store
// on doit communiquer le store à react redux, ainsi on pourra ensutie faire les branchements dans des containers
// pour cela on utiliser Provider
import { Provider } from 'react-redux';


// == Import : local
import App from 'src/containers/App';
// je recupère mon store
import store from 'src/store';


// == Render
// 1. Le composant racine (celui qui contient l'ensemble de l'app)
const rootComponent = (
  // je communique mon store à react-redux qui va me simplifier la vie pour raccorder mes composants au state global
  <Provider store={store}>
    <App />
  </Provider>
);

// 2. La cible du DOM (là où la structure doit prendre vie dans le DOM)
const target = document.getElementById('root');

// Le rendu de React => DOM
render(rootComponent, target);
