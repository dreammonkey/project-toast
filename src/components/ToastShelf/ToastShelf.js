import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts = [], onRemoveToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((toast) => (
        <li key={toast.id} className={styles.toastWrapper}>
          <Toast
            message={toast.message}
            variant={toast.variant}
            onClose={(e) => onRemoveToast(toast.id)}
          >
            {toast.message}{" "}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
