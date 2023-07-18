
const SliderComponent = ({ slideValue, handleInputChange, bgColor, textColor }) => {
const sliderStyle = {
    appearance: "none",
    width: "100%",
    height: 25,
    background: "lightgrey",
    cursor: "pointer",
    opacity: 0.7
}
  return (
    <div className="container d-flex flex-column w-100 align-items-center mt-4" style={{gap: 100}}>
        <input style={sliderStyle} type="range" min={"0"} max={"100"} value={slideValue} onInput={handleInputChange}/>
        <div style={{
            background: !bgColor ? "grey" : bgColor,
            color: !textColor ? "black" : textColor,
            height: `${slideValue * 3}px`,
            width: `${slideValue * 3}px`,
            fontWeight: 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "50%"
        }}>
        <span>{slideValue}</span>
        </div>
    </div>
  )
}

export default SliderComponent;