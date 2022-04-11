const NavBar = () => {
  return (
    <nav className="font-title flex justify-between bg-none">
      <p className="flex text-2xl ml-7">Xpanse</p>
      <ul className="mr-10 space-x-4 text-black flex justify-around bg-none">
        <li className="pr-20 hover:underline decoration-solid decoration-primary-1">
          FREELANCE
        </li>
        <li className="pr-20 hover:underline decoration-solid decoration-primary-1">
          RECRUITER
        </li>
        <li className="pr-20 hover:underline decoration-solid decoration-primary-1">
          GOLDEN TICKET
        </li>
        <li className=" hover:underline decoration-solid decoration-primary-1">
          ABOUT US
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

// HOW TO PROPTYPES LES BEEE GEES

// ------------------------

// import PropTypes from "prop-types";

// component-name.propTypes = {
//   props1-name: PropTypes.arrayOf([
//     PropTypes.shape({
//       proprité1: PropTypes.string,
//       propriété2: PropTypes.string,
//     }),
//   ]).isRequired,
// };

// export default component-name;
