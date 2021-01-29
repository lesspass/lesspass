import React, { useState, useRef, useEffect } from "react";
const LessPass = require("lesspass");

const PasswordGeneratorForm = ({
  masterPassword,
  onPasswordGenerated,
}: {
  masterPassword: MasterPassword;
  onPasswordGenerated: (generatedPassword: string) => void;
}) => {
  const [site, setSite] = useState("");
  const [login, setLogin] = useState("");

  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(true);

  const [length, setLength] = useState(16);
  const [counter, setCounter] = useState(1);

  const siteInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    siteInputRef.current?.focus();
  }, []);

  return (
    <form
      id="password-generator-form"
      data-testid="password-generator-form"
      onSubmit={(event) => {
        event.preventDefault();
        const passwordProfile = {
          site,
          login,
          lowercase,
          uppercase,
          digits,
          symbols,
          length,
          counter,
        };
        LessPass.generatePassword(passwordProfile, masterPassword).then(
          onPasswordGenerated
        );
      }}
    >
      <label htmlFor="site-input">Site</label>
      <input
        type="text"
        id="site-input"
        data-testid="site-input"
        name="site"
        ref={siteInputRef}
        value={site}
        onChange={(event) => setSite(event.target.value)}
      />
      <label htmlFor="login-input">Last name</label>
      <input
        type="text"
        id="login-input"
        data-testid="login-input"
        name="login"
        value={login}
        onChange={(event) => setLogin(event.target.value)}
      />
      <fieldset>
        <legend>Options</legend>
        <input
          type="checkbox"
          id="lowercase-checkbox"
          data-testid="lowercase-checkbox"
          name="lowercase"
          checked={lowercase}
          onChange={(event) => setLowercase(event.target.checked)}
        />
        <label htmlFor="lowercase-checkbox">a-z</label>

        <input
          type="checkbox"
          id="uppercase-checkbox"
          data-testid="uppercase-checkbox"
          name="uppercase"
          checked={uppercase}
          onChange={(event) => setUppercase(event.target.checked)}
        />
        <label htmlFor="uppercase-checkbox">A-Z</label>

        <input
          type="checkbox"
          id="digits-checkbox"
          data-testid="digits-checkbox"
          name="digits"
          checked={digits}
          onChange={(event) => setDigits(event.target.checked)}
        />
        <label htmlFor="digits-checkbox">0-9</label>

        <input
          type="checkbox"
          id="symbols-checkbox"
          data-testid="symbols-checkbox"
          name="symbols"
          checked={symbols}
          onChange={(event) => setSymbols(event.target.checked)}
        />
        <label htmlFor="symbols-checkbox">%!@</label>

        <label htmlFor="length-input">Length</label>
        <input
          type="number"
          id="length-input"
          data-testid="length-input"
          name="length"
          value={length}
          onChange={(event) => setLength(parseInt(event.target.value))}
        />

        <label htmlFor="length-input">Counter</label>
        <input
          type="number"
          id="counter-input"
          data-testid="counter-input"
          name="counter"
          value={counter}
          onChange={(event) => setCounter(parseInt(event.target.value))}
        />
      </fieldset>

      <button
        type="submit"
        id="generate-password-button"
        data-testid="generate-password-button"
      >
        Generate Password
      </button>
    </form>
  );
};

export default PasswordGeneratorForm;
