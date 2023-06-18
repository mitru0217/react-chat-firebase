import { Form, Input, Button } from './SendMessage.styled';

const SendMessage = () => {
  return (
    <Form>
      <label htmlFor="messageInput" hidden>
        Enter Message
      </label>
      <Input
        id="messageInput"
        name="messageInput"
        type="text"
        className="form-input__input"
        placeholder="type message..."
      />
      <Button type="submit">Send</Button>
    </Form>
  );
};

export default SendMessage;
