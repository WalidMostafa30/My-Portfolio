import { navLinks } from "@/assets/data";
import { NavLink, useLocation } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const NavBar = () => {
  const location = useLocation();

  return (
    <nav className="hidden lg:flex items-center gap-1 p-1.5 border border-foreground/30 rounded-full bg-background/30 backdrop-blur-xl shadow-lg relative">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path;

        return (
          <NavLink
            key={link.id}
            to={link.path}
            className={`relative px-4 py-1.5 text-sm font-medium transition-all duration-300 rounded-full select-none ${
              isActive
                ? "text-white font-semibold"
                : "text-foreground/60 hover:text-foreground hover:scale-110"
            }`}
          >
            {/* الخلفية المتحركة خلف اللينك الـ Active */}
            {isActive && (
              <motion.div
                layoutId="activePill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 bg-primary rounded-full -z-10 shadow-md shadow-primary/25"
              />
            )}

            <span className="relative z-10">{link.name}</span>
          </NavLink>
        );
      })}
    </nav>
  );
};

export default NavBar;
