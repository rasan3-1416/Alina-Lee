import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

const menuVaraints = {
  hidden: {
    x: "100%",
  },
  shown: {
    x: "0%",
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="lg:hidden">
      <div
        className="cursor-pointer text-3xl"
        onClick={() => setOpenMenu(true)}
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVaraints}
        initial="hidden"
        animate={openMenu ? "shown" : "hidden"}
        className="absolute right-0 top-0 z-20 h-screen w-full max-w-xs bg-white shadow-2xl"
      >
        <div
          className="pending absolute left-4 top-14 z-30 cursor-pointer text-4xl"
          onClick={() => setOpenMenu(false)}
        >
          <IoMdClose />
        </div>
        <ul className="flex h-full flex-col items-center justify-center gap-y-8 font-primary text-3xl font-bold">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={() => setOpenMenu(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={() => setOpenMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={() => setOpenMenu(false)}
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? "active" : "pending")}
              onClick={() => setOpenMenu(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
