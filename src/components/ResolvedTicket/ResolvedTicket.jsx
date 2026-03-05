import React from "react";

const ResolvedTicket = ({ rTicket }) => {
  return (
    <>
      <div className="card bg-slate-100 shadow-xl mt-4">
        <div className="card-body">
          <div className="card-title flex justify-between">
            <h1>{rTicket.title}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResolvedTicket;
