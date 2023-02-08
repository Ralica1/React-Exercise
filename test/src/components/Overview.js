import React from "react";

const Overview = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <div key={task.id}>
          <p>{`Task ${index + 1}: ${task.text}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Overview;