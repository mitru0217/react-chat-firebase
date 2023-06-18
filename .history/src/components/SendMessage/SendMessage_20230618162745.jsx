import { useState } from 'react';
import { auth, db } from '../../firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Form, Input, Button } from './SendMessage.styled';

const SendMessage = () => {
  const [message, setMessage] = useState('');

  const sendMessage = async event => {
    event.preventDefault();
    if (message.trim() === '') {
      alert('Enter valid message');
      return;
    }

    console.log(message);
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, 'messages'), {
      text: message,
      name: displayName,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage('');
  };
  return (
    <Form>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <Input
        id="messageInput"
        name="messageInput"
        value={message}
        onChange={e => setMessage(e.target.value)}
        type="text"
        placeholder="type message..."
      />
      <Button type="submit" onSubmit={event => sendMessage(event)}>
        Send
      </Button>
    </Form>
  );
};

export default SendMessage;
