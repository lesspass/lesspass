import React from "react";
import PasswordGeneratorForm from "./PasswordGeneratorForm";

const PasswordGeneratorPage = ({
  masterPassword,
  setMasterPassword,
}: {
  setMasterPassword: (masterPassword: MasterPassword) => void;
  masterPassword: MasterPassword;
}) => (
  <>
    <PasswordGeneratorForm
      masterPassword={masterPassword}
      onPasswordGenerated={(generatedPassword) => alert(generatedPassword)}
    />
    <button
      id="lock-button"
      data-testid="lock-button"
      onClick={() => setMasterPassword("")}
    >
      lock
    </button>
  </>
);

export default PasswordGeneratorPage;
