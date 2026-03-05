import React from "react";
import { toast } from "react-toastify";

const TaskCard = ({ selectedTicket }) => {
  const handleComplete = () => {
    toast("Completed");
  };
  return (
    <>
      <div className="card bg-base-100 shadow-xl mt-4">
        <div className="card-body">
          <div className="card-title flex justify-between">
            <h1>{selectedTicket.title}</h1>
          </div>
          <button
            onClick={() => handleComplete()}
            className="btn btn-success btn-block"
          >
            Complete
          </button>
        </div>
      </div>
    </>
  );
};

export default TaskCard;
