import { Chat } from './Message.styled';

const Message = () => {
  return (
    <Chat>
      <img className="chat-bubble__left" src="" alt="user avatar" />
      <div className="chat-bubble__right">
        <p className="user-name">Timonwa Akintokun</p>
        <p className="user-message">
          We are building a real time chat app with React and Firebase.
        </p>
      </div>
    </Chat>
  );
};

export default Message;
