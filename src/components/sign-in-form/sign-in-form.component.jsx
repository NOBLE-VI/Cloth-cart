import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import Button, { BUTTON_TYPE_CLASS } from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { SignUpContainer, ButtonsContainer } from "./sign-in-form.styles.jsx";

const defaultFormField = {
  email: "",
  password: "",
};

function SignInForm(props) {
  // const {} = props;
  const [formField, setFormField] = useState(defaultFormField);
  const { email, password } = formField;

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
    // console.log(response);
    const docRef = await createUserDocumentFromAuth(response?.user);
  };

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const handelSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      if (res) {
        alert("User logged in");
      }
      // console.log(res);
      resetForm(defaultFormField);
    } catch (err) {
      console.log("Error signing in: ", err);
      if (err.code == "auth/invalid-credential") {
        alert("Invalid credentials");
      }
    }
  };

  const handelChange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <SignUpContainer>
      <h1>Sign In</h1>
      <form action="" onSubmit={handelSubmit}>
        <FormInput
          label="email"
          type="email"
          required
          value={email}
          id="sign-in-email"
          name="email"
          onChange={handelChange}
        />
        <FormInput
          label="password"
          type="password"
          required
          value={password}
          id="sign-in-password"
          name="password"
          onChange={handelChange}
        />
        <ButtonsContainer>
          <Button onSubmit={handelSubmit}>Sign In</Button>
          <Button
            type="button"
            buttonType={BUTTON_TYPE_CLASS.google}
            onClick={logGoogleUser}
          >
            Google Sign In
          </Button>
        </ButtonsContainer>
      </form>
    </SignUpContainer>
  );
}

export default SignInForm;
