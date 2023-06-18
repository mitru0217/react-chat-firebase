import styled from 'styled-components';

export const Form = styled.form`
  position: fixed;
  bottom: 0px;
  width: 100%;
  padding: 20px 30px;
  background-color: #4c768d;
  display: flex;
`;

export const Input = styled.input`
  height: 40px;
  padding: 10px 10px;
  border-radius: 5px 0 0 5px;
  border: none;
  flex-grow: 1;
  background-color: white;
  color: #1c2c4c;
  font-size: 1rem;
  ::placeholder {
    color: #ddd;
  }
  :focus {
    outline: none;
    border-bottom: 1px solid #7cc5d9;
  }
`;
export const Button = styled.div`
  width: 70px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 0 5px 5px 0;
  color: #242443;
  border: 1px solid #7cc5d9;
  background-color: #7cc5d9;
  font-weight: 600;
  :focus {
    border-bottom: 1px solid #7cc5d9;
  }
`;
