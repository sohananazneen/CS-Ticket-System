import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
        <nav>
          <p>CS — Ticket System</p>
          <p class="w-75">
            Our CS Ticket System provides a seamless bridge between your needs
            and our solutions. We are dedicated to providing timely, transparent
            support to ensure your business never misses a beat. Experience
            efficient issue resolution powered by our commitment to excellence.
          </p>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Our Mission</a>
          <a className="link link-hover">Contact Sales</a>
        </nav>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product & Services</a>
          <a className="link link-hover">Customer Stories</a>
          <a className="link link-hover">Download Apps</a>
        </nav>
        <nav>
          <h6 className="footer-title">Information</h6>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Join Us</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social Links</h6>

          <a className="link link-hover flex items-center gap-2 mt-2">
            <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-5 h-5">
              <FaXTwitter size={16} />
            </div>

            <span className="font-medium">@CS-Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2 mt-2">
            <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-5 h-5">
              <FaLinkedinIn size={16} />
            </div>

            <span className="font-medium">@CS-Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2 mt-2">
            <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-5 h-5">
              <FaFacebookF size={16} />
            </div>

            <span className="font-medium">@CS-Ticket System</span>
          </a>
          <a className="link link-hover flex items-center gap-2 mt-2">
            <div className="bg-white text-black p-1 rounded-full flex items-center justify-center w-5 h-5">
              <IoIosMail size={16} />
            </div>

            <span className="font-medium">@CS-Ticket System</span>
          </a>
        </nav>
      </footer>
      <footer className="footer bg-neutral text-neutral-content border-t border-white/10 px-10 py-4 justify-center">
        <p>© 2025 CS — Ticket System, All rights reserved.</p>
      </footer>
    </>
  );
}
