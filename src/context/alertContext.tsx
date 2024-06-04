// AlertContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';
import { notification } from 'antd';

interface AlertContextType {
  showAlert: (message: string, type: 'success' | 'info' | 'warning' | 'error') => void;
}

const AlertContext = createContext<AlertContextType>({
  showAlert: () => {},
});


export const useAlert = () => useContext(AlertContext);

interface AlertProviderProps {
    children: ReactNode;
}

export const AlertProvider: React.FC<AlertProviderProps> = ({ children }) => {
  const showAlert = (message: string, type: 'success' | 'info' | 'warning' | 'error') => {
    notification[type]({
      message: message,
      duration: 2,
    });
  };

  return (
    <AlertContext.Provider value={{ showAlert }}>
      {children}
    </AlertContext.Provider>
  );
};
