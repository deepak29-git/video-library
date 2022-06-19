import { createContext, useContext, useState } from "react";

const ToastContext = createContext(null);

const ToastProvider = ({ children }) => {
  const [toast, setToast] = useState({
    addToWatchLater: false,
    removeFromWatchLater: false,
    addToPlaylist: false,
  });
  return (
    <ToastContext.Provider value={{ toast, setToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const useToast = () => useContext(ToastContext);

export { useToast, ToastProvider };
