import ProfileImg from "../../assets/Images/man.png";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
  Phone,
  File,
  FileText,
} from "lucide-react";

const Home = () => {
  const contactInfoList = [
    {
      id: 1,
      head: "E-mail",
      info: "walidmoustafa436@gmail.com",
      link: "mailto:walidmoustafa436@gmail.com",
      icon: <Mail />,
    },
    {
      id: 2,
      head: "Whatsapp",
      info: "0106 525 4159",
      link: "https://wa.me/201065254159",
      icon: <MessageCircle />,
    },
    {
      id: 3,
      head: "LinkedIn",
      info: "Walid Mostafa",
      link: "https://www.linkedin.com/in/walid-m0stafa-",
      icon: <Linkedin />,
    },
    {
      id: 4,
      head: "Facebook",
      info: "Walid Mostafa",
      link: "https://www.facebook.com/profile.php?id=100011538554307&mibextid=ZbWKwL",
      icon: <Facebook />,
    },
    {
      id: 5,
      head: "Instagram",
      info: "walid_mostafa30",
      link: "https://www.instagram.com/walid_mostafa30/profilecard/?igsh=MWNnNmZucDE4bjc1MA==",
      icon: <Instagram />,
    },
  ];

  return (
    <section className="pageContainer h-dvh max-h-[1000px]  pb-0 flex flex-col justify-end items-center">
      <div className="absolute top-1/7 md:top-1/3 start-4">
        <p className="text-lg md:text-xl font-bold text-primary">Hello, I'm</p>
        <h2 className="text-5xl font-bold uppercase">
          Walid <br /> Mostafa
        </h2>
      </div>

      <div className="absolute z-10 bottom-12 top-auto md:bottom-auto md:top-1/3 end-1/2 md:end-4 translate-x-1/2 md:translate-x-0">
        <p className="text-lg md:text-xl font-bold text-primary">Creative</p>
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

      <div className="absolute z-10 top-1/2 -translate-y-1/2 start-4 md:bottom-22 md:top-auto md:translate-y-0 flex flex-col gap-4">
        {contactInfoList.map((info) => (
          <a
            key={info.id}
            href={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            {info.icon}
          </a>
        ))}
      </div>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute z-10 top-1/2 -translate-y-1/2 -end-6 -rotate-90 md:bottom-18 md:top-auto md:translate-x-0 md:rotate-0 md:end-4
        flex items-center gap-1 font-bold text-lg md:text-xl uppercase"
      >
        Resume
        <FileText size={16} />
      </a>

      <div className="w-full md:w-2/3 h-3/5 md:h-4/5 relative">
        <img
          src={ProfileImg}
          alt="Walid Mostafa"
          className="w-full h-full object-contain object-bottom"
        />

        <div
          className="absolute -z-10 w-[60%] md:w-[55%] aspect-square bottom-10 left-1/2 -translate-x-1/2 blur-2xl animate-spin animation-duration-[10s]"
          style={{
            borderRadius: "37% 63% 34% 66% / 61% 29% 71% 39%",
            background:
              "radial-gradient(circle,var(--foreground) 0%, var(--primary) 20%)",
          }}
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
