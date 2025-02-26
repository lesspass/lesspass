import { Navigate, Outlet, useLocation } from "react-router";
import { useAppSelector } from "../store";

export default function AuthenticatedLayout() {
  const { currentUser } = useAppSelector((state) => state.auth);
  const location = useLocation();

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/auth/signIn" state={{ from: location }} />
  );
}
