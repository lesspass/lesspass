import { Outlet } from "react-router";
import Alerts from "./alerts/Alerts";
import Header from "./components/header";
import { useGetCurrentUserQuery } from "./auth/authApi";
import { LoadingPage } from "./LoadingPage";

export default function Page() {
  const { isLoading } = useGetCurrentUserQuery();

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <div>
      <Alerts />
      <Header />
      <div className="mx-auto max-w-lg p-4 lg:p-6">
        <Outlet />
      </div>
    </div>
  );
}
