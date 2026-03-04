import React, { use } from "react";
import { FaCircle } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

export default function TicketsCard({ TdataPromise }) {
  const ticketsData = use(TdataPromise);
  //   console.log(ticketsData);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-2">
        {ticketsData.map((ticket) => (
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title flex justify-between">
                {ticket.title}
                <div className="badge badge-success text-green-800 p-2 rounded-2xl">
                  <FaCircle />
                  {ticket.status}
                </div>
              </h2>
              <p>{ticket.description}</p>
              <div className="flex justify-between">
                <div className="flex justify-between">
                  <div className="pr-2">#{ticket.id}</div>
                  <div className="text-red-500 uppercase font-semibold">
                    {ticket.priority}
                  </div>
                </div>
                <div className="flex justify-between">
                  <div className="pr-2">{ticket.customer}</div>
                  <div className="flex justify-between items-center">
                    <MdOutlineDateRange />
                    <span className="pl-1">{ticket.createdAt}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
