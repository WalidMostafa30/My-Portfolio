import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <main
      className="backdrop-blur-3xl"
      style={{
        background: `radial-gradient(circle at bottom right, var(--primary) -50%, var(--background) 60%)`,
      }}
    >
      <Header />

      <section className="container h-svh flex flex-col overflow-y-auto pt-16 relative z-20">
        <Outlet />
      </section>

      <Toaster position="top-center" className="bg-primary! text-white!" />
    </main>
  );
}

export default App;
