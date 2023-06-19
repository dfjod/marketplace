import { useState, useEffect } from "react";

const Popup = ({ message }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      setTimeout(() => {
        setShow(false);
      }, 4000);
    }
  }, [message]);

  if (!show) {
    return null;
  }

  return <div className="popup">{message}</div>;
}

export default Popup;