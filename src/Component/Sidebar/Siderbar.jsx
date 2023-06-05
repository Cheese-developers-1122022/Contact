import React, { useState } from "react";
import { LuUserPlus } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
const Siderbar = () => {
  const side = useSelector((state) => state.light.light);
const count=useSelector((state)=>state.light.users)
console.log(count)
  return (
    <div className="">
      <div
        className={
          side
            ? "translate-x-0 ease-linear duration-[0.3s] w-[250px] "
            : "translate-x-[-300px] ease-linear  duration-[0.3s]  w-0"
        }
      >
        <div className="min-h-screen  items-center flex gap-y-4 flex-col bg-[#f1f1f1]">
          <div className="py-2">
            <NavLink to="/create">
              <button className="px-2 hover:shadow-lg font-sans shadow-[#484545] duration-[1s] py-1 bg-slate-300 items-center gap-1 text-lg font-medium rounded-lg flex ">
                <LuUserPlus />
                Create Context
              </button>
            </NavLink>
          </div>
          <div className="">
            <NavLink to="/">
              <button className="flex items-center px-4 py-2 rounded hover:bg-slate-200 gap-6 justify-around">
                <BsPersonFill />
                <h2 className="">Contacts</h2>
                <span className="px-2 bg-slate-300 rounded-full">{count.length}</span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Siderbar;
