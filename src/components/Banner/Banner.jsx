import React from "react";
import bannerImg1 from "../../assets/vector1.png";

export default function Banner({ selectedTickets, resolved }) {
  return (
    <>
      <div className="grid md:grid-cols-2 gap-2 m-2">
        {/* In-Progress */}
        <div className="relative w-full h-50 md:h-60 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center text-white text-center bg-linear-to-r from-[#632ee3e6] to-[#9f62f2e6]">
          <div
            className="absolute inset-y-0 left-0 w-1/2 z-10"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className="absolute inset-y-0 right-0 w-1/2 z-10"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
            }}
          ></div>
          <div>
            <p className="text-2xl">In-Progress</p>
            <p className="text-5xl font-semibold mt-2">
              {selectedTickets.length}
            </p>
          </div>
        </div>

        {/* Resolved */}
        <div className="relative w-full h-60 rounded-xl overflow-hidden shadow-lg flex flex-col items-center justify-center text-white text-center bg-linear-to-r from-[#54CF68] to-[#00827A]">
          <div
            className="absolute inset-y-0 left-0 w-1/2 z-10"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div
            className="absolute inset-y-0 right-0 w-1/2 z-10"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              transform: "scaleX(-1)",
            }}
          ></div>
          <div>
            <p className="text-2xl">Resolved</p>
            <p className="text-5xl font-semibold mt-2">{resolved.length}</p>
          </div>
        </div>
      </div>
    </>
  );
}
