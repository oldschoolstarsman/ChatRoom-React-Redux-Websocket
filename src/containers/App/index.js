import { connect } from 'react-redux';

import App from 'src/components/App';

const mapStateToProps = (state) => ({
  ownTheme: state.ownTheme,
});

const mapDispatchToProps = {};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
