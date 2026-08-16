import { TextAlignJustify } from "lucide-react";
import { Button } from "@/components/ui/button";
import SideBar from "./SideBar";
// import { useState } from "react";

import { Link } from "react-router";
import NavBar from "./NavBar";
import ThemeBtn from "./ThemeBtn";

const Header = () => {
  // const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <header className="py-2 fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-3xl">
        <div className="container flex justify-between items-center gap-2">
          <Link
            to={"/"}
            className="text-3xl font-bold hover:text-primary hover:scale-110 transition-all duration-300"
          >
            Walid
          </Link>

          <NavBar />

          <div className="flex items-center gap-4">
            <ThemeBtn />

            {/* <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer lg:hidden"
              onClick={() => setOpenSidebar(true)}
            >
              <TextAlignJustify />
            </Button> */}
          </div>
        </div>
      </header>

      {/* <SideBar open={openSidebar} onClose={() => setOpenSidebar(false)} /> */}
    </>
  );
};

export default Header;
