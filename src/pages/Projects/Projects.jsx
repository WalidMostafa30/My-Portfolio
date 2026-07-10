import PageTitle from "@/components/common/PageTitle";
import { MoveRight } from "lucide-react";
import { ProjectsData } from "@/assets/data";

const Projects = () => {
  return (
    <section className="pageContainer">
      <PageTitle title="Projects" subtitle="My creative portfolio & works" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ProjectsData.map((project, index) => (
          <div
            key={project.title}
            className="backdrop-blur-3xl group flex flex-col justify-between gap-4 p-4 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-150 dark:border-neutral-800/70 shadow-primary/20 shadow-xs relative overflow-hidden h-full transition-all duration-300 hover:border-primary/30! hover:shadow-md"
          >
            <div className="blur_circle w-[60%] h-[60%] absolute bottom-1/2 end-1/2 bg-primary/10 blur-3xl rounded-full pointer-events-none group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-500" />

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between gap-2">
                <span className="text-6xl font-bold font-mono text-white tracking-tighter">
                  {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                </span>

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full flex items-center justify-center border-2 border-foreground hover:text-white hover:bg-primary hover:border-primary hover:-rotate-45 transition-all duration-300 shadow-2xs"
                  >
                    <MoveRight className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div
                className="w-full aspect-video overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-950 
                border-2 relative"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              {/* <div
                className="w-full h-48 overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-950 
                border-2 relative"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-full w-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div> */}

              <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-200">
                {project.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
