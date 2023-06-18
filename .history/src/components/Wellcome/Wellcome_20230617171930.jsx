import GoogleSignin from '../images/GoogleSignIn.png';

import { Wellcome } from './Wellcome.styled';
import { SignIn } from '../NavBar/NavBar.styled';

const Welcome = () => {
  const googleSignIn = () => {};

  return (
    <Wellcome>
      <h2>Welcome to React Chat.</h2>
      <img src="/public/vite.svg" alt="Vite logo" width={50} height={50} />
      <p>Sign in with Google to chat with with your fellow React Developers.</p>
      <SignIn>
        <img
          onClick={googleSignIn}
          src={GoogleSignin}
          alt="sign in with google"
          type="button"
        />
      </SignIn>
    </Wellcome>
  );
};

export default Welcome;
