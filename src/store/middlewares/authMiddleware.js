import axios from 'axios';

// j'importe les actions creator dont je vais avoir besoin
import { changeCurrentUser, DO_CONNECT, stopLoading } from 'src/store/reducer';

const authMiddleware = (store) => (next) => (action) => {
  // dans les middlewares on peut utiliser une structure de switch
  // pour gérer chaque action au cas par cas
  // console.log('authMiddleware', action);
  switch (action.type) {
    case DO_CONNECT: {
      // console.log('je vais gérer le cas DO_CONNECT');
      // break permet de sortir du switch tout de suite
      // j'ai accès au store, donc au state
      const state = store.getState();
      // je récupère les infos qui m'intéressent depuis le state
      const { email, password } = state;
      // on aurait le faire en une fois
      // const { email, password } = store.getState();
      // j'envoie ça au back pour qu'il fasse l'authentification
      axios.post('http://localhost:3001/login', {
        // email: email,
        // password: password,
        email,
        password,
      })
        .then((response) => {
          console.log('AuthMiddleware émet CHANGE_CURRENT_USER', response);
          // en cas de succès j'ai accès au pseudo dans response.data
          // je veux modifier le state avec la valeur du pseudo
          // mon intention est de modifier le state, je vais disparcher une action qui ira jusqu'au reducer
          const actionChangeUser = changeCurrentUser(response.data);
          store.dispatch(actionChangeUser);
          // dispatch = émetteur d'action
          // l'action passe par tous les middlewares puis dans le reducer
          // dans les middlewares et/ou dans le reducer on peut intercepter l'action et réagir
          // dans les middlewares on pourra réagir en déclenchant des effets annexes, ex: requete ajax
          // dans le reducer on pourra réagir en modifiant le state
        })
        .catch((error) => {
          console.log('error', error);
        })
        .finally(() => {
          const actionStopLoading = stopLoading();
          store.dispatch(actionStopLoading);
        });
      next(action);
      break;
    }
    default:
      // console.log('cette action ne m\'intéresse pas je la laisse paser');
      next(action);
  }
};

export default authMiddleware;
