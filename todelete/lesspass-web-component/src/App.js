import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useReducer, useState } from "react";
import { generatePassword } from "lesspass";
const initialFormState = {
    site: "",
    login: "",
    masterPassword: "",
};
function reducer(state, action) {
    switch (action.type) {
        case "passwordGenerationForm/setInput":
            return Object.assign(Object.assign({}, state), { [action.field]: action.value });
        default:
            return state;
    }
}
function App() {
    const [formState, dispatch] = useReducer(reducer, initialFormState);
    const [generatedPassword, setGeneratedPassword] = useState("");
    const handleOnChange = (field, value) => {
        dispatch({
            type: "passwordGenerationForm/setInput",
            field,
            value,
        });
    };
    return (_jsxs("div", Object.assign({ id: "LessPass" }, { children: [_jsx("div", { children: _jsxs("form", Object.assign({ onSubmit: (e) => {
                        e.preventDefault();
                        generatePassword({
                            site: formState.site,
                            login: formState.login,
                            lowercase: true,
                            uppercase: true,
                            digits: true,
                            symbols: true,
                            length: 16,
                            counter: 1,
                        }, formState.masterPassword).then(setGeneratedPassword);
                    } }, { children: [_jsx("label", Object.assign({ htmlFor: "site" }, { children: "Site" })), _jsx("input", { id: "site", name: "site", value: formState.site, onChange: (e) => handleOnChange("site", e.target.value) }), _jsx("label", Object.assign({ htmlFor: "login" }, { children: "Login" })), _jsx("input", { id: "login", name: "login", value: formState.login, onChange: (e) => handleOnChange("login", e.target.value) }), _jsx("label", Object.assign({ htmlFor: "masterPassword" }, { children: "Master Password" })), _jsx("input", { id: "masterPassword", name: "masterPassword", value: formState.masterPassword, onChange: (e) => handleOnChange("masterPassword", e.target.value) }), _jsx("button", { children: "Generate & copy" })] })) }), _jsx("div", { children: generatedPassword !== "" && _jsx("span", { children: generatedPassword }) })] })));
}
export default App;
