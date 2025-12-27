import { NavLink } from "react-router";

const NavBar = ({ navLinks }) => {
  return (
    <nav className="hidden sm:flex items-center gap-2 p-1 border border-border rounded-full backdrop-blur-3xl bg-background/30">
      {navLinks.map((link) => (
        <NavLink key={link.id} to={link.path} className="navLink">
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
};

export default NavBar;
