import { contactInfoList } from "@/assets/data";
import ProfileImg from "../../assets/Images/man.png";
import { FileText } from "lucide-react";

const Home = () => {
  return (
    <section className="pageContainer h-dvh max-h-[1000px] pb-0 flex flex-col justify-end items-center overflow-hidden">
      <div className="absolute top-1/7 lg:top-1/4 start-4">
        <p className="text-lg lg:text-xl font-bold text-primary">Hello, I'm</p>
        <h2 className="text-5xl font-bold uppercase">
          Walid <br /> Mostafa
        </h2>
      </div>

      <div className="absolute z-10 bottom-12 top-auto lg:bottom-auto lg:top-1/4 end-1/2 lg:end-4 translate-x-1/2 lg:translate-x-0">
        <p className="text-lg lg:text-xl font-bold text-primary">Creative</p>
        <h2 className="text-5xl font-bold text-primary uppercase">Frontend</h2>
        <h2
          style={{
            boxShadow: "0px -12px 11px 8px var(--background)",
          }}
          className="text-5xl font-bold mt-1 relative z-10 uppercase leading-0"
        >
          Developer
        </h2>
      </div>

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
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-10 top-1/2 -translate-y-1/2 -end-6 -rotate-90 lg:bottom-18 lg:top-auto lg:translate-x-0 lg:rotate-0 lg:end-4
        flex items-center gap-1 font-bold text-lg lg:text-xl uppercase hover:text-primary transition-colors"
      >
        Resume
        <FileText size={16} />
      </a>

      <div className="w-full lg:w-2/3 h-3/5 lg:h-4/5 relative">
        <img
          src={ProfileImg}
          alt="Walid Mostafa"
          className="w-full h-full object-contain object-bottom"
        />

        <div className="blur_circle w-[80%] md:w-[50%] lg:w-[60%] bottom-10 lg:-bottom-10 left-1/2 -translate-x-1/2" />
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
