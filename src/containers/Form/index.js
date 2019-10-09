// imports npm
import { connect } from 'react-redux';

// imports locaux
import Form from 'src/components/Form';
import { changeMessage, addMessage } from 'src/store/reducer';

// branchements
// lecture
const mapStateToProps = (state) => {
  // console.log('mSTP called, props redistribuées, nouveau cycle de rendu si les props ont changé');
  return {
    messageValue: state.messageValue,
  };
};

// ecriture
// dans mDTP je peux définir des props dispos dans le composant
// ces props seront des fonctions qui pourront être executées dans le composants par exemple en réponse à des événements
// je peux utiliser dispatch (recupéré en paramètre) qui correspond a store.dispatch
// c'est la méthode du store capable d'amorcer une modification du state en fonction d'une action (grâce au reducer)
const mapDispatchToProps = (dispatch) => {
  return {
    doChange: (userInput) => {
      // console.log('ici je veux émettre l\'intention de changer le message');
      // const action = {
      //   type: 'CHANGE_MESSAGE',
      //   value: userInput,
      // };
      // on peut utiliser l'action creator, une fonction qui retourne exactement l'objet action
      const action = changeMessage(userInput);
      dispatch(action);
    },
    sendMessage: () => {
      const action = addMessage();
      dispatch(action);
    },
  };
};

// container
const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);

// export
export default FormContainer;
