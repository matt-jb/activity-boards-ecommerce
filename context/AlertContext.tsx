import { createContext, useContext, useState } from "react";
import { AlertTypes, IAlert } from "../utils/types";
import { v4 as uuidv4 } from "uuid";

interface IAlertContext {
  alerts: Array<IAlert>;
  addAlert: (type: AlertTypes, message: string) => void;
  discardAlert: (id: string) => void;
}

const AlertContext = createContext<IAlertContext>({} as IAlertContext);

export const useAlert = () => useContext(AlertContext);

interface Props {
  children: React.ReactNode;
}

export function AlertContextProvider({ children }: Props) {
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  // useLocation -> next
  // "localhost:3000"
  // "/login"
  // "/"

  function addAlert(type: AlertTypes, message: string) {
    const newAlert = {
      id: uuidv4(),
      message,
      type,
    };
    setAlerts((prev) => [...prev, newAlert]);
  }

  function discardAlert(id: string) {
    setAlerts((prev) => prev.filter((singleAlert) => singleAlert.id !== id));
  }

  return (
    <AlertContext.Provider value={{ alerts, addAlert, discardAlert }}>
      {children}
    </AlertContext.Provider>
  );
}
