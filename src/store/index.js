// redux nous permet de créer un store
// store : l'entité gardienne du state, fourni les moyens pour lire, pour faire évoluer et pour s'abonner aux changement du state

import { createStore, applyMiddleware, compose } from 'redux';

// j'importe les middleWares là ou je crée le store
// import loggerMiddleware from 'src/store/middlewares/loggerMiddleware';
import authMiddleware from 'src/store/middlewares/authMiddleware';
import reducer, { initialState, websocketConnect } from './reducer';
import socketMiddleware from './middlewares/socketMiddleware';
import themeMiddleware from './middlewares/themeMiddleware';

/* eslint-disable no-underscore-dangle */
// code compliqué retrouvable depuis la doc https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
// à retenir : on tient compte du devTool de redux ET de nos middlewares
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    // loggerMiddleware,
    authMiddleware,
    socketMiddleware,
    themeMiddleware,
  ),
);

// je crée un store avec l'aide de redux
// un store :
// gardien d'un objet, gardien de mon state
// le store de redux est un objet avec des méthodes :
// getState
// dispatch
// subscribe

const store = createStore(
  reducer,
  initialState, // preloadedState, pour définir le state initial
  enhancers, // les middlewares + le devtools
);
/* eslint-enable */

store.dispatch(websocketConnect());

// je l'exporte pour m'en servir ailleurs
export default store;
