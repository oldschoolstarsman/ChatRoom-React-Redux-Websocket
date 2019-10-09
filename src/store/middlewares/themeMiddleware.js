import axios from 'axios';

import { CHANGE_CURRENT_USER, setOwnTheme } from 'src/store/reducer';

const themeMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    // on va réagir au changement d'utilisateur pour récupérer un theme en fonction de l'user
    // ça tombe bien le back met à disposition le endpoint suivant
    // /theme/[email] qui retourne un json avec des styles pour chaque utilisateur en fonction de l'email
    case CHANGE_CURRENT_USER: {
      const { email } = store.getState();
      axios.get(`http://localhost:3001/theme/${email}`)
        .then((response) => {
          console.log('theme récupéré', response.data);
          const themeAction = setOwnTheme(response.data);
          store.dispatch(themeAction);
        })
        .catch((error) => {
          console.error(error);
        });
      console.log('themeMiddleware réagit à ', action);
      next(action);
      break;
    }
    default:
      next(action);
  }
};

export default themeMiddleware;
