const NavBar = () => {
  return (
    <nav className="fixed z-10 w-full h-10">
      <ul className="flex flex-row justify-around p-5 m-0 text-xl list-none cursor-pointer bg-slate-600 text-slate-200">
        <li className=" hover:text-slate-800">Dinothèque</li>
        <li className=" hover:text-slate-800">Combat de dinos</li>
        <li className=" hover:text-slate-800">Boutique</li>
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
