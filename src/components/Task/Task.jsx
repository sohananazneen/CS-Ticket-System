import React from "react";
import TaskCard from "../TaskCard/TaskCard";

export default function Task({ selectedTickets }) {
  //   console.log(selectedTickets);
  return (
    <>
      <div className="mb-2">
        <h1 className="text-2xl">Task Status</h1>
        <p>Select a ticket to add to Task Status</p>
        {selectedTickets.map((selectedTicket) => (
          <TaskCard selectedTicket={selectedTicket}></TaskCard>
        ))}
      </div>
      <div className="mt-4">
        <h1 className="text-2xl">Resolved Task</h1>
        <p>No resolved tasks yet.</p>
      </div>
    </>
  );
}
