import { Button } from "@/components/ui/button";
import { House, MessageSquareWarning, RotateCcw } from "lucide-react";
import { Link, useRouteError } from "react-router";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <section className="h-svh flex flex-col justify-center items-center gap-2">
      <MessageSquareWarning size={100} />
      <h1 className="text-3xl font-bold text-primary">
        An unexpected error occurred
      </h1>
      <h3 className="font-semibold">
        {error?.message ||
          "There was a problem loading the page. Please try again later."}
      </h3>

      <div className="flex gap-4 mt-4">
        <Button onClick={() => window.location.reload()}>
          Reload page <RotateCcw />
        </Button>
        <Button>
          <Link to="/">Go to Home</Link>
          <House />
        </Button>
      </div>
    </section>
  );
};

export default ErrorPage;
