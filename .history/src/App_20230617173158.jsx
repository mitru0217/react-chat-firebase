import { useState } from 'react';
import NavBar from './components/NavBar';
import ChatBox from './components/ChatBox';
import Welcome from './components/Welcome';
import GlobalStyle from './components/GlobalStyles/GlobalStyles';
import { Container } from './components/Container/Container.styled';

function App() {
  const [user, setUser] = useState(false);

  return (
    <Container>
      <GlobalStyle />
      <NavBar />
      {!user ? (
        <Welcome />
      ) : (
        <>
          <ChatBox />
        </>
      )}
    </Container>
  );
}

export default App;
