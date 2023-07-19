import Button from "../button/button.component";
import "./popup.styles.scss";

const Popup = ({ type, title, text, alertClass, handleClose, trigger }) => {
  const popupContainer = {
    position: "absolute",
    top: "0",
    height: "100vh",
    width: "100vw",
    background: "rgba(0,0,0, .1)",
    zIndex: "-1",
  };

  const popupStyle = {
    position: "relative",
    margin: "40vh auto",
    zIndex: "1",
  };

  return (trigger && (
    <div style={popupContainer}>
      <div className={`${type}`} style={popupStyle}>
        <div className={alertClass}>
          <div className="d-flex flex-column ">
            <h4 className="mb-1">{title && title}</h4>
            <p className="mb-1">{text && text}</p>
          </div>
          <Button btnClass={"btn-close"} onClick={() => handleClose(false)} />
        </div>
      </div>
    </div>
  ));
};

export default Popup;
