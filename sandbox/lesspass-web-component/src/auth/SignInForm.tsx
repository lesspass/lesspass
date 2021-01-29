import React, { useState } from "react";

type Credentials = {
  email: string;
  password: string;
};

type SignInFormProps = {
  id?: string;
  onSubmit: (credentials: Credentials) => void;
};

const SignInForm = ({ id = "sign-in-form", onSubmit }: SignInFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form
      id={id}
      data-testid={id}
      onSubmit={(event) => {
        event.preventDefault();
        const credential = {
          email,
          password,
        };
        onSubmit(credential);
      }}
    >
      <label htmlFor="email-input">Email</label>
      <input
        type="email"
        id="email-input"
        data-testid="email-input"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password-input">Password</label>
      <input
        type="password"
        id="password-input"
        data-testid="password-input"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" id="sign-in-button" data-testid="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
