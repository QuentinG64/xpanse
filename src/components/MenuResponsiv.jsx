import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuResponsiv = ({ showMenu, active }) => {
  return (
    <div>
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 left-1/2 bg-black/20 backdrop-blur-sm gap-20 justify-center"
            : "hidden"
        }
      >
        <div className="absolute right-6 xs:hidden top-6 scale-x-100 ">
          <Close onClick={showMenu} className="cursor-pointer scale-x-100" />
        </div>
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
