
import Alert from "../components/alert/alert.component";

const AlertApp = () => {

  return (
    <div className="alert-app-container">
      <Alert type={"alert-green"} message={"Successful login"} />
      <Alert type={"alert-yellow"} delay={true} message={"Failed login"} />
    </div>
  );
};

export default AlertApp;
