import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastShelf({ onRemoveToast }) {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            message={toast.message}
            variant={toast.variant}
            onClose={(e) => removeToast(toast.id)}
          >
            <div class="VisuallyHidden_wrapper">{toast.variant} -</div>
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
