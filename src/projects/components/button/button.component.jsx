import "./button.styles.scss";

const Button = ({text, classes, onClick}) => {
  return (
        <button onClick={onClick} className={classes}>{text}</button>
  )
}

export default Button;