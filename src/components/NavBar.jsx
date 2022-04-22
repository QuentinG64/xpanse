import React from "react";
import { Link } from "react-router-dom";
import { Phrase, Char } from "animatedtxt";

const NavBar = () => {
  return (
    <div className="fixed w-full z-50">
      <nav className="font-title flex justify-between bg-transparent text-main-2 pt-6">
        <p className="w-1/6  flex justify-around">
          <Link to="/">
            <Phrase margin={15} size={20} color="white">
              <Char char="X" delay={0} />
              <Char char="P" delay={0.9} />
              <Char char="A" delay={0.6} />
              <Char char="N" delay={0.8} />
              <Char char="S" delay={0.8} />
              <Char char="E" delay={1} />
            </Phrase>{" "}
          </Link>
        </p>
        <ul className="w-4/6 space-x-4 flex justify-around bg-transparent">
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/freelance">FREELANCE</Link>
          </li>
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/recruiterpage">RECRUITER</Link>
          </li>
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/goldenticket">GOLDEN TICKET</Link>
          </li>
          <li className="hover:underline decoration-solid decoration-primary-1">
            <Link to="/aboutus">ABOUT US</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
