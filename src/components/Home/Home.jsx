import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Tickets from "../Tickets/Tickets";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Tickets />
      <Footer />
    </div>
  );
}
