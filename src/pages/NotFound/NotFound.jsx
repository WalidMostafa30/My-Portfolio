import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { MessageSquareWarning } from "lucide-react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="pageContainer">
      <section className="h-full flex flex-col justify-center items-center gap-2">
        <MessageSquareWarning size={100} />
        <h1 className="text-6xl font-bold text-primary">404</h1>
        <h3 className="text-2xl font-bold">Page Not Found</h3>
        <p className="max-w-md text-center">
          The page you are looking for might have been removed, had its name
          changed or is temporarily unavailable.
        </p>

        <Button className="mt-4">
          <Link to="/">Go to Home</Link>
          <House />
        </Button>
      </section>
    </div>
  );
};

export default NotFound;
