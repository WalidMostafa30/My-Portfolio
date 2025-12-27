import { Outlet } from "react-router";
import Header from "./components/Header/Header";

function App() {
  return (
    <main
      className="relative"
      style={{
        // استخدام التدرج مع تحديد مدى انتشار اللون
        background: `radial-gradient(circle at bottom right, var(--primary) 0%, var(--background) 60%)`, // تقليل الـ 70% لـ 50% يجعل اللون يختفي أسرع
      }}
    >
      {/* إضافة طبقة "Overlay" شفافة فوق الخلفية لتهدئة الألوان */}
      <div className="absolute inset-0 bg-background/40 pointer-events-none" />

      <Header />

      <div className="container min-h-screen overflow-y-auto pt-14">
        <Outlet />
      </div>
    </main>
  );
}

export default App;
