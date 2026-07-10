import { contactInfoList } from "@/assets/data";
import ProfileImg from "@/assets/Images/home-img.png";
import { FileText } from "lucide-react";
import CV from "@/assets/CV/Walid-Frontend Developer.pdf";
import { motion } from "framer-motion";

const Home = () => {
  // تفكيك الكلمات إلى مصفوفات من الحروف
  const firstName = "Walid".split("");
  const lastName = "Mostafa".split("");
  const frontendText = "Frontend".split("");
  const developerText = "Developer".split("");

  // إعدادات أنيميشن الحروف (الـ Spring الانسيابي)
  const letterVariants = {
    initial: { y: "110%", opacity: 0 },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 90,
        mass: 0.4,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 4, // يتكرر كل 4 ثوانٍ
      },
    },
  };

  // تتابع ظهور الحروف (Stagger)
  const containerVariants = {
    animate: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  return (
    <section className="pageContainer h-dvh max-h-[1000px] pb-0 flex flex-col justify-end items-center overflow-hidden">
      {/* 1. أنيميشن الاسم (Walid Mostafa) */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/7 lg:top-1/4 start-4 select-none"
      >
        <p className="text-lg lg:text-xl font-bold text-primary mb-1">
          Hello, I'm
        </p>
        <h2 className="text-5xl font-bold uppercase leading-none">
          Walid <br />
          Mostafa
        </h2>
      </motion.div>

      {/* 2. أنيميشن الوظيفة (Frontend Developer) */}
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="absolute z-10 bottom-12 top-auto lg:bottom-auto lg:top-1/4 end-1/2 lg:end-4 translate-x-1/2 lg:translate-x-0 select-none"
      >
        <p className="text-lg lg:text-xl font-bold text-primary">Creative</p>

        <div
          className="absolute bottom-1/5 w-full h-1 z-10"
          style={{
            boxShadow: "0px -12px 11px 8px var(--background)",
          }}
        ></div>

        {/* كلمة Frontend */}
        <h2 className="text-5xl font-bold text-primary uppercase flex overflow-hidden leading-none">
          {frontendText.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h2>

        {/* كلمة Developer مع الحفاظ على الـ Shadow الخاص بك */}
        <h2 className="text-5xl font-bold -mt-4 relative z-10 uppercase leading-none flex overflow-hidden">
          {developerText.map((char, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </h2>
      </motion.div>

      {/* باقي العناصر كما هي بدون تغيير */}
      <div className="absolute z-10 top-1/2 -translate-y-1/2 start-4 lg:bottom-22 lg:top-auto lg:translate-y-0 flex flex-col gap-4">
        {contactInfoList.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors flex items-center gap-2 relative"
          >
            <info.icon />
            {info.icon2 && (
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <info.icon2 size={12} />
              </span>
            )}
          </a>
        ))}
      </div>

      <a
        href={CV}
        download
        rel="noopener noreferrer"
        className="absolute z-10 top-1/2 -translate-y-1/2 -end-6 -rotate-90 lg:bottom-18 lg:top-auto lg:translate-x-0 lg:rotate-0 lg:end-4
        flex items-center gap-1 font-bold text-lg lg:text-xl uppercase hover:text-primary transition-colors"
      >
        Resume
        <FileText size={16} />
      </a>

      <div className="w-full lg:w-2/3 h-3/5 lg:h-4/5 relative">
        <motion.img
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
          src={ProfileImg}
          alt="Walid Mostafa"
          className="w-full h-full object-contain object-bottom"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration:1, ease: "easeOut", delay: 0.4 }}
          className="blur_circle h-[55%] md:h-[60%] lg:h-[80%] bottom-10 lg:-bottom-10 left-1/2 -translate-x-1/2"
        />
      </div>

      <div
        className="h-26 lg:h-16 w-full bg-background relative"
        style={{
          boxShadow: "0px -39px 35px 15px var(--background)",
        }}
      />
    </section>
  );
};

export default Home;
