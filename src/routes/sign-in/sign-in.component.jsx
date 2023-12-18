import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    async function getReDirectRes() {
      const response = await getRedirectResult(auth);
      // console.log("Respponse after redirect:", response);
      if (response) {
        const docRef = await createUserDocumentFromAuth(response?.user);
      }
    }
    getReDirectRes();
  }, []);

  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
    const docRef = await createUserDocumentFromAuth(response?.user);
  };

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={logGoogleUser}>Sign in with google</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with google redirect
      </button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
