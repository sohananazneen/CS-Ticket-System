import React from "react";
import TaskCard from "../TaskCard/TaskCard";
import ResolvedTicket from "../ResolvedTicket/ResolvedTicket";

export default function Task({ selectedTickets, removeTicket, resolved }) {
  //   console.log(selectedTickets);
  return (
    <>
      <div className="mb-2">
        <h1 className="text-2xl">Task Status</h1>
        {selectedTickets.length === 0 ? (
          <p>Select a ticket to add to Task Status</p>
        ) : (
          <>
            {selectedTickets.map((selectedTicket) => (
              <TaskCard
                key={selectedTicket.id}
                selectedTicket={selectedTicket}
                removeTicket={removeTicket}
              ></TaskCard>
            ))}
          </>
        )}
      </div>
      <div className="mt-4">
        <h1 className="text-2xl">Resolved Task</h1>
        {resolved.length === 0 ? (
          <p>No resolved tasks yet.</p>
        ) : (
          <>
            {resolved.map((rTicket) => (
              <ResolvedTicket
                key={rTicket.id}
                rTicket={rTicket}
                removeTicket={removeTicket}
              ></ResolvedTicket>
            ))}
          </>
        )}
      </div>
    </>
  );
}
