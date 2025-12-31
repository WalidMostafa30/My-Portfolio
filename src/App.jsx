import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { Toaster } from "@/components/ui/sonner";
import { ScrollArea } from "@/components/ui/scroll-area";

function App() {
  return (
    <main
      className="backdrop-blur-3xl"
      style={{
        background: `radial-gradient(circle at bottom right, var(--primary) -50%, var(--background) 60%)`,
      }}
    >
      <Header />

      <ScrollArea className="h-screen overflow-y-auto relative z-20">
        <section className="container h-screen pt-16 pb-8">
          <Outlet />
        </section>
      </ScrollArea>

      <Toaster position="top-center" className="bg-primary! text-white!" />
    </main>
  );
}

export default App;
