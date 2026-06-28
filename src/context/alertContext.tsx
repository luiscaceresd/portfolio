import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";

// Define the shape of the context
interface AlertContextType {
  isOpen: boolean;
  type: string;
  message: string;
  onOpen: (type: string, message: string) => void;
  onClose: () => void;
}

// Create the context with a default undefined value, but type it properly
const AlertContext = createContext<AlertContextType | undefined>(undefined);

interface AlertProviderProps {
  children: ReactNode;
}

export const AlertProvider = ({ children }: AlertProviderProps) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const onOpen = useCallback((type: string, message: string) => {
    setState({ isOpen: true, type, message });
  }, []);

  const onClose = useCallback(() => {
    setState((current) =>
      current.isOpen ? { isOpen: false, type: '', message: '' } : current
    );
  }, []);

  const value = useMemo(
    () => ({
      ...state,
      onOpen,
      onClose,
    }),
    [state, onOpen, onClose]
  );

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = (): AlertContextType => {
  const context = useContext(AlertContext);
  if (context === undefined) {
    throw new Error('useAlertContext must be used within an AlertProvider');
  }
  return context;
};
