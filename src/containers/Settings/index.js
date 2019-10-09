// react-redux gère les abonnements aux évolutions du state global géré par le store
// on lui fourni des fonctions de rappels à executer à chaque évolution du state glogal
// ces fonctions de rappels sont mSTP et mDTP, dans la première on a accès en lecture au state
// dans la seconde en écriture via dispatch
import { connect } from 'react-redux';

// composant----[container]----state

import Settings from 'src/components/Settings';
import { changeValue as changeValueActionCreator, doConnect } from 'src/store/reducer';

const mapStateToProps = (state) => ({
  email: state.email,
  password: state.password,
  loading: state.loading,
  logged: state.logged,
});

const mapDispatchToProps = (dispatch) => ({
  changeValue: (name, value) => {
    const action = changeValueActionCreator(name, value);
    dispatch(action);
  },
  connection: () => {
    const action = doConnect();
    // j'émet l'intention de me connecter
    dispatch(action);
  },
});

const SettingsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);

export default SettingsContainer;
