import { Link } from "react-router";
import {
  Mail,
  Linkedin,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

const ContactInfoSection = () => {
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
    <div className="flex flex-col gap-4">
      {contactInfoList.map((info) => (
        <Link
          to={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cardBG flex items-center gap-2 rounded-lg py-2 px-4"
          key={info.id}
        >
          <span className="w-10 aspect-square flex items-center justify-center rounded-full bg-primary text-white">
            {info.icon}
          </span>

          <div className="flex-1 flex flex-col">
            <h4 className="font-bold">{info.head}</h4>
            <p className="text-sm text-wrap break-all">{info.info}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ContactInfoSection;
