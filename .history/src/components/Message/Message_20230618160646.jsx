import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

import {
  Chat,
  Image,
  // ChatBubble,
  UserMessage,
  UserName,
} from './Message.styled';

const Message = ({ message }) => {
  const [user] = useAuthState(auth);
  return (
    <Chat
      style={
        message.uid === user.uid
          ? {
              marginLeft: 'auto',
              borderRadius: '20px 20px 0 20px',
              background: '#fff',
              boxShadow: '-2px 2px 1px 1px #88dded',
            }
          : ''
      }
    >
      <UserName>{message.name}</UserName>
      <UserMessage>{message.text}</UserMessage>
    </Chat>
  );
};

export default Message;
