import "../styles/globals.css";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useEffect } from "react";
import Login from "./login";
import { RecoilRoot } from "recoil";
import { getUsername } from "../helpers/helper";
function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  console.log(user);
  useEffect(() => {
    if (user) {
      const userRef = doc(db, "users", user.uid);
      setDoc(
        userRef,
        {
          email: user.email,
          lastSeen: serverTimestamp(),
          photoUrl: user.photoURL,
          username: getUsername(user.displayName),
        },
        { merge: true }
      );
    }
  }, [user]);
  if (!user) return <Login />;
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
