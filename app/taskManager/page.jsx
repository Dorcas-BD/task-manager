"use client";

import React, { useState } from "react";
import TaskList from "../components/taskManager/TaskList";
import { userAuth } from "../components/context/AuthContext";

const page = () => {
  const [taskFormVisible, setTaskFormVisible] = useState(false);
  const { user } = userAuth();
  return (
    <div>
      <h1>Manage Your Tasks</h1>
      {user ? (
        <TaskList
          taskFormVisible={taskFormVisible}
          setTaskFormVisible={setTaskFormVisible}
        />
      ) : (
        <p>Please sign in to manage your tasks</p>
      )}
    </div>
  );
};

export default page;
