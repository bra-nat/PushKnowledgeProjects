import { useState } from "react";
import Title from "../components/title/title.component";
import Task from "./task.component";
import { TableStyle } from "./task.tracker.styles";
import NewTask from "./new-task";

const TaskTracker = () => {
  const [newTask, setNewTask] = useState({
    date: "",
    type: "",
    completed: "",
  });

  const handleChangeDate = (e) => {
    setNewTask({ ...newTask, date: e.target.value });
  };
  const handleChangeType = (e) => {
    setNewTask({ ...newTask, type: e.target.value });
  };

  let tasks = [
    {
      date: "",
      type: "",
    },
  ];

  const [taskList, setTaskList] = useState(tasks);

  const addNewTask = () => {
    setTaskList([...taskList, { date: newTask.date, type: newTask.type }])
  }

  const handleCompleted = (e) => {
    e.target.classList.toggle("completed");
  }

  const handleDeleteTask = (e) => {
    window.confirm("Delete this Task?") && e.target.parentElement.remove();
  }

  return (
    <>
      <Title text={"Task Tracker"} />
      <TableStyle>
        <ul className="table-head">
          <li>Date</li>
          <li>Task</li>
        </ul>
        <Task
          date={newTask.date}
          type={newTask.type}
          setDate={handleChangeDate}
          setType={handleChangeType}
          onClick={addNewTask}
        />
        <ul className="table-row">
          {taskList.map((taskItem, index) => {
            return taskItem.date !== "" && taskList.type !== "" ? (
              <NewTask key={index} onDelete={handleDeleteTask} onTaskClick={handleCompleted} date={taskItem.date} type={taskItem.type}/>
            ) : null;
          })}
        </ul>
      </TableStyle>
    </>
  );
};

export default TaskTracker;
