import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="font-title flex justify-between bg-transparent">
      <p className="flex text-2xl ml-7">Xpanse</p>
      <ul className="mr-10 space-x-4 flex justify-around bg-transparent">
        <li className="pr-20 hover:underline decoration-solid decoration-primary-1">
          <Link to="/Freelance">FREELANCE</Link>
        </li>
        <li className="pr-20 hover:underline decoration-solid decoration-primary-1">
          <Link to="/Recruiter">RECRUITER</Link>
        </li>
        <li className="pr-20 hover:underline decoration-solid decoration-primary-1">
          <Link to="/GoldenTicket">GOLDEN TICKET</Link>
        </li>
        <li className=" hover:underline decoration-solid decoration-primary-1">
          <Link to="/AboutUs">ABOUT US</Link>

        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
