import React, { useState } from "react";

type Credentials = {
  email: string;
  password: string;
};

type RegisterFormProps = {
  id?: string;
  onSubmit: (credentials: Credentials) => void;
};

const RegisterForm = ({
  id = "register-form",
  onSubmit,
}: RegisterFormProps) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [termOfUse, setTermOfUse] = useState(true);

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
        if (termOfUse) {
          onSubmit(credential);
        }
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
      <input
        type="checkbox"
        id="term-of-use-checkbox"
        data-testid="term-of-use-checkbox"
        name="term-of-use"
        checked={termOfUse}
        onChange={(event) => setTermOfUse(event.target.checked)}
      />
      <label htmlFor="term-of-use-checkbox">accept terms of use</label>
      <button type="submit" id="register-button" data-testid="register-button">
        Create an account
      </button>
    </form>
  );
};

export default RegisterForm;
