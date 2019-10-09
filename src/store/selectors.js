/* eslint-disable import/prefer-default-export */

// - selectors
// des fonctions utilitaires
export const getMaxId = (messages) => {
  let maxId = 0;
  if (messages.length > 0) {
    const idList = messages.map((message) => message.id);
    maxId = Math.max(...idList);
  }
  return maxId;
};

// on crée une fonction utilitaire réutilisable pour voir si on est l'auteur
export const isMe = (messageAuthor, currentUser) => messageAuthor === currentUser;
