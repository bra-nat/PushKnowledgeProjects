import Shield from "../../assets/images/Shield.png";
import Sword from "../../assets/images/Sword.png";
import Horn from "../../assets/images/Horn.png";

const Card = ({
  player,
  defenseValue,
  attackValue,
  unitTypeName,
  unitTypeImg,
  moralValue,
  unitValue
}) => {
  let iconStyle = {
    marginRight: 10,
    width: 20,
    background: "transparent",
  };
 

  let textHead = {
    color: "#bab6bf",
  };

  let mirror;

  function mirrorImg(player) {
    player === "player_2" ? (mirror = "scaleX(-1)") : (mirror = "scaleX(1)");
    return mirror;
  }

  mirrorImg(player);

  let imgStyle = {
    width: 150,
    background: "#fff",
    transform: `${mirror}`,
  };

  return (
    <div
      className={`card p-0 text-white bg-transparent text-center m-1 shadow ${
        player === "player_1" ? "border border-info" : "border border-danger"
      } `}
      style={{ maxWidth: "180px" }}>
      <section
        className={` card-header text-white d-flex justify-content-between ${
          player === "player_1" ? "bg-info" : "bg-danger"
        } `}>
        <div className="defense">
          <img src={Shield} alt="defense-img" style={iconStyle} />
          <span>{!defenseValue && "00"}</span>
        </div>
        <div className="attack">
          <img src={Sword} alt="defense-img" style={iconStyle} />
          <span>{!attackValue && "00"}</span>
        </div>
      </section>
      <section className="card-body">
        <h4 className="mb-2 fs-5" style={textHead}>
          {!unitTypeName ? "Unit type name" : unitTypeName}
          <img src={unitTypeImg} alt="unitTypeImg" style={imgStyle} />
        </h4>
      </section>
      <section
        className={` card-footer text-white d-flex justify-content-between ${
          player === "player_1" ? "bg-info" : "bg-danger"
        } `}>
        <div className="defense">
          <img src={Horn} alt="defense-img" style={iconStyle} />
          <span>{!moralValue && "00"}</span>
        </div>
        <div className="attack">
          <img src={unitTypeImg} alt="defense-img" style={iconStyle} />
          <span>{!unitValue && "00"}</span>
        </div>
      </section>
    </div>
  );
};

export default Card;
