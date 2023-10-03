import React from "react";

export default function useKeyUp(callback, keyCode) {
  React.useEffect(() => {
    function onKeyUp(e) {
      if (e.code === keyCode) {
        callback();
      }
    }

    window.addEventListener("keyup", onKeyUp);

    return () => {
      window.removeEventListener("keyup", onKeyUp);
    };
  }, [callback, keyCode]);
}
