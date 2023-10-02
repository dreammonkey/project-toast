import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    console.log({ toasts });

    return () => {};
  }, [toasts]);

  React.useEffect(() => {
    function onKeyUp(e) {
      if (e.code === "Escape") {
        setToasts([]);
      }
    }

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [toasts]);

  const addToast = React.useCallback(
    ({ variant, message }) => {
      setToasts([
        ...toasts,
        {
          id: crypto.randomUUID(),
          variant: variant,
          message: message,
        },
      ]);
    },
    [toasts]
  );

  const removeToast = React.useCallback(
    (id) => {
      setToasts(toasts.filter((toast) => toast.id !== id));
    },
    [toasts]
  );

  const contextValue = React.useMemo(() => {
    return {
      toasts,
      addToast,
      removeToast,
    };
  }, [toasts, addToast, removeToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
