import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Phrase, Char } from "animatedtxt";
import { MenuOutlined } from "@material-ui/icons";
import MenuResponsiv from "./MenuResponsiv";

const NavBar = () => {
  // change nav background on scroll change
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 20) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  console.log(color);

  window.addEventListener("scroll", changeColor);
  // settings mobile nav
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };

  return (
    <div
      className={
        color
          ? "bg-black/10 backdrop-blur-sm fixed w-full z-50 lg:h-50"
          : "bg-transparent fixed w-full z-50 lg:bg-transparent"
      }
    >
      <nav className="font-title flex justify-between text-main-2 pt-[2%] pb-[2%] sm:justify-around ">
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
          <div className="xs:hidden absolute top-6">
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
        <ul className="w-4/6 space-x-4 flex justify-around lg:hidden">
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
        <div className="absolute right-6 xs:hidden top-6 scale-x-100">
          <MenuOutlined
            onClick={showMenu}
            className="scale-150 cursor-pointer "
          />
        </div>
        <MenuResponsiv showMenu={showMenu} active={active} />
      </nav>
    </div>
  );
};

export default NavBar;
