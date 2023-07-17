import "./randomize-color.styles.scss";
import Title  from "../components/title/title.component";
import Button from "../components/button/button.component";

const RandommizeColor = () => {

const getRandomColor =() => {
    const hexStr = "0123456789ABCDEF";
    let color = "#";

    for(let i=0; i<6; i++){
        color += hexStr[Math.floor(Math.random() * 16)]
    }

    return color;
}

const onClickHandler = (event) => {
    const selectedColor = getRandomColor();
    const body = document.querySelector('body')
    body.style.background = selectedColor;
    event.target.style.background = selectedColor;
}

  return (
    
    <div className="randomize-color-container">
        <Title text={"Randomize Color"} />
        <div className="button-container">
        <Button classes={"btn btn-danger"} text={"Click me"} onClick={onClickHandler} />
        <Button classes={"btn btn-success"} text={"Click me"} onClick={onClickHandler} />
        <Button classes={"btn btn-accent"} text={"Click me"} onClick={onClickHandler} />
        <Button classes={"btn btn-secondary"} text={"Click me"} onClick={onClickHandler} />
        </div>
    </div>
  )
}

export default RandommizeColor;