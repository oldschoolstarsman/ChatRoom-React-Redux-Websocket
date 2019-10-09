// les middlewares de redux sont des triples fléchées
// le middleware est une sorte de "videur"
// il intercèpte toutes les actions qui sont émises
// il va pouvoir décider
// - s'il la laisse passer
// - s'il ne la laisse pas passer
// - s'il déclenche un effet à son passage

// dans les containers on dispatch des actions === on émet une intention, on donne un ordre
// cet ordre arrive dans les middlewares puis dans le reducer
// - si l'intention est de modifier le state === on le fera dans le reducer
// - si l'intention est de déclencher un effet annexe (debugger, contacter un serveur back) === on le fera dans le middleware

const loggerMiddleware = (store) => (next) => (action) => {
  // dans le middleWare
  // j'ai accès à 3 choses :
  // - le store et donc à ses méthodes getState et dispatch
  // je vais donc pouvoir lire le state et dispatcher des actions
  // - next, une fonction pour laisser passer l'action
  // si on n'execute pas next, l'action est court-circuitée et n'arrive pas au reducer
  // - action, l'objet action intercepté
  // j'intercèpte l'action avant même qu'elle arrive au reducer, je peux la voir :
  console.log('loggermiddleware', action);
  // je laisse passer l'action, la fonction next à qui on passe action laisse passer l'action
  // jusqu'au middleware suivant, et si c'est le dernier jusqu'au reducer
  // sans next l'action ne passe pas
  next(action);
};

export default loggerMiddleware;
