import { motion } from "framer-motion";

const PageTitle = ({ title, subtitle }) => {
  return (
    <hgroup className="text-center mb-8 lg:mb-12">
      {title && (
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.35 }}
          className="text-5xl font-bold text-primary uppercase"
        >
          {title}
        </motion.h1>
      )}
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut", delay: 0.50 }}
          className="font-semibold max-w-xl mx-auto -mt-1 leading-0 relative"
          style={{
            boxShadow: "-1px -1px 12px 9px var(--background)",
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </hgroup>
  );
};

export default PageTitle;
