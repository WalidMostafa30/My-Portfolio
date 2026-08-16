import { useOutlet } from "react-router";
import Header from "./components/Header/Header";
import { Toaster } from "@/components/ui/sonner";
import PageWrapper from "./components/common/PageWrapper";
import MobileNav from "./components/Header/MobileNav";

function App() {
  const element = useOutlet();

  return (
    <main>
      <Header />
      <PageWrapper>{element}</PageWrapper>
      <MobileNav />

      <Toaster position="top-center" className="bg-primary! text-white!" />
    </main>
  );
}

export default App;
