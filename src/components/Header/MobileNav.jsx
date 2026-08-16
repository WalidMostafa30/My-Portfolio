import { Link, useLocation } from "react-router";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { navLinks } from "@/assets/data";

const MobileNav = () => {
  const location = useLocation();

  return (
    <footer className="lg:hidden sticky bottom-0 left-0 w-full z-40 bg-background px-4 py-2">
      <nav className="relative flex items-center justify-around max-w-md mx-auto h-10">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = location.pathname === link.path;

          return (
            <Link
              key={link.id}
              to={link.path}
              className="relative flex flex-col items-center justify-center w-14 h-full z-10 transition-colors"
            >
              {/* الدائرة المتحركة الديناميكية التي تنتقل بين اللينكات */}
              {isActive && (
                <motion.div
                  layoutId="activeBubble"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                  className="absolute -top-6 w-12 h-12 bg-linear-to-tl from-white/50 via-primary to-primary rounded-full
                  border-4 border-background shadow-md shadow-primary/30 -z-10"
                />
              )}

              {/* الأيقونة التي ترتفع لأعلى داخل الدائرة عند الـ Active */}
              <motion.div
                animate={{
                  y: isActive ? -21 : 0,
                  scale: isActive ? 1.15 : 1,
                  color: isActive ? "#ffffff" : "#94a3b8",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex items-center justify-center"
              >
                <Icon className="w-6 h-6" />
              </motion.div>

              {/* اسم اللينك الذي يظهر تحت الأيقونة عند الـ Active فقط */}
              <motion.span
                initial={false}
                animate={{
                  opacity: isActive ? 1 : 0,
                  y: isActive ? 14 : 20,
                  scale: isActive ? 1 : 0.8,
                }}
                transition={{ duration: 0.2 }}
                className="absolute text-sm font-semibold text-primary tracking-wide select-none"
              >
                {link.name}
              </motion.span>
            </Link>
          );
        })}
      </nav>
    </footer>
  );
};

export default MobileNav;
