import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
    category: "work", // Default category
  });

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => ({
        ...prev,
        tags: filterTags,
      }));
    } else {
      setTaskData((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, taskData]);
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
      category: "work", // Reset category
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="Enter your task"
          onChange={handleChange}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JavaScript"
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
            />
            <Tag
              tagName="React"
              selectTag={selectTag}
              selected={checkTag("React")}
            />
            <Tag
              tagName="Nodejs"
              selectTag={selectTag}
              selected={checkTag("Nodejs")}
            />
            <Tag
              tagName="MongoDB"
              selectTag={selectTag}
              selected={checkTag("MongoDB")}
            />
            <Tag
              tagName="Bootstrap"
              selectTag={selectTag}
              selected={checkTag("Bootstrap")}
            />
            <Tag
              tagName="Work"
              selectTag={selectTag}
              selected={checkTag("Work")}
            />
            <Tag
              tagName="Home"
              selectTag={selectTag}
              selected={checkTag("Home")}
            />
            <Tag
              tagName="Sport"
              selectTag={selectTag}
              selected={checkTag("Sport")}
            />
            <Tag
              tagName="Study"
              selectTag={selectTag}
              selected={checkTag("Study")}
            />
          </div>

          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button type="submit" className="task_submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
