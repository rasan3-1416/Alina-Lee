import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/header/logo.svg";
import Social from "./Social";
import MobileNav from "./MobileNav";
import { CursorContext } from "../context/CursorContext";

const Header = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  return (
    <header className="fixed z-30 flex h-[80px] w-full items-center px-[30px] lg:h-[100px] lg:px-[100px]">
      <div className="flex w-full flex-col justify-between lg:flex-row lg:items-center">
        <Link
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          to={"/"}
          className="max-w-[160px] lg:max-w-[200px]"
        >
          <img src={Logo} alt="Logo" />
        </Link>
        <nav
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
          className="hidden gap-x-12 font-semibold lg:flex"
        >
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            About
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? "active" : "pending")}
          >
            Contact
          </NavLink>
        </nav>
      </div>
      {/* ------------ */}
      <Social />
      {/* ------------ */}
      <MobileNav />
    </header>
  );
};

export default Header;
