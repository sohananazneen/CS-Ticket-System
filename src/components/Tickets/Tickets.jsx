import React from "react";
import TicketsCard from "../TicketsCard/TicketsCard";

export default function Tickets() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {/* cards */}
        <div className="md:col-span-2">
          <h1 className="text-xl font-bold">Customer Tickets</h1>
          <TicketsCard />
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
