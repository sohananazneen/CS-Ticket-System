import React, { use } from "react";

import SingleTicketCard from "../SingleTicketCard/SingleTicketCard";

export default function TicketsCard({
  TdataPromise,
  selectedTickets,
  setSelectedTickets,
  resolved,
}) {
  const ticketsData = use(TdataPromise);
  //   console.log(ticketsData);
  const availableTickets = ticketsData.filter((ticket) => {
    const isResolved = resolved.find((t) => t.id === ticket.id);
    return !isResolved;
  });
  return (
    <>
      <h1 className="text-xl font-bold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {availableTickets.map((ticket) => (
          <SingleTicketCard
            key={ticket.id}
            ticket={ticket}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          ></SingleTicketCard>
        ))}
      </div>
    </>
  );
}
