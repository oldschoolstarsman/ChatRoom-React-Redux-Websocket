import { connect } from 'react-redux';

import MessageDetail from 'src/components/Messages/MessageDetail';
// on récupère un selector, on y fera la logique, ici on ne fait qu'assigner les props
// cela nous évitera de nous répéter
import { isMe } from 'src/store/selectors';

const mapStateToProps = (state, ownProps) => ({
  isMe: isMe(ownProps.author, state.currentUser),
});

const mapDispatchToProps = {};

const MessageDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageDetail);

export default MessageDetailContainer;
