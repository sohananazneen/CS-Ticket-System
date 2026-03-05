import React, { use } from "react";

import SingleTicketCard from "../SingleTicketCard/SingleTicketCard";

export default function TicketsCard({
  TdataPromise,
  setCount,
  count,
  selectedTickets,
  setSelectedTickets,
}) {
  const ticketsData = use(TdataPromise);
  //   console.log(ticketsData);

  return (
    <>
      <h1 className="text-xl font-bold">Customer Tickets</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {ticketsData.map((ticket) => (
          <SingleTicketCard
            ticket={ticket}
            setCount={setCount}
            count={count}
            selectedTickets={selectedTickets}
            setSelectedTickets={setSelectedTickets}
          ></SingleTicketCard>
        ))}
      </div>
    </>
  );
}
