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
