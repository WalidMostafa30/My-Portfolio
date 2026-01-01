import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calendar, Briefcase, GraduationCap, Award } from "lucide-react";
import PageTitle from "@/components/common/PageTitle";

const About = () => {
  const aboutInfo = [
    {
      title: "Name",
      info: "Walid Mostafa Elshazly",
    },
    {
      title: "Age",
      info: "23",
    },
    {
      title: "Location",
      info: "Egypt, Mansoura",
    },
    {
      title: "Education",
      info: "BACHELOR'S DEGREE IN COMPUTER SCIENCE.",
      info2: "GRADUATION YEAR: 2022 - 2023",
    },
    {
      title: "Summary",
      info: "Experienced Frontend Developer specializing in building dynamic and responsive web applications with React and Next.js. Proficient in modern JavaScript (ES6+), TypeScript, and Redux Toolkit, ensuring scalable and maintainable solutions. Skilled in creating reusable components, optimizing performance, integrating RESTful APIs, and managing authentication flows. Dedicated to delivering user-friendly interfaces with a strong focus on UX/UI design principles and clean code practices.",
    },
  ];

  const timelineEvents = [
    {
      id: 1,
      year: "2024",
      title: "Senior Developer",
      description:
        "قيادة فريق التطوير وبناء تطبيقات ويب متقدمة باستخدام React و Node.js",
      icon: Briefcase,
      side: "right",
    },
    {
      id: 2,
      year: "2022",
      title: "Full Stack Developer",
      description: "تطوير تطبيقات ويب كاملة وإدارة قواعد البيانات والخوادم",
      icon: Briefcase,
      side: "left",
    },
    {
      id: 3,
      year: "2020",
      title: "Frontend Developer",
      description:
        "بداية المسيرة المهنية في تطوير الواجهات الأمامية والتفاعلية",
      icon: Briefcase,
      side: "right",
    },
    {
      id: 4,
      year: "2019",
      title: "بكالوريوس علوم الحاسب",
      description: "التخرج من الجامعة بتقدير امتياز مع مرتبة الشرف",
      icon: GraduationCap,
      side: "left",
    },
    {
      id: 5,
      year: "2018",
      title: "جائزة أفضل مشروع تخرج",
      description: "الفوز بجائزة أفضل مشروع تخرج على مستوى الكلية",
      icon: Award,
      side: "right",
    },
  ];

  return (
    <div className="pageContainer">
      <PageTitle title="About Me" subtitle="Learn more about me" />
      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute start-6 md:start-1/2 md:-translate-x-1/2 rtl:md:translate-x-1/2 h-full w-1 bg-linear-to-b from-primary via-background/50 to-background rounded-full" />

        {/* Events */}
        <div className="space-y-12">
          {timelineEvents.map((event) => {
            const Icon = event.icon;
            const isRight = event.side === "right";

            return (
              <div key={event.id} className="relative">
                <div
                  className={`flex items-start md:items-center flex-row
                      ${isRight ? "md:flex-row-reverse" : "md:flex-row"}
                    `}
                >
                  {/* Card */}
                  <div
                    className={`w-full md:w-[calc(50%-4rem)] ps-16 md:ps-0 ${
                      isRight ? "md:pe-" : "md:ps-"
                    }
                      `}
                  >
                    <Card className="cardBG gap-2">
                      <CardHeader className="gap-1">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-primary" />
                          <span className="text-2xl font-bold text-primary">
                            {event.year}
                          </span>
                        </div>
                        <CardTitle className="text-xl">{event.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-base leading-relaxed">
                          {event.description}
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Icon */}
                  <div className="absolute start-6.5 md:start-1/2 -translate-x-1/2 rtl:translate-x-1/2 top-4 md:top-auto">
                    <div
                      className="w-12 h-12 md:w-16 md:h-16 bg-background rounded-full border-4 border-primary flex items-center justify-center shadow-lg 
                        hover:scale-110 transition-transform duration-300"
                    >
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                    </div>
                  </div>

                  {/* Empty Space (Desktop only) */}
                  <div className="hidden md:block w-5/12"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
