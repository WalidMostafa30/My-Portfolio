import {
  BookUser,
  ChartBarStacked,
  Folders,
  House,
  Phone,
  TextAlignJustify,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { useState } from "react";

import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SettingsDropDown from "./SettingsDropDown";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  const navLinks = [
    { id: 1, name: "Home", path: "/", icon: <House /> },
    { id: 2, name: "About", path: "/about", icon: <BookUser /> },
    { id: 3, name: "Skills", path: "/skills", icon: <ChartBarStacked /> },
    { id: 4, name: "Projects", path: "/projects", icon: <Folders /> },
    { id: 5, name: "Contact", path: "/contact", icon: <Phone /> },
  ];

  return (
    <>
      <header className="py-2 fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-3xl">
        <div className="container flex justify-between items-center gap-2">
          <Link to={"/"} className="text-2xl font-bold">
            Walid
          </Link>

          <NavBar navLinks={navLinks} />

          <div className="flex items-center gap-4">
            <SettingsDropDown />

            <Button
              variant="outline"
              size="icon"
              className="rounded-full cursor-pointer sm:hidden"
              onClick={() => setOpenSidebar(true)}
            >
              <TextAlignJustify />
            </Button>
          </div>
        </div>
      </header>

      <SideBar
        open={openSidebar}
        onClose={() => setOpenSidebar(false)}
        navLinks={navLinks}
      />
    </>
  );
};

export default Header;
