import messagesData from 'src/data/messages';
import { getMaxId } from './selectors';

// - state initial
export const initialState = {
  messages: messagesData,
  messageValue: '',
  loading: false,
  logged: false,
  ownTheme: {},
};

// - action types
// constante bien pratique pour stocker le nom des actions
// + autocomplétion, eslint surveille les fautes de frappes, export possible
// on réduit les risques d'erreurs difficiles à débugger
const ACTION_DEMO = 'ACTION_DEMO';
const CHANGE_MESSAGE = 'CHANGE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER';
const CHANGE_VALUE = 'CHANGE_VALUE';
export const DO_CONNECT = 'DO_CONNECT';
const STOP_LOADING = 'STOP_LOADING';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';
const SET_OWN_THEME = 'SET_OWN_THEME';

// - reducer
// fonction qui décrit les évolutions du state
// en entrée le state actuel et l'action émise, l'intention à traduire en faits
// en sortie une copie modifiée du state en fonction de l'action
// le reducer intervient quand on dispatch une action
// store.dispatch({ type: UNEACTION }) === on émet une intention
// le store va se servir du reducer pour traduire cette intention en modifications du state
const reducer = (state = initialState, action = {}) => {
  // en fonction du type d'action
  // console.log('reducer', action);
  switch (action.type) {
    // on pourra gérer au cas par cas
    case ACTION_DEMO:
      // et retourner un nouveau state modifié
      return {
        // on déverse le state actuel
        ...state,
        // on spécifie les modifs
        truc: 'bidule',
      };
    case CHANGE_MESSAGE:
      return {
        ...state,
        messageValue: action.value,
      };
    case DO_CONNECT:
      return {
        ...state,
        loading: true,
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messageValue: '',
      };
    case RECEIVE_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          action.message,
        ],
      };
    case CHANGE_CURRENT_USER:
      return {
        ...state,
        currentUser: action.value,
        logged: true,
      };
    case CHANGE_VALUE:
      return {
        ...state,
        // les crochets permettent de mettre un nom de propriété dynamique
        // [action.name]: value // si action.name vaut 'email' équivaut
        // ['email']: value,
        // email: value,
        [action.name]: action.value,
      };
    // on gère l'action émise au changement de thème
    case SET_OWN_THEME:
      // on garde dans le state des styles récupérés de l'api
      // on est en déclaratif, tout découle de la donnée, on pourra s'en servir pour modifier nos composants
      return {
        ...state,
        ownTheme: action.theme,
      }
    default:
      return state;
  }
};

// - action creators
// une fonction utilisable ailleurs qui retourne un objet action
// pratique pour éviter les erreurs / on évite de réécrire à chaque fois l'objet action
export const actionDemo = () => ({
  type: ACTION_DEMO,
});

export const changeMessage = (value) => ({
  type: CHANGE_MESSAGE,
  value, // value: value,
});

export const addMessage = () => ({
  type: ADD_MESSAGE,
});

export const changeCurrentUser = (value) => ({
  type: CHANGE_CURRENT_USER,
  value,
});

export const changeValue = (name, value) => ({
  type: CHANGE_VALUE,
  value,
  name,
});

export const doConnect = () => ({
  type: DO_CONNECT,
});

export const stopLoading = () => ({
  type: STOP_LOADING,
});

export const websocketConnect = () => ({
  type: WEBSOCKET_CONNECT,
});

export const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message,
});

export const setOwnTheme = (theme) => ({
  type: SET_OWN_THEME,
  theme,
});

// - export
export default reducer;
