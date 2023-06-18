import { auth } from '../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import GoogleSignin from '../../images/GoogleSignIn.png';

import { Nav, SignIn, SignInImage, SignOut } from './NavBar.styled';

const NavBar = () => {
  const [user] = useAuthState(auth);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };
  const signOut = () => {
    auth.signOut();
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
