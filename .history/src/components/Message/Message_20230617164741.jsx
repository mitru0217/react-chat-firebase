import { Chat, Image, ChatBubble } from './Message.styled';

const Message = () => {
  return (
    <Chat>
      <Image src="" alt="user avatar" />
      <ChatBubble>
        <p className="user-name">Timonwa Akintokun</p>
        <p className="user-message">
          We are building a real time chat app with React and Firebase.
        </p>
      </ChatBubble>
    </Chat>
  );
};

export default Message;
