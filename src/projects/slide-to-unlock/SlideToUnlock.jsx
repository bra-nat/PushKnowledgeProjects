import React, { useState } from "react";
import LockSlider from "./LockSlider";
import HomeScreenImg from "./img/home.avif";
import LockScreenImg from "./img/lock.avif";
import { AiFillUnlock } from "react-icons/ai";
const SlideToUnlock = () => {
  const [showLockSlider, setShowLockSlider] = useState(true);

  const [uiProps, setUiProps] = useState({
    uiText: "Unlock Screen",
    uiColor: "#eee",
    uiBg: `url(${LockScreenImg})`,
  });

  const [lockSliderValue, setLockSliderValue] = useState(0);

  const handleLockSliderInput = (e) => {
    const value = parseInt(e.target.value);
    setLockSliderValue(value);

    if (value === 100) {
      setShowLockSlider(false);

      setUiProps({
        uiText: "Lock Screen",
        uiColor: "#fff",
        uiBg: `url(${HomeScreenImg})`,
      });
    }
  };

  const handleIconDoubleClick = () => {
    setUiProps({
      uiText: "Unlock Screen",
      uiColor: "#eee",
      uiBg: `url(${LockScreenImg})`,
    });

    setShowLockSlider(true);
    setLockSliderValue(0);
  };

  return (
    <div
      className={
        "container d-flex shadow justify-content-between align-items-center flex-column stu-border-round"
      }
      style={{
        height: "70vh",
        marginTop: "15vh",
        width: 340,
        border: "4px solid #000",
        background: uiProps.uiBg,
      }}>
      <h1 className="title" style={{ color: uiProps.uiColor }}>
        {uiProps.uiText}
      </h1>
      {showLockSlider ? (
        <LockSlider
          width={"250px"}
          handleInput={handleLockSliderInput}
          sliderValue={lockSliderValue}
        />
      ) : (
        <div onDoubleClick={handleIconDoubleClick}>
          <AiFillUnlock className="unlockIcon" />
        </div>
      )}
    </div>
  );
};

export default SlideToUnlock;
