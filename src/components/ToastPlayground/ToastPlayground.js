import React, { useEffect, useState } from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import Toast, { VARIANT_OPTIONS } from "../Toast/Toast";

function ToastPlayground() {
  // const [toastMessage, setToastMessage] = useState("");
  // const [toastVariant, setToastVariant] = useState(VARIANT_OPTIONS[0]);

  const [toast, setToast] = useState({
    message: "",
    variant: VARIANT_OPTIONS[0],
  });

  useEffect(() => {
    console.log({ toast });

    return () => {};
  }, [toast]);

  const createToast = (e) => {
    e.preventDefault();
  };

  const resetToast = () => {
    setToast({
      message: "",
      variant: VARIANT_OPTIONS[0],
    });
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {toast && (
        <Toast
          variant={toast.variant}
          message={toast.message}
          onClose={resetToast}
        />
      )}

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
                value={toast.message}
                onChange={(e) =>
                  setToast({
                    ...toast,
                    message: e.target.value,
                  })
                }
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
                      checked={toast.variant === variant}
                      onChange={(e) =>
                        setToast({
                          ...toast,
                          variant: e.target.value,
                        })
                      }
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
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
