import React, { useState } from "react";
import { UseCustomProvider } from "../../Context/DarkMoodContext";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
// import { RiContactsFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { lightToggle } from "../../app/LightSlice";
import Cookies from "js-cookie";
import { info } from "autoprefixer";

const Navbar = () => {
  const { darkMode, handleThemeSwitch } = UseCustomProvider();
  const [search, setSearch] = useState("");
  const nav = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    nav("/search", { state: { search } });
    setSearch("");
  };
  const userInfo = JSON.parse(Cookies?.get("Info"));
  const name = userInfo.name;
  const email = userInfo.email;
  console.log(name, email);
  const side = useSelector((state) => state.light.light);
  const dispatch = useDispatch();
  return (
    <div className=" p-3  dark:bg-gray-800">
      <div className=" flex justify-between items-center">
        <div className=" flex items-center gap-3">
          <button
            onClick={() => dispatch(lightToggle(!side))}
            className={
              side
                ? "bg-[#e4e0e087] flex items-center justify-center w-10 h-10  rounded-[5rem] nav-burger"
                : " flex items-center justify-center w-10 h-10  rounded-[5rem] nav-burger"
            }
          >
            <RxHamburgerMenu className=" text-2xl dark:text-white/70" />
          </button>
          <div className=" ">
            {/* <RiContactsFill className=" text-3xl " /> */}
            <h1 className=" text-2xl font-semibold dark:text-white">
              ConnectX
            </h1>
          </div>
        </div>
        <div className="">
          <div className="relative ">
            <form action="" onSubmit={onSubmitHandler}>
              <input
                type="text"
                className=" border dark:border-none  rounded-md dark:bg-gray-700 px-8 py-1 outline-none w-[250px] md:w-[400px] "
                placeholder="Search contacts"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button
                className="absolute top-2 left-2  float-left"
                type="submit"
              >
                <GoSearch className=" dark:text-white/70" />
              </button>
            </form>
          </div>
        </div>
        {/* <div className="">
          <GoSearch className=" dark:text-white/70" />
        </div> */}
        <div className=" flex gap-3 mr-5">
          <button
            className=" flex items-center justify-center w-10 h-10  rounded-[5rem] nav-toggle"
            onClick={handleThemeSwitch}
          >
            <p className={`${darkMode === "dark" ? "block" : "hidden"} `}>
              <BsFillMoonStarsFill className="text-xl text-white" />
            </p>
            <p className={`${darkMode === "dark" ? " hidden" : "block"} `}>
              <BsFillSunFill className="text-2xl text-yellow-400" />
            </p>
          </button>
          <div className="">
            <div className=" w-10 h-10 rounded-[5rem] bg-[#E6AA68] border dark:border-none flex justify-center items-center">
              <div className={`hidden `}>
                <img src="" alt="" className="rounded-[5rem] w-10 h-10" />
                {/* img pr ma img pya ml */}
              </div>
              <div className={``}>
                <h2 className=" uppercase text-xl font-medium text-white">
                  {name.charAt(0)}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
