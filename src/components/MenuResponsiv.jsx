import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Phrase, Char } from "animatedtxt";

const MenuResponsiv = ({ showMenu, active }) => {
  return (
    <div>
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 full bg-black backdrop-blur-sm gap-20 justify-center"
            : "hidden"
        }
      >
        <div className="absolute right-6 xs:hidden top-6 scale-x-100 ">
          <Close onClick={showMenu} className="cursor-pointer scale-x-100" />
        </div>
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
    </div>
  );
};

MenuResponsiv.propTypes = {
  showMenu: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
export default MenuResponsiv;
