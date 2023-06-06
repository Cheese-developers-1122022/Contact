import React, { useEffect, useState } from "react";
import { UseCustomProvider } from "../../Context/DarkMoodContext";
import { BsFillSunFill, BsFillMoonStarsFill, BsPerson } from "react-icons/bs";
// import { RiContactsFill } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import "./navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, lightToggle, removeUser } from "../../app/LightSlice";
import Cookies from "js-cookie";
import { AiOutlineMail } from "react-icons/ai";
import { IoLogOutOutline } from "react-icons/io5";
import { useLogoutMutation } from "../../app/Authapi";

import { Menu } from "@mantine/core";

const Navbar = () => {
  const { darkMode, handleThemeSwitch } = UseCustomProvider();
  const [search, setSearch] = useState("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(search);
    nav("/search", { state: { search } });
    setSearch("");
  };
  const userInfo = JSON.parse(Cookies?.get("Info"));
  const name = userInfo.name;
  const email = userInfo.email;
  const side = useSelector((state) => state.light.light);

  const [opened, setOpened] = useState(false);
  const [logout, { isLoading }] = useLogoutMutation();
  const dispatch = useDispatch();
  const nav = useNavigate();
  const token = Cookies.get("User");

  const logoutHandler = async () => {
    const { data } = await logout(token);
    console.log(data);
    try {
      if (data.success) {
        nav("/login");
        dispatch(removeUser());
      }
    } catch (error) {
      console.error(error);
    }
  };

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
              <div className={` cursor-pointer`}>
                <Menu opened={opened} onChange={setOpened}>
                  <Menu.Target>
                    <h3 className=" uppercase text-xl font-medium text-white">
                      {name.charAt(0)}
                    </h3>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>
                      <h3 className="text-black text-md capitalize flex items-center gap-1">
                        <BsPerson /> {name}
                      </h3>
                    </Menu.Label>
                    <Menu.Label>
                      <h3 className="text-md text-gray-700 flex items-center gap-1">
                        <AiOutlineMail /> {email}
                      </h3>
                    </Menu.Label>
                    <Menu.Item>
                      <button
                        onClick={logoutHandler}
                        className="text-sm flex items-center gap-1"
                      >
                        <IoLogOutOutline /> Logout
                      </button>
                    </Menu.Item>
                  </Menu.Dropdown>
                </Menu>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
