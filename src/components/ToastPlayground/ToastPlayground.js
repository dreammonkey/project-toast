import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
import { VARIANT_OPTIONS } from "../Toast/Toast";
import { ToastContext } from "../ToastProvider/ToastProvider";

function ToastPlayground() {
  const [toastMessage, setToastMessage] = React.useState("");
  const [toastVariant, setToastVariant] = React.useState(VARIANT_OPTIONS[0]);

  const { addToast } = React.useContext(ToastContext);

  const handleCreateToast = (e) => {
    e.preventDefault();

    if (!toastMessage.length) {
      return;
    }

    addToast({
      variant: toastVariant,
      message: toastMessage,
    });

    setToastMessage("");
    setToastVariant(VARIANT_OPTIONS[0]);
  };

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <form onSubmit={handleCreateToast}>
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
              <Button onClick={handleCreateToast}>Pop Toast!</Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
