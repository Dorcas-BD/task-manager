"use client";

import React, { useState } from "react";
import TaskList from "../components/taskManager/TaskList";

const page = () => {
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  return (
    <div>
      <h1>Task Manager</h1>
      <TaskList
        taskFormVisible={taskFormVisible}
        setTaskFormVisible={setTaskFormVisible}
      />
    </div>
  );
};

export default page;
