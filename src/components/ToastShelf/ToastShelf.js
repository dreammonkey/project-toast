import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts = [], onRemoveToast }) {
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
            onClose={(e) => onRemoveToast(toast.id)}
          >
            <div class="VisuallyHidden_wrapper">{toast.variant} -</div>
            {toast.message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
