import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Banner from "../Banner/Banner";
import Tickets from "../Tickets/Tickets";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Banner />
      <Tickets />
      <Footer />
    </div>
  );
}
