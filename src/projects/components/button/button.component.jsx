
const Button = ({text, icon='', btnClass, onClick}) => {

  return (
        <button onClick={onClick} className={btnClass}>{icon} {text && text}</button>
  )
}

export default Button;