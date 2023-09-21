import { useReducer, useState } from "react";
import { generatePassword } from "lesspass";

interface State {
  site: string;
  login: string;
  masterPassword: string;
}

const initialFormState: State = {
  site: "",
  login: "",
  masterPassword: "",
};

type Action = {
  type: "passwordGenerationForm/setInput";
  field: keyof State;
  value: string;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "passwordGenerationForm/setInput":
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
}

function App() {
  const [formState, dispatch] = useReducer(reducer, initialFormState);
  const [generatedPassword, setGeneratedPassword] = useState("");

  const handleOnChange = (field: keyof State, value: string) => {
    dispatch({
      type: "passwordGenerationForm/setInput",
      field,
      value,
    });
  };

  return (
    <div id="LessPass">
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generatePassword(
              {
                site: formState.site,
                login: formState.login,
                lowercase: true,
                uppercase: true,
                digits: true,
                symbols: true,
                length: 16,
                counter: 1,
              },
              formState.masterPassword
            ).then(setGeneratedPassword);
          }}
        >
          <label htmlFor="site">Site</label>
          <input
            id="site"
            name="site"
            value={formState.site}
            onChange={(e) => handleOnChange("site", e.target.value)}
          />

          <label htmlFor="login">Login</label>
          <input
            id="login"
            name="login"
            value={formState.login}
            onChange={(e) => handleOnChange("login", e.target.value)}
          />

          <label htmlFor="masterPassword">Master Password</label>
          <input
            id="masterPassword"
            name="masterPassword"
            value={formState.masterPassword}
            onChange={(e) => handleOnChange("masterPassword", e.target.value)}
          />

          <button>Generate & copy</button>
        </form>
      </div>
      <div>{generatedPassword !== "" && <span>{generatedPassword}</span>}</div>
    </div>
  );
}

export default App;
