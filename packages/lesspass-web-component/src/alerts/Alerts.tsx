import { hideAlert, selectAlerts } from "./alertsSlice";
import { useAppDispatch, useAppSelector } from "../store";

export interface IAlert {
  id: string;
  title: string;
  message: string;
  type: "success" | "info" | "danger";
}

export const Alert = ({
  alert,
  hideAlert,
}: {
  alert: IAlert;
  hideAlert: () => void;
}) => {
  const bgs: Record<IAlert["type"], string> = {
    success: "bg-green-200",
    info: "bg-blue-500",
    danger: "bg-red-200",
  };
  const bg = bgs[alert.type];
  const colors: Record<IAlert["type"], string> = {
    success: "text-green-800",
    info: "text-white",
    danger: "text-red-500",
  };
  const color = colors[alert.type];
  return (
    <div className={`rounded-md ${bg} ${color} p-2`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className={`text-sm leading-5 font-medium`}>{alert.title}</h3>
          {alert.message !== "" && (
            <div className={`mt-2 text-sm leading-5`}>{alert.message}</div>
          )}
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              onClick={hideAlert}
              className="inline-flex rounded-md p-1.5 text-green-500 hover:bg-green-100 focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50 focus:outline-hidden"
            >
              <span className={`${color}`}>
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Alerts() {
  const alerts = useAppSelector(selectAlerts);
  const dispatch = useAppDispatch();

  const alertsArray = Object.values(alerts);
  if (alertsArray.length === 0) return null;
  return (
    <div
      className="translate fixed top-16 left-1/2 -translate-x-1/2 bg-transparent p-2 opacity-90"
      style={{
        zIndex: 100,
      }}
      role="alert"
    >
      <div className="flex flex-col gap-2">
        {alertsArray.map((alert) => (
          <Alert
            key={alert.id}
            alert={alert}
            hideAlert={() => dispatch(hideAlert(alert))}
          />
        ))}
      </div>
    </div>
  );
}
