import React, { useEffect, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import { VARIANT_OPTIONS } from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

function ToastPlayground() {
  const [toastMessage, setToastMessage] = useState("");
  const [toastVariant, setToastVariant] = useState(VARIANT_OPTIONS[0]);

  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    console.log({ toasts });

    return () => {};
  }, [toasts]);

  const createToast = (e) => {
    e.preventDefault();

    if (!toastMessage.length) {
      return;
    }

    setToasts([
      ...toasts,
      {
        id: crypto.randomUUID(),
        variant: toastVariant,
        message: toastMessage,
      },
    ]);
    setToastMessage("");
    setToastVariant(VARIANT_OPTIONS[0]);
  };

  const handleRemoveToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toasts={toasts} onRemoveToast={handleRemoveToast} />

      <div className={styles.controlsWrapper}>
        <form onSubmit={createToast}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{ alignSelf: "baseline" }}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={toastMessage}
                onChange={(e) => setToastMessage(e.target.value)}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((variant) => (
                <label key={variant} htmlFor={`variant-${variant}`}>
                  <>
                    <input
                      id={`variant-${variant}`}
                      type="radio"
                      name="variant"
                      value={variant}
                      checked={toastVariant === variant}
                      onChange={(e) => setToastVariant(e.target.value)}
                    />
                    {variant}
                  </>
                </label>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button onClick={createToast}>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
