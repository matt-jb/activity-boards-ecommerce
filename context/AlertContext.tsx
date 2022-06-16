import { createContext, useContext, useState } from 'react';
import { AlertTypes, IAlert } from '../utils/types';
import { v4 as uuidv4 } from 'uuid';

const AlertContext = createContext<any>({});

export const useAlert = () => useContext(AlertContext);

interface Props {
  children: React.ReactNode
}

export function AlertContextProvider({ children }: Props) {
  const [alerts, setAlerts] = useState<IAlert[]>([]);
  
  function addAlert(type: AlertTypes, message: string) {
    const newAlert = {
      id: uuidv4(),
      message,
      type
    }
    setAlerts(prev => [...prev, newAlert]);
  }
  
  function discardAlert(id: string) {
    const newAlerts = alerts;
    const i = alerts.findIndex(alert => alert.id === id);
    if (i > -1) newAlerts.splice(i, 1);
    setAlerts([...newAlerts]);
  };

  return (
    <AlertContext.Provider value={{ alerts, addAlert, discardAlert }}>
      {children}
    </AlertContext.Provider>
  )
}
