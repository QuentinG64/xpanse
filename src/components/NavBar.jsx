import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phrase, Char } from "animatedtxt";
import { MenuOutlined } from "@material-ui/icons";
import MenuResponsiv from "./MenuResponsiv";

const NavBar = () => {
  // --> change nav background on scroll <---
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
    color && setColor(false);
  };

  return (
    <div>
      <div
        className={
          color
            ? "bg-black/10 backdrop-blur-sm fixed flex justify-around items-center w-full z-30 h-[10%]"
            : "bg-transparent fixed flex justify-around items-center w-full z-30 h-[10%] lg:bg-transparent"
        }
      >
        <nav className="font-title flex justify-between bg-transparent items-center text-main-2 sm:justify-around w-full">
          <p className="w-1/5 flex justify-around lg:hidden">
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
          <div className="hidden lg:w-screen lg:flex lg:flex-col lg:items-center lg:h-[15%]">
            <div className={active ? "hidden" : "xs:hidden absolute top-6"}>
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
            </div>
          </div>
          <ul className="w-4/6 space-x-4 flex justify-around bg-transparent lg:hidden">
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
      <div className="fixed right-6 xs:hidden top-6 scale-x-100 z-40 text-white">
        <MenuOutlined onClick={showMenu} className="scale-150 cursor-pointer" />
      </div>
      <div className="fixed z-50 text-white">
        <MenuResponsiv showMenu={showMenu} active={active} />
      </div>
    </div>
  );
};

export default NavBar;
