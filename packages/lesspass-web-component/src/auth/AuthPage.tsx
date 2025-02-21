import { Navigate, useSearchParams } from "react-router";

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const oobCode = searchParams.get("oobCode");
  return <Navigate replace to={`/auth/${mode}/${oobCode}`} />;
};

export default AuthPage;
