import { Outlet } from "react-router";
import Header from "./components/Header/Header";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <main>
      <Header />

      <Outlet />

      <Toaster position="top-center" className="bg-primary! text-white!" />

      {/* background gradient shadow */}
      <div className="backdrop-blur-3xl fixed inset-0">
        <div
          className="absolute w-[700px] h-[700px] bg-primary opacity-20 top-1/3 right-0 blur-3xl animate-spin animation-duration-[20s]"
          style={{
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          }}
        />
      </div>
    </main>
  );
}

export default App;
