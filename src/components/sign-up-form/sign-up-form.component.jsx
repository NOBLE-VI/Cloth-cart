import { useState } from "react";
import {
  createUserWithEmailAndPasswordFunction,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formField, setFormField] = useState(defaultFormField);
  const { displayName, email, password, confirmPassword } = formField;

  //   console.log(formField);

  const resetForm = () => {
    setFormField(defaultFormField);
  };

  const handleSubmit = async (event) => {
    console.log("EVENT:", event);
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Password do not match with confirm password");
      return;
    }
    try {
      const response = await createUserWithEmailAndPasswordFunction(
        email,
        password
      );

      if (response) {
        await createUserDocumentFromAuth(response.user, {
          displayName: displayName,
        });
      }
      alert("User created !");
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("Email already exist !!");
      }
      console.log("Error creating user with email and password:", err);
    }
    resetForm();
  };

  const handlechange = (event) => {
    const { name, value } = event.target;

    setFormField({ ...formField, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account ?</h2>
      <span>Sign Up with your email and password</span>
      <form action="" onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handlechange}
          id="displayName"
          name="displayName"
          value={displayName}
        />

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handlechange}
          id="email"
          name="email"
          value={email}
        />

        <FormInput
          label="password"
          type="password"
          required
          onChange={handlechange}
          id="password"
          name="password"
          value={password}
        />

        <FormInput
          label="confirm password"
          type="text"
          required
          onChange={handlechange}
          id="confirmPassword"
          name="confirmPassword"
          value={confirmPassword}
        />

        <Button type="submit">sign up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
