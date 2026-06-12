import { contactInfoList } from "@/assets/data";
import { Link } from "react-router";

const ContactInfoSection = () => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Contact Information</h3>

      <div className="flex flex-col gap-4">
        {contactInfoList.map((info) => (
          <Link
            to={info.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cardBG flex items-center gap-2 rounded-lg group"
            key={info.id}
          >
            <span
              className="w-10 aspect-square flex items-center justify-center rounded-full bg-primary text-white relative
              group-hover:rotate-10 group-hover:scale-110 transition-all duration-300"
            >
              <info.icon />

              {info.icon2 && (
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <info.icon2 size={12} />
                </span>
              )}
            </span>

            <div className="flex-1 flex flex-col">
              <h4 className="font-bold">{info.head}</h4>
              <p className="text-sm text-wrap break-all">{info.info}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactInfoSection;
