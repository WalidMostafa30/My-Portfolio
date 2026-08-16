import PageTitle from "@/components/common/PageTitle";
import CV from "@/assets/CV/Walid-Frontend Developer.pdf";
import {
  User,
  Cake,
  MapPin,
  GraduationCap,
  FileText,
  DownloadCloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const About = () => {
  const aboutInfo = [
    {
      title: "Name",
      info: "Walid Mostafa Elshazly",
      icon: <User className="w-5 h-5" />,
    },
    {
      title: "Age",
      info: "25 years old",
      icon: <Cake className="w-5 h-5" />,
    },
    {
      title: "Location",
      info: "Egypt, Mansoura",
      icon: <MapPin className="w-5 h-5" />,
    },
  ];

  return (
    <div className="pageContainer">
      {/* عنوان الصفحة الرئيسي */}
      <PageTitle title="About Me" subtitle="Learn more about me" />

      <div className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {aboutInfo.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-5 bg-gray-50/60 dark:bg-neutral-900/50 rounded-xl border border-gray-100 dark:border-neutral-800/80 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xs transition-all duration-200 group"
            >
              <div className="w-11 h-11 rounded-xl text-primary bg-white dark:bg-neutral-800 flex items-center justify-center shadow-xs border border-gray-150 dark:border-neutral-700/50 group-hover:scale-105 transition-transform duration-200">
                {item.icon}
              </div>
              <div>
                <span className="text-xs font-medium text-gray-400 dark:text-gray-500 block uppercase tracking-wider">
                  {item.title}
                </span>
                <span className="text-gray-800 dark:text-gray-200 font-semibold text-sm md:text-base">
                  {item.info}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* كارت الـ Summary الكبير */}
          <div className="lg:col-span-2 bg-white dark:bg-neutral-900 border border-gray-150 dark:border-neutral-800 p-8 rounded-2xl relative overflow-hidden group shadow-xs">
            {/* خط جمالي علوي بلون الهوية */}
            <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-myBlue via-myPurple to-myGreen" />

            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5 text-primary" />
              <h3 className="text-sm font-bold uppercase tracking-widest">
                Professional Summary
              </h3>
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed font-normal">
              Results-driven{" "}
              <span className="text-myPurple font-semibold">
                Frontend Developer
              </span>{" "}
              with 1+ years of professional experience at Techno Masr,
              specializing in building dynamic, responsive, and
              performance-optimized web applications using React.js and Next.js.
              Proficient in TypeScript, Tailwind CSS, and Redux Toolkit.
              Experienced in implementing complex UI features, including 3D web
              elements and comprehensive Right-to-Left (RTL) localization for
              Arabic platforms.
            </p>

            <a
              href={CV}
              download
              rel="noopener noreferrer"
              className="mt-4 inline-block"
            >
              <Button>
                Download Resume
                <DownloadCloud size={16} />
              </Button>
            </a>
          </div>

          {/* كارت التعليم الداكن */}
          <div className="bg-linear-to-br from-neutral-900 to-neutral-950 text-white p-6 rounded-2xl flex flex-col justify-between border border-neutral-800 shadow-lg relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-mono px-2.5 py-1 rounded-md border border-myGreen/20">
                Education
              </span>
              <div className="p-2 bg-neutral-800 rounded-lg text-gray-300">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
            </div>

            <div className="mt-8 space-y-2">
              <h4 className="text-sm md:text-md font-bold tracking-wide text-gray-100">
                BACHELOR'S DEGREE IN COMPUTER SCIENCE
              </h4>
              <p className="text-gray-400 font-mono">Mansoura University</p>
            </div>

            <div className="mt-6 pt-4 border-t border-neutral-800 text-xs text-myPurple font-semibold flex justify-between items-center">
              <span>GRADUATION YEAR</span>
              <span className="bg-neutral-800 text-gray-200 px-2 py-0.5 rounded font-mono">
                2022 - 2023
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
