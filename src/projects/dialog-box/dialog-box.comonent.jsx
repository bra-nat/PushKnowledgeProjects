import { useState, useEffect } from "react";
import { BsFillEmojiFrownFill, BsFillEmojiSmileFill } from "react-icons/bs";
import "./dialog-box.styles.scss";
import Button from "../components/button/button.component";

const DialogBox = ({ width = 350 }) => {
  const [subscription, setSubscription] = useState({
    title: "Hello",
    description: "Would you like to subscribe?",
    state: null,
    justifyContent: "space-between",
  });

  const handleSubscribe = () => {
    setSubscription({
      title: "Thank you",
      description: "for your subscription",
      state: "subscribe",
      justifyContent: "flex-end",
    });
  };

  const handleUnSubscribe = () => {
    setSubscription({
      title: "Sorry",
      description: "to see you go",
      state: "unsubscribe",
      justifyContent: "flex-end",
    });
  };

  const [icon, setIcon] = useState();

  let iconStyle = {
    fontSize: "80px",
    justifySelf: "center",
    color:
      subscription.state === "subscribe"
        ? "rgba( 59, 137, 90, 0.4"
        : "rgba( 25, 118, 160, 0.4 ",
  };

  useEffect(() => {
    if(subscription.state === "subscribe"){
        setIcon(<BsFillEmojiSmileFill style={iconStyle} />);
        document.body.style.background = "rgba(59, 137, 90, 0.4)"
    }

    if(subscription.state === "unsubscribe"){
        setIcon(<BsFillEmojiFrownFill style={iconStyle} />);
        document.body.style.background = "rgba( 25, 118, 160, 0.4 )"
    }
    
  }, [subscription.state]);

const [bounce, setBounce] = useState("");

useEffect(() => {
    setTimeout(() => {
        setBounce("");
    }, 500);
    return () => setBounce("bounce");
}, [subscription.state])

  return (
    <div className= {`card m-auto shadow bg-light mt-4 ${bounce}`} style={{ width: width }}>
      <div className="card-body">
        <div
          className="d-grid"
          style={{
            gridTemplateColumns: "2fr 1fr",
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
          }}>
          <section style={{textAlign: "left"}}>
            <h2 className="card-title">{subscription.title}</h2>
            <h4 className="card-text">{subscription.description}</h4>
          </section>
          <div className="icon">{icon}</div>
        </div>
      </div>
      <hr />
      <div
        className="d-flex mb-2 px-1 text-end"
        style={{
          width: "100%",
          justifyContent: `${subscription.justifyContent}`,
        }}>
        {subscription.state === null && (
          <Button btnClass={"btn btn-light me-1 shadow"} text={"Cancel"} />
        )}
        {subscription.state === "subscribe" ? null : (
          <Button
            btnClass={"btn btn-danger me-1 shadow"}
            text={"Subscribe"}
            onClick={handleSubscribe}
          />
        )}
        {subscription.state === "subscribe" ? (
          <Button
            btnClass={"btn btn-danger w-100 shadow"}
            text={"Unsubscribe"}
            onClick={handleUnSubscribe}
          />
        ) : null}
      </div>
    </div>
  );
};

export default DialogBox;
