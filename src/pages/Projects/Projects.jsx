import myPortfolioImg from "@/assets/images/projectsImgs/portfolio.webp";
import MiniStoreImg from "@/assets/images/projectsImgs/ecom.webp";
import GuessGameImg from "@/assets/images/projectsImgs/guess-game.webp";
import QuranImg from "@/assets/images/projectsImgs/quran-app.webp";
import todoListimg from "@/assets/images/projectsImgs/todo-list.webp";
import weatherimg from "@/assets/images/projectsImgs/weather-app.webp";
import quizimg from "@/assets/images/projectsImgs/quiz-app.webp";
import DragTodoImg from "@/assets/images/projectsImgs/drag-drop-todo.webp";
import ageCalculatorImg from "@/assets/images/projectsImgs/age-calculator.webp";
import ticTacToeImg from "@/assets/images/projectsImgs/tic-tac-toe.webp";
import calculatorImg from "@/assets/images/projectsImgs/calculator.webp";
import memoryGameImg from "@/assets/images/projectsImgs/memoryGame.webp";

import { Link } from "react-router";
import PageTitle from "@/components/common/PageTitle";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const Projects = () => {
  const ProjectsData = [
    {
      id: 1,
      title: "My Portfolio",
      img: myPortfolioImg,
      github: "https://github.com/WalidMostafa30/Walid-Portfolio",
      demo: "https://walid-portfolio-2001.netlify.app/",
    },
    {
      id: 2,
      title: "E-commerce",
      img: MiniStoreImg,
      github: "https://github.com/WalidMostafa30/E-commerce-jsonserver",
      demo: "https://ecommerce-ministore.netlify.app/",
    },
    {
      id: 3,
      title: "Quran App",
      img: QuranImg,
      github: "https://github.com/WalidMostafa30/Quran-App",
      demo: "https://al-mostafa-app.vercel.app/",
    },
    {
      id: 4,
      title: "Todo List",
      img: todoListimg,
      github: "https://github.com/WalidMostafa30/Todo-List",
      demo: "https://todo-list-2o01.netlify.app/",
    },
    {
      id: 5,
      title: "Weather App",
      img: weatherimg,
      github: "https://github.com/WalidMostafa30/Weather-App",
      demo: "https://weather-app-2o24.netlify.app/",
    },
    {
      id: 6,
      title: "Draggable To-DO",
      img: DragTodoImg,
      github: "https://github.com/WalidMostafa30/Drag_Drop_Todo",
      demo: "https://drag-drop-todo-2001.netlify.app/",
    },
    {
      id: 7,
      title: "Quiz App",
      img: quizimg,
      github: "https://github.com/WalidMostafa30/Quiz-App",
      demo: "https://quiz-app-1022.netlify.app/",
    },
    {
      id: 8,
      title: "Tic-Tac-Toe",
      img: ticTacToeImg,
      github: "https://github.com/WalidMostafa30/tic-tac-toe",
      demo: "https://walidmostafa30.github.io/tic-tac-toe/",
    },
    {
      id: 9,
      title: "Guess Game",
      img: GuessGameImg,
      github: "https://github.com/WalidMostafa30/Guess-Game",
      demo: "https://walidmostafa30.github.io/Guess-Game/",
    },
    {
      id: 10,
      title: "Age Calculator",
      img: ageCalculatorImg,
      github: "https://github.com/WalidMostafa30/Age-calculation",
      demo: "https://walidmostafa30.github.io/Age-calculation/",
    },
    {
      id: 11,
      title: "Calculator",
      img: calculatorImg,
      github: "https://github.com/WalidMostafa30/Calculator",
      demo: "https://walidmostafa30.github.io/Calculator/",
    },
    {
      id: 12,
      title: "Memory Game",
      img: memoryGameImg,
      github: "https://github.com/WalidMostafa30/Memory-game",
      demo: "https://walidmostafa30.github.io/Memory-game/",
    },
  ];

  return (
    <section className="pageContainer">
      <PageTitle title="Projects" subtitle="My projects" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {ProjectsData.map((project) => (
          <div
            key={project.id}
            className="cardBG group overflow-hidden rounded-xl p-0"
          >
            <div className="relative h-52 overflow-hidden">
              <img
                src={project.img}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 backdrop-blur opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Button className="rounded-full" variant="outline">
                  <Link
                    to={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <Github size={16} />
                    GitHub
                  </Link>
                </Button>
                <Button className="rounded-full">
                  <Link
                    to={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </Link>
                </Button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">
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
