import SliderComponent from "./slider.component";
import { useState } from "react";
import Title from "../components/title/title.component";

const SliderApp = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const onHandleInputChange = (e) => {
    console.log(e.target.value);

    setSliderValue(e.target.value);
  };

  let bgColor;
  let textColor;

if(sliderValue < 25) {
    bgColor= "red";
    textColor= "red";
}
if(sliderValue < 25 && sliderValue <= 50) {
    bgColor= "blue";
}
if(sliderValue > 51 && sliderValue <= 75) {
    bgColor= "green";
    textColor= "white";
}
if(sliderValue > 75 ) {
    bgColor= "orange";
    textColor= "white";
}
if(sliderValue === 100 ) {
    bgColor= "red";
    textColor= "white";
}

  return (
    <div>
      <Title text={"Slide to grow"} />
      <SliderComponent
        slideValue={sliderValue}
        handleInputChange={onHandleInputChange}
        bgColor={bgColor}
        textColor={textColor}
      />
    </div>
  );
};

export default SliderApp;
