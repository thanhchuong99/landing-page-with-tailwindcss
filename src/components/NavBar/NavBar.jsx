import { BsSunFill } from "react-icons/bs";
import { HiOutlineMenu } from "react-icons/hi";
import { FaMoon } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import useDarkMode from "../../util/useDarkMode";
const NavBar = ({ isMobile }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav className="flex items-center justify-between">
      <div className="flex items-center ">
        <div className="text-20 font-bold mr-4">NerdCard</div>
        {isDarkMode ? (
          <FaMoon
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode()}
          />
        ) : (
          <BsSunFill
            size={"24px"}
            color="#e9c46a"
            className="cursor-pointer"
            onClick={() => toggleDarkMode()}
          />
        )}
      </div>
      <ul className="text-16 font-semibold">
        {openMenu && isMobile ? (
          <MdOutlineClose
            size={"24px"}
            className="cursor-pointer"
            onClick={handleOpenMenu}
          />
        ) : !openMenu && isMobile ? (
          <HiOutlineMenu
            size={"24px"}
            className="cursor-pointer"
            onClick={handleOpenMenu}
          />
        ) : (
          <div className="flex gap-4 ">
            <li className="btn-hover">Feature</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover ml-20">Contact</li>
          </div>
        )}
        {openMenu && isMobile && (
          <div className="absolute right-8 bg-white p-8 text-center text-13 text-black z-10">
            <li className="btn-hover">Feature</li>
            <li className="btn-hover">Menu</li>
            <li className="btn-hover">Our Story</li>
            <li className="btn-hover">Contact</li>
          </div>
        )}
      </ul>
    </nav>
  );
};
export default NavBar;
