import Message from '../Message/Message';
import SendMessage from '../SendMessage';
import { MessagesWrapper } from './ChatBox.syled';
const ChatBox = () => {
  return (
    <main className="chat-box">
      <MessagesWrapper>
        <Message />
      </MessagesWrapper>
      <SendMessage />
    </main>
  );
};

export default ChatBox;
