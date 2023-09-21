import { useNavigate } from "react-router-dom";
import SignInForm from "./signInForm";
import { useAppDispatch } from "../hooks";
import { signIn } from "./authSlice";

export default function SignInPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div>
      <h1>Sign in to LessPass </h1>
      <SignInForm
        id="sign-in-form"
        onSubmit={(baseUrl, email, password) =>
          dispatch(signIn(baseUrl, email, password)).then(() => navigate("/"))
        }
      />
    </div>
  );
}
