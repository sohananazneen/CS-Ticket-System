import React from "react";

const TaskCard = ({ selectedTicket }) => {
  return (
    <>
      <div className="card bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <div className="card-title flex justify-between">
            <h1>{selectedTicket.title}</h1>
          </div>
          <button className="btn btn-success btn-block">Complete</button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
