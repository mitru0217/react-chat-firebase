import { useState } from 'react';
import GoogleSignin from '../images/GoogleSignIn.png';

import { Nav } from './NavBar.styled';

const NavBar = () => {
  const [user, setUser] = useState(false);

  const googleSignIn = () => {
    setUser(true);
  };

  const signOut = () => {
    setUser(false);
  };

  return (
    <Nav>
      <h1>React Chat</h1>
      {user ? (
        <button onClick={signOut} className="sign-out" type="button">
          Sign Out
        </button>
      ) : (
        <button className="sign-in">
          <img
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </button>
      )}
    </Nav>
  );
};

export default NavBar;
