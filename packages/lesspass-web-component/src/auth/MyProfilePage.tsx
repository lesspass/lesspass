import { Title } from "../components/heading";
import { Button } from "../components/button";
import { useAppDispatch, useAppSelector } from "../store";
import { logout } from "./authSlice";
import { HelpMessage } from "../components/fieldset";
import { useTranslation } from "react-i18next";

export function MyProfilePage() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { currentUser } = useAppSelector((state) => state.auth);

  if (!currentUser) return null;

  return (
    <div className="flex flex-col space-y-10">
      <div>
        <Title className="mb-4">
          {t("MyProfilePage.Welcome", { email: currentUser.email })}
        </Title>
        <HelpMessage message={t("MyProfilePage.ThankYouMessage")} />
      </div>
      <div>
        <Button
          onClick={() => {
            dispatch(logout());
          }}
        >
          {t("MyProfilePage.SignOut")}
        </Button>
      </div>
    </div>
  );
}

export default MyProfilePage;
