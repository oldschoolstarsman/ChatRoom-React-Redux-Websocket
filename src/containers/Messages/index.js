// - imports npm
// connect sera le hoc (fonction retournant un composant enrichi de props)
// la fonction retournant le composant de présentation enrichi de props alimentées grâce au state
import { connect } from 'react-redux';

// - imports locaux : composant à enrichir + action creators
import Messages from 'src/components/Messages';

// - branchements
// - en lecture
// mSTP: fonction qui transponse des données du state vers des props
// en entrée le state et eventuellement ownProps (les props transmises à l'instanciation dans le JSX)
// en sortie les props
// si on en a pas besoin on dit que c'est null // const mapStateToProps = null
const mapStateToProps = (state) => ({
  messages: state.messages,
  currentUser: state.currentUser,
});

// - en écriture
// mDTP: fonction qui a accès à la méthode dispatch du store, on va être capable d'y créer des fonctions disponibles en props, pouvant émettre des actions
// dans le container je vais déclarer des fonctions capable d'émettre des actions
// ces fonctions seront dispos via les props dans le composants, je pourrai les executer au moment opportun, par exemple en réponse à des évenements
// en entrée: dispatch (la méthode dispatch du store === l'émetteur d'actions) et eventuellement ownProps (les props transmises à l'instanciation dans le JSX)
// en sortie les props
// si on en a pas besoin on dit que c'est une objet vide {} // const mapDispatchToProps = {};
const mapDispatchToProps = {};

// - le container
// c'est ce que nous retourne connect, cad le composant enrichi de props
// on aura toujours besoin d'executé connect 2 fois, on transmet mSTP et mDTP la première fois, puis le composant à enrichir
const MessagesContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Messages);

// export
// on a déclaré le container ici, il faut s'en servir ailleurs
export default MessagesContainer;
