import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <main
      className="relative backdrop-blur-3xl"
      style={{
        background: `radial-gradient(circle at bottom right, var(--primary) -50%, var(--background) 60%)`,
      }}
    >
      <Header />

      <Outlet />
    </main>
  );
}

export default App;
