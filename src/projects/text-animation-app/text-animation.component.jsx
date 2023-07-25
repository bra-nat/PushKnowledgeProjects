import { useState, useEffect, useRef } from "react";
import Button from "../components/button/button.component";
import FormGroup from "../components/form-group/form-group.component";
import AnimatedText from "react-animated-text-content";

const TextAnimationApp = () => {
  const [inputValue, setInputValue] = useState("");

  const [animatedText, setAnimatedText] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleClear = () => {
    setAnimatedText(inputValue);
    setInputValue(() => "");
  };

let inputText = useRef(null)

useEffect(() => {
  inputText.current.focus();
})

  return (
    <div className="container text-center">
      <form
        className="container d-flex align-items-end mt-4"
        onSubmit={(e) => e.preventDefault()}>
        <FormGroup
          labelText={"Type in your text to be animated"}
          inputType={"text"}
          values={inputValue}
          placeholder={"Your text here"}
          className={"w-100 shadow border-1 mt-1 p-2 rounded outline-0"}
          onChange={handleInputChange}
          reference={inputText}
        />
        <Button
          text={"Clear"}
          btnClass={"btn btn-danger ms-2 px-4 py-2"}
          onClick={handleClear}
        />
      </form>
      
      {animatedText && (
        <AnimatedText
          type="char"
          /*
          duration={1.1}
          animation={{ x: "-150px", y: "250px", ease: "linear", }}
          interval={0.04}
          */
          className="fw-bold fs-1">
          {animatedText}
        </AnimatedText>
      )}
    </div>
  );
};

export default TextAnimationApp;
