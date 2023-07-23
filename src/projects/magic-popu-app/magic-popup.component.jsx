import Popup from "../components/popup/popup.component";
import Button from "../components/button/button.component";
import Title from "../components/title//title.component";
import { useState, useEffect } from "react";

const MagicPopup = () => {
  const [trigger, setTrigger] = useState(false);
  const [timeTrigger, setTimeTrigger] = useState(false);
  const [warnTrigger, setWarnTrigger] = useState(false);

  const triggerPopup = () => {
    console.log("Triger Popup");
    setTrigger(true);
  };

useEffect(() => {
    setTimeout( () => {
        setTimeTrigger(true)
    }, 3000)
    setTimeout( () => {
        setWarnTrigger(true)
    }, 6000)
}, [])

  return (
    <div>
      <Title text={"Click for pupop, or wait 3 seconds"} />
      <Button
        btnClass={"btn btn-info text-white"}
        onClick={triggerPopup}
        text={"Click"}
      />
        <Popup
          type={"alert-info"}
          title={"Triggered Popup"}
          alertClass={"alert-close p-danger"}
          text={"This popup was triggered by a button"}
          handleClose={(setTrigger)}
          trigger={trigger}
        />
        <Popup
          type={"alert-success"}
          title={"Time Triggered Popup"}
          alertClass={"alert-close p-primary"}
          text={"This popup was triggered by a delay"}
          handleClose={(setTimeTrigger)}
          trigger={timeTrigger}
        />
        <Popup
          type={"alert-success"}
          title={"Time Triggered Popup"}
          alertClass={"alert-close p-info"}
          text={"This popup was triggered by a delay"}
          handleClose={(setWarnTrigger)}
          trigger={warnTrigger}
        />
    </div>
  );
};

export default MagicPopup;
