import { useState } from 'react';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox';
import Wellcome from './components/Wellcome';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import { Container } from './components/Container/Container.styled';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Container>
      <GlobalStyle />
      <NavBar />
      {!user ? (
        <Wellcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </Container>
  );
}

export default App;
