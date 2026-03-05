import React, { Suspense, useState } from "react";
import TicketsCard from "../TicketsCard/TicketsCard";
import Banner from "../Banner/Banner";
import Task from "../Task/Task";

const fetchTickets = async () => {
  const res = await fetch("/ticketsData.json");
  return res.json();
};
const TdataPromise = fetchTickets();

export default function Tickets() {
  const [selectedTickets, setSelectedTickets] = useState([]);
  // console.log(selectedTickets);
  const [resolved, setResolved] = useState([]);

  const removeTicket = (t) => {
    // console.log(t)
    const filteredData = selectedTickets.filter((tck) => tck.id !== t.id);
    // console.log(filteredData);
    setSelectedTickets(filteredData);

    setResolved([...resolved, t]);
  };
  return (
    <>
      <Banner selectedTickets={selectedTickets} resolved={resolved}/>
      {/* Customer Tickets */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-8 mr-2">
        {/* cards */}
        <div className="md:col-span-3">
          <Suspense
            fallback={
              <span className="loading loading-spinner text-primary"></span>
            }
          >
            <TicketsCard
              TdataPromise={TdataPromise}
              selectedTickets={selectedTickets}
              setSelectedTickets={setSelectedTickets}
            />
          </Suspense>
        </div>

        {/* tasks  */}
        <div className="md:col-span-1 m-4">
          <Suspense
            fallback={
              <span className="loading loading-spinner text-primary"></span>
            }
          >
            <Task
              selectedTickets={selectedTickets}
              removeTicket={removeTicket}
              resolved={resolved}
            />
          </Suspense>
        </div>
      </div>
    </>
  );
}
