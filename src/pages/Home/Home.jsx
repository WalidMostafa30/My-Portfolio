import { Link } from "react-router";
import ProfileImg from "../../assets/Images/profile-img.webp";
import { Button } from "@/components/ui/button";
import { Folders, Send } from "lucide-react";

const Home = () => {
  return (
    <div className="h-full flex flex-col-reverse lg:flex-row items-center justify-center gap-12">
      <div className="flex flex-col justify-center gap-2 text-center lg:text-start w-full max-w-xl">
        <p className="text-lg md:text-xl font-bold text-primary">Hi, I'm</p>
        <h1 className="text-4xl md:text-5xl font-bold">Walid Mostafa</h1>
        <p className="text-xl md:text-2xl font-bold">Frontend Developer</p>
        <p className="text-lg md:text-xl font-medium">
          I am a frontend developer with a passion for creating user-friendly
          and visually appealing web applications.
        </p>

        <div className="mt-4 flex justify-center lg:justify-start gap-4">
          <Link to="/projects">
            <Button>
              View My Work <Folders />
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="outline">
              Contact Me <Send />
            </Button>
          </Link>
        </div>
      </div>

      <div className="lg:flex-1 flex justify-center items-center">
        <div className="w-[250px] lg:w-[350px] rounded-full overflow-hidden aspect-square relative">
          <img
            src={ProfileImg}
            alt="Walid Mostafa"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
