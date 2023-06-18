import { useState } from 'react';
import GoogleSignin from '../images/GoogleSignIn.png';

import { Nav, SignIn, SignInImage, SignOut } from './NavBar.styled';

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
        <SignOut onClick={signOut} type="button">
          Sign Out
        </SignOut>
      ) : (
        <SignIn>
          <SignInImage
            onClick={googleSignIn}
            src={GoogleSignin}
            alt="sign in with google"
            type="button"
          />
        </SignIn>
      )}
    </Nav>
  );
};

export default NavBar;
