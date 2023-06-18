import { useState } from 'react';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox';
import Wellcome from './components/Wellcome';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import { Container } from './components/Container/Container.styled';

function App() {
  const [user, setUser] = useState(false);

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
