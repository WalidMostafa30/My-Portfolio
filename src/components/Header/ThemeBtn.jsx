import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Sun, Moon } from "lucide-react";

const ThemeBtn = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "dark";
    }
    return "dark";
  });

  useEffect(() => {
    // الاستهداف هنا بقى للـ body مباشرة
    const body = window.document.body;

    if (theme === "dark") {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <Button
      variant="outline"
      size="icon"
      className="rounded-full cursor-pointer"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
      )}
    </Button>
  );
};

export default ThemeBtn;
