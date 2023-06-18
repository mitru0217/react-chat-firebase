import GoogleSignin from '../../images/GoogleSignIn.png';

import { WellcomeContainer } from './Wellcome.styled';
import { SignIn } from '../NavBar/NavBar.styled';

const Wellcome = () => {
  const googleSignIn = () => {};

  return (
    <WellcomeContainer>
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
    </WellcomeContainer>
  );
};

export default Wellcome;
