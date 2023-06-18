import {
  Chat,
  Image,
  ChatBubble,
  UserMessage,
  UserName,
} from './Message.styled';

const Message = () => {
  return (
    <Chat>
      <Image src="" alt="user avatar" />
      <ChatBubble>
        <UserName>Timonwa Akintokun</UserName>
        <UserMessage>
          We are building a real time chat app with React and Firebase.
        </UserMessage>
      </ChatBubble>
    </Chat>
  );
};

export default Message;
