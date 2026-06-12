import PageTitle from "@/components/common/PageTitle";
import { MoveRight, Layers } from "lucide-react";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { ProjectsData } from "@/assets/data";

const Projects = () => {
  return (
    <section className="pageContainer">
      <PageTitle title="Projects" subtitle="My creative portfolio & works" />

      <div className="w-full">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={28}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: true,
          }}
          loop
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
          }}
          className="pb-10! project-swiper [&_.swiper-pagination-bullet]:rounded-full! [&_.swiper-pagination-bullet]:duration-300! [&_.swiper-pagination-bullet]:w-3! [&_.swiper-pagination-bullet]:h-3! [&_.swiper-pagination-bullet]:bg-foreground! [&_.swiper-pagination-bullet]:opacity-60 
          [&_.swiper-pagination-bullet-active]:bg-primary! [&_.swiper-pagination-bullet-active]:w-6! [&_.swiper-pagination-bullet-active]:h-5 [&_.swiper-pagination-bullet-active]:opacity-100! [&_.swiper-pagination-bullet-active]:opacity-100!"
        >
          {ProjectsData.map((project, index) => (
            <SwiperSlide key={project.id} className="h-auto py-2">
              <div className="backdrop-blur-3xl group flex flex-col justify-between gap-5 p-6 rounded-3xl bg-white dark:bg-neutral-900 border-2 border-gray-150 dark:border-neutral-800/70 shadow-primary/20 shadow-xs relative overflow-hidden h-full transition-all duration-300 hover:border-primary/30! hover:shadow-md">
                <div className="blur_circle w-[60%] h-[60%] absolute bottom-1/2 end-1/2 bg-primary/10 blur-3xl rounded-full pointer-events-none group-hover:scale-150 group-hover:bg-primary/10 transition-all duration-500" />

                <div className="relative z-10 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-6xl font-bold font-mono text-white tracking-tighter">
                      {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
                    </span>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-full flex items-center justify-center border-2 border-foreground hover:text-white hover:bg-primary hover:border-primary hover:-rotate-45 transition-all duration-300 shadow-2xs"
                    >
                      <MoveRight className="w-5 h-5" />
                    </a>
                  </div>

                  <div className="w-full h-48 overflow-hidden rounded-2xl bg-gray-100 dark:bg-neutral-950 border border-gray-100 dark:border-neutral-850 relative">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="h-full w-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                </div>

                <div className="relative z-10 pt-3 border-t border-gray-100 dark:border-neutral-800/80 flex items-center gap-2 overflow-hidden">
                  <Layers className="w-4 h-4 text-myGreen shrink-0" />
                  <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-6">
                    {project.tags ? (
                      project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[11px] font-medium text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-neutral-800 px-2 py-0.5 rounded-md"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-[11px] font-medium text-myGreen bg-myGreen/10 px-2.5 py-0.5 rounded-md">
                        Interactive Web App
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
