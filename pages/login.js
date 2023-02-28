import Logo from "./../components/Logo";
import { auth, provider } from "../firebase";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
function Login() {
  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        console.log(token);
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log(errorCode);
        const errorMessage = error.message;
        // The email of the user's account used.
        console.log(errorMessage);
        const email = error.email;
        // The AuthCredential type that was used.
        console.log(email);

        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(credential);
        // ...
      });
  };
  return (
    <div className="grid place-items-center m-auto w-screen h-screen">
      <div>
        <Logo />
        <p
          className="text-center cursor-pointer font-semibold text-blue-500"
          onClick={handleLogin}
        >
          SIGN IN WITH GOOGLE
        </p>
      </div>
    </div>
  );
}

export default Login;
