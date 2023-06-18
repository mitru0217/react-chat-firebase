import styled from 'styled-components';

export const MessagesWrapper = styled.div`
padding: 30px;
margin-bottom: 60px;
`
export const Chat = styled.div`
  border-radius: 20px 20px 20px 0;
  padding: 15px;
  background-color: #7cc5d9;
  color: #1c2c4c;
  width: max-content;
  max-width: calc(100% - 50px);
  box-shadow: -2px 2px 1px 1px #4c768d;
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
`
export const Image = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-right: 10px;
`    
export const ChatBubble =styled.div `
  margin-left: auto;
  border-radius: 20px 20px 0 20px;
  background-color: #fff;
  box-shadow: -2px 2px 1px 1px #88dded;
`
export const UserMessage = styled.p`
 word-break: break-all;
  `

export const UserName = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 0.9rem;
  color: #1c2c4c;
 ` 
  .user-name {

}

.message-time {
  display: block;
  text-align: right;
}