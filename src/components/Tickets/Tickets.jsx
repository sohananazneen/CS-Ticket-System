import React, { Suspense } from "react";
import TicketsCard from "../TicketsCard/TicketsCard";

const fetchTickets = async () => {
  const res = await fetch("/ticketsData.json");
  return res.json();
};

export default function Tickets() {
  const TdataPromise = fetchTickets();
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-8 mr-2">
        {/* cards */}
        <div className="md:col-span-3">
          <h1 className="text-xl font-bold">Customer Tickets</h1>
          <Suspense
            fallback={
              <span className="loading loading-spinner text-primary"></span>
            }
          >
            <TicketsCard TdataPromise={TdataPromise} />
          </Suspense>
        </div>
        {/* tasks  */}
        <div className="md:col-span-1 bg-green-500">
          <h1>Task Status</h1>
          <h1>Resolved Task</h1>
        </div>
      </div>
    </>
  );
}
