import PageTitle from "@/components/common/PageTitle";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Skills = () => {
  const skillsCategories = [
    {
      id: 1,
      title: "Languages",
      skills: [
        {
          id: 1,
          name: "HTML",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          id: 2,
          name: "CSS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          id: 3,
          name: "JavaScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          id: 4,
          name: "TypeScript",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        },
      ],
    },
    {
      id: 2,
      title: "Frameworks & Libraries",
      skills: [
        {
          id: 5,
          name: "React",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          id: 6,
          name: "Next JS",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
          id: 7,
          name: "Redux Toolkit",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
        },
        {
          id: 8,
          name: "Framer Motion",
          image:
            "https://framerusercontent.com/images/8Y1K4N6W6VDDT4KXGZ6YQPUF6A.png",
        },
      ],
    },
    {
      id: 3,
      title: "Styling",
      skills: [
        {
          id: 9,
          name: "Bootstrap",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        },
        {
          id: 10,
          name: "Tailwind",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        },
        {
          id: 11,
          name: "Sass",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        },
      ],
    },
    {
      id: 4,
      title: "Tools & Others",
      skills: [
        {
          id: 12,
          name: "Git",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          id: 13,
          name: "GitHub",
          image:
            "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        },
        {
          id: 14,
          name: "Responsive Design",
          image: "https://cdn-icons-png.flaticon.com/512/1006/1006554.png",
        },
      ],
    },
  ];

  return (
    <section className="pageContainer">
      <PageTitle
        title="Skills"
        subtitle="My technical abilities and expertise"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
        {skillsCategories.map((category) => (
          <Card className="cardBG" key={category.id}>
            <CardHeader className="gap-0 text-xl border-b">
              {category.title}
            </CardHeader>

            <CardContent className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <Card
                  key={skill.id}
                  className="group cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="flex flex-col items-center gap-4">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-110"
                    />

                    <span className="text-sm font-semibold text-center">
                      {skill.name}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Skills;
