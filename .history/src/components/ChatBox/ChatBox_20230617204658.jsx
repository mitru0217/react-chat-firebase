import { useEffect, useRef, useState } from 'react';
import {
  query,
  collection,
  orderBy,
  onSnapshot,
  limit,
} from 'firebase/firestore';
import { db } from '../../firebase';

import Message from '../Message/Message';
import SendMessage from '../SendMessage/SendMessage';
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
