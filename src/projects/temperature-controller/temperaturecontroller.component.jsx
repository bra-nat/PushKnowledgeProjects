import "./temperature-controller.styles.scss";
import Button from "../components/button/button.component"
import { useState } from "react";
const TemperatureController = () => {

    const [temp, setTemp] = useState(0);

    const incTemp = () =>{
        
        setTemp(temp + 1)
    }
    const reduceTemp = () =>{
        setTemp(temp - 1)
    }

    const tempDisplayClasses = temp > 0 ? "card-body temp-display temp-display-2" : "card-body temp-display temp-display-1"

  return (
    <div className='card shadow mt-4 border-0 pb-4 px-4 temp-controller-container' >
        <div className={tempDisplayClasses}>{`${temp} \u00B0C`}</div>
        <div className="card-footer border-0 temp-controls">
            <Button text="-" onClick={reduceTemp} classes={"temp-control-btn text-white border-0 rounded bg-dark"}/>
            <Button text="+" onClick={incTemp} classes={"temp-control-btn text-white border-0 rounded bg-dark"}/>
        </div>
    </div>
  )
}

export default TemperatureController;