// import { useEffect } from "react";
// import { getRedirectResult } from "firebase/auth";
// import {
//   auth,
//   signInWithGooglePopup,
//   signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase.utils";
// import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import "./authentication.styles.scss";

const Authentication = () => {
  // useEffect(() => {
  //   async function getReDirectRes() {
  //     const response = await getRedirectResult(auth);
  //     // console.log("Respponse after redirect:", response);
  //     if (response) {
  //       const docRef = await createUserDocumentFromAuth(response?.user);
  //     }
  //   }
  //   getReDirectRes();
  // }, []);

  // const logGoogleUser = async () => {
  //   const response = await signInWithGooglePopup();
  //   console.log(response);
  //   const docRef = await createUserDocumentFromAuth(response?.user);
  // };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
