import { useEffect, useState } from "react";
import Button from "../button/button.component";
import "./alert.styles.scss";

const Alert = ({ type, onClick, message, delay=false }) => {
  const [showAlert, setShowAlert] = useState(true);

  const closeAlert = () => {
    setTimeout(() => {
      setShowAlert(false);
    }, 400);
  };

  useEffect(() =>{
    delay && setTimeout(() => {
        setShowAlert(false);
    }, 5000);
  })

  return (
    showAlert && (
      <div className={`alert-container ${type}`}>
        <div className="text">{message}</div>
        <Button
          classes={"a-btn-close border-0 bg-transparent"}
          text="X"
          onClick={closeAlert}
        />
      </div>
    )
  );
};

export default Alert;
