import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation, useNavigate } from "react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

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
  const closeBtnRef = useRef(null);
  const [circlePos, setCirclePos] = useState({ top: 0, left: 0 });

  useLayoutEffect(() => {
    if (open && closeBtnRef.current) {
      const rect = closeBtnRef.current.getBoundingClientRect();

      setCirclePos({
        top: rect.top + rect.height / 2,
        left: rect.left + rect.width / 2,
      });
    }
  }, [open]);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

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
            className="absolute rounded-full bg-primary"
            style={{
              width: 32,
              height: 32,
              top: circlePos.top - 16,
              left: circlePos.left - 16,
            }}
            variants={overlayVariants}
          />

          {/* Close button */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full z-20 container flex justify-end py-2">
            <Button
              ref={closeBtnRef}
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer"
              onClick={onClose}
            >
              <X />
            </Button>
          </div>

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
