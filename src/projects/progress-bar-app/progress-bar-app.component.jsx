import { useRef, useEffect, useState } from "react";
import Title from "../components/title/title.component";
import "./progress-bar-app.styles.scss";
import ProgressBarComponent from "../components/progress-bar-component/progress-bar.component";

const ProgressBarApp = () => {
  const [completed, setCompleted] = useState(54);

  const [status, setStatus] = useState({
    ui: 33,
    ux: 88,
    data: 60,
  });

  const projectData = [
    {
      bgColor: "#7633f9",
      completed: status.ui,
    },
    {
      bgColor: "#28a745",
      completed: status.ux,
    },
    {
      bgColor: "#dc3545",
      completed: status.data,
    },
  ];

  const inputStyle = {
    width: 50,
    border: "none",
    outline: "none",
    textAlign: "center",
    borderBottom: "1px solid lightgray",
  };

  const onChangeHandlerUi = (e) => {
    setStatus({ ...status, ui: e.target.value })
  };
  const onChangeHandlerUx = (e) => {
    setStatus({ ...status, ux: e.target.value })
  };
  const onChangeHandlerData = (e) => {
    setStatus({ ...status, data: e.target.value })
  };

  const uiInput = useRef(null);

  useEffect(() => {
    uiInput.current.focus();
    setInterval(() => 
      setCompleted( Math.floor(Math.random() * 100) + 1 ), 2000)
  ;
  }, []);

  return (
    <div className="container pb-container">
      <Title text={"Progress bars"} />
      <h2>Project Status:</h2>

      <ul>
        <li>
          UI Status:{" "}
          <input
            onChange={onChangeHandlerUi}
            value={status.ui}
            type="number"
            style={inputStyle}
            ref={uiInput}
          />
        </li>
        <li>
          UX Status:{" "}
          <input
            onChange={onChangeHandlerUx}
            value={status.ux}
            type="number"
            style={inputStyle}
          />
        </li>
        <li>
          DATA Status:{" "}
          <input
            onChange={onChangeHandlerData}
            value={status.data}
            type="number"
            style={inputStyle}
          />
        </li>
      </ul>
      {/********* Progress Bars ***************/}
      {projectData.map((data, indx) => (
        <ProgressBarComponent
        key={indx}
        bgColor={data.bgColor}
        completed={data.completed} 
      />
      ))}
      
      <ProgressBarComponent
        bgColor={completed > 50 ? "#7633f9" : "#dc3545"}
        completed={completed}
      />
    </div>
  );
};

export default ProgressBarApp;
