
const Button = ({text="click me", icon='', classes, onClick}) => {

  return (
        <button onClick={onClick} className={classes}>{icon} {text}</button>
  )
}

export default Button;