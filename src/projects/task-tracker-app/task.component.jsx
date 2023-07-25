import Button from "../components/button/button.component"

const Task = ({ data, setDate, type, setType, onClick }) => {
  return (
    <div
      className={"d-flex mb-4 justify-content-between"}
      style={{ borderBottom: "1px solid #666" }}>
      
      <input type="datetime-local" value={data} onChange={setDate} />
      <input className="w-50 border-0 outline-0" type="text" value={type} onChange={setType} placeholder="Specify the task" />
      <Button text={"+ Add"} btnClass={"btn btn-success"} onClick={onClick}/>
    </div>
  );
};

export default Task;
