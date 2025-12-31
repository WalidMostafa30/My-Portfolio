import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";

const overlayVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 150,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
  exit: {
    scale: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const iconVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: -30, opacity: 0 },
};

const textVariants = {
  hidden: { x: 30, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 30, opacity: 0 },
};

const SideBar = ({ navLinks, open, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    onClose();
    setTimeout(() => {
      navigate(path);
    }, 600);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.aside
          className="fixed h-svh inset-0 z-9999 overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {/* Overlay circle */}
          <motion.div
            className="absolute top-2 right-4 w-8 h-8 rounded-full bg-primary"
            variants={overlayVariants}
          />

          {/* Close button */}
          <Button
            variant="outline"
            size="icon"
            className="rounded-full cursor-pointer absolute top-2 right-4 z-20"
            onClick={onClose}
          >
            <X />
          </Button>

          {/* Nav links */}
          <div className="relative z-10 w-full h-full flex flex-col items-center justify-center gap-2">
            <motion.nav variants={containerVariants} className="space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <motion.div
                    key={link.id}
                    variants={itemVariants}
                    className={`sideBarLink ${isActive ? "active" : ""}`}
                    onClick={() => handleLinkClick(link.path)}
                  >
                    <motion.span variants={iconVariants}>
                      {link.icon}
                    </motion.span>
                    <motion.p variants={textVariants}>{link.name}</motion.p>
                  </motion.div>
                );
              })}
            </motion.nav>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
