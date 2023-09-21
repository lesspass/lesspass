import { useState } from "react";

type SignInFormProps = {
  id?: string;
  onSubmit: (baseUrl: string, email: string, password: string) => void;
};

const SignInForm = ({ id = "sign-in-form", onSubmit }: SignInFormProps) => {
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <form
      id={id}
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit(baseUrl, email, password);
      }}
    >
      <label htmlFor="base-url-input">LessPass server</label>
      <input
        type="text"
        id="base-url-input"
        name="baseURL"
        value={baseUrl}
        onChange={(event) => setBaseUrl(event.target.value)}
      />
      <label htmlFor="email-input">Email</label>
      <input
        type="email"
        id="email-input"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <label htmlFor="password-input">Password</label>
      <input
        type="password"
        id="password-input"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit" id="sign-in-button">
        Sign In
      </button>
    </form>
  );
};

export default SignInForm;
