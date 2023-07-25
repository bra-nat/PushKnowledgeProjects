import Button from "../components/button/button.component";
import { NewTaskStyle } from "./task.tracker.styles";
import { RiDeleteBin6Fill } from "react-icons/ri";
const NewTask = ({ type, date, onDelete, onTaskClick }) => {
  return (
    <NewTaskStyle onClick={ onTaskClick }>
      <div>
        <h3>{type}</h3>
        <small className="text-danger">{date}</small>
      </div>
      <Button
        btnClass={"btn btn-primary"}
        text={""}
        icon={<RiDeleteBin6Fill className="fs-4" style={{userSelect: "none", pointerEvents: "none"}}/>}
        onClick={onDelete}
      />
    </NewTaskStyle>
  );
};

export default NewTask;
