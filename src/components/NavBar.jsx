const NavBar = () => {
  return (
    <nav className="pt-4 font-title flex justify-between bg-transparent h-8">
      <p className="text-2xl ml-7 text-main-2">Xpanse</p>
      <ul className="mr-10 space-x-4 text-main-2 flex justify-around">
        <li className="pr-20 hover:underline decoration-primary-1">
          FREELANCE
        </li>
        <li className="pr-20 hover:underline decoration-primary-1">
          RECRUITER
        </li>
        <li className="pr-20 hover:underline decoration-primary-1">
          GOLDEN TICKET
        </li>
        <li className="hover:underline decoration-primary-1">
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
