import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskAction from "../Task Manger/action/TaskAction";

function TaskManager() {
  const [inputVal, setInputVal] = useState("");

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.initialVal || []); // prevent undefined

  const handleAdd = () => {
    if (inputVal.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: inputVal,
    };

    dispatch(TaskAction(newTask));
    setInputVal("");
  };

  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="text-primary">Task Manager</h1>
        <h4 className="text-muted">Organize your daily tasks</h4>
      </div>

      <div className="d-flex justify-content-center my-3 gap-2">
        <input
          className="form-control w-50"
          type="text"
          placeholder="Enter Task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={handleAdd} className="btn btn-primary px-5">
          Add
        </button>
      </div>

      <div className="d-flex justify-content-center gap-3 mb-4">
        <button className="btn btn-outline-primary px-4">All</button>
        <button className="btn btn-outline-success px-4">Completed</button>
        <button className="btn btn-outline-secondary px-4">Pending</button>
      </div>

      <hr />

      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          {tasks.length === 0 ? (
            <p className="text-center text-secondary fw-bold fs-4">
              No Tasks Assigned!
            </p>
          ) : (
            <ul className="list-group">
              {tasks.map((task) => (
                <li
                  key={task.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div>{task.title}</div>
                  <div className="d-flex gap-2">
                    <button className="btn btn-sm btn-outline-success">
                      Edit
                    </button>
                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TaskManager;
