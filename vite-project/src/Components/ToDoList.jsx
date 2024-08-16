import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, toggleCompleted, deleteToDo } from "../TodoSlice";
import { TiPencil } from "react-icons/ti";
import { BsTrash } from "react-icons/bs";

const ToDoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todo.todoList);
  const [currentToDo, setCurrentToDo] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleAddToDo = () => {
    if (newTask.trim() !== "") {
      if (currentToDo) {
        dispatch(updateTodo({ id: currentToDo.id, task: newTask }));
        setCurrentToDo(null);
      } else {
        dispatch(addTodo({ task: newTask, id: Date.now() }));
      }
      setNewTask("");
    }
  };

  const handleUpdate = (todo) => {
    setCurrentToDo(todo);
    setNewTask(todo.task);
  };

  const handleToggleComplete = (id) => {
    dispatch(toggleCompleted({ id }));
  };

  const handleDeleteToDo = (id) => {
    dispatch(deleteToDo({ id }));
  };

  const handleCancel = () => {
    setCurrentToDo(null);
    setNewTask("");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="flex justify-between mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder={currentToDo ? "Update your tasks" : "Enter your task"}
          className="flex-grow mr-2 p-2 border rounded"
        />
        {currentToDo ? (
          <>
            <button
              onClick={handleAddToDo}
              className="bg-green-500 text-white px-4 py-2 rounded mr-2"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleAddToDo}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        )}
      </div>
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between mb-2 p-2 border rounded"
          >
            <span className={todo.completed ? "line-through" : ""}>
              {todo.task}
            </span>
            <div>
              <button
                onClick={() => handleToggleComplete(todo.id)}
                className="mr-2 text-green-500"
              >
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button
                onClick={() => handleUpdate(todo)}
                className="mr-2 text-blue-500"
              >
                <TiPencil />
              </button>
              <button
                onClick={() => handleDeleteToDo(todo.id)}
                className="text-red-500"
              >
                <BsTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
