import React, { useState } from "react";

const Form = () => {
  const [task, setTask] = useState("");
  return (
    <form>
      <button>+</button>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />
    </form>
  );
};

export default Form;
