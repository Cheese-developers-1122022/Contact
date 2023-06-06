import React, { useEffect } from "react";
import "../table.css";
import {
  BsPrinter,
  BsSafeFill,
  BsStar,
  BsStarFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import {
  AiOutlineDelete,
  AiOutlineMail,
  AiOutlinePrinter,
  AiOutlineSetting,
} from "react-icons/ai";
import { TbListDetails } from "react-icons/tb";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { HiOutlinePencil } from "react-icons/hi";
import { Menu, Tooltip } from "@mantine/core";
import Cookies from "js-cookie";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../DataConfig/firestore";

const TableData = (props) => {
  const {
    id,
    name,
    email,
    phoneNumber,
    job,
    date,
    company,
    address,
    note,
    imageUrl,
    fav,
  } = props;

  const place = (e) => {
    e.stopPropagation();
  };
  const storage = JSON?.parse(Cookies?.get("Info"));
  const userDocName = storage?.email;
  const updateDocRef = doc(db, userDocName, id);
  const nav = useNavigate();
  const True = async (e) => {
    e.stopPropagation();
    try {
      await updateDoc(updateDocRef, { fav: true });
      window.onload;
    } catch (e) {
      console.log(e);
    }
  };

  const False = async (e) => {
    e.stopPropagation();
    try {
      await updateDoc(updateDocRef, { fav: false });
      window.onload;
    } catch (e) {
      console.log(e);
    }
  };
  console.log(id);
  const detailLink = (e) => {
    e.stopPropagation();
    return nav(`/details/${id}`, { state: { data: props } });
  };

  return (
    <tr
      className=" shadow hover:bg-[#e0b5ad31] user cursor-pointer"
      onClick={detailLink}
    >
      <td className="px-3 py-4 font-semibold text-left tracking-wide text-gray-900">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src={imageUrl}
            className=" w-10 h-10 object-cover object-center"
            alt=""
          />
        </div>
      </td>
      <td className="px-3 py-4 font-semibold text-left tracking-wide text-gray-900">
        <div className="">
          <h3>{name}</h3>
          <p className="text-gray-500 cursor-pointer text-sm">09298414102</p>
        </div>
      </td>
      <td className="px-3 py-4 font-semibold text-left tracking-wide text-gray-900">
        <a href="" className="hover:border-b-[2px] border-gray-400">
          {email}
        </a>
      </td>
      <td className="px-3 py-4 font-semibold text-left tracking-wide text-gray-900">
        <a href="https://www.google.com/maps/place/Landon" onClick={place}>
          {address}
        </a>
      </td>
      <td className="px-3 py-4 font-semibold text-left tracking-wide text-gray-900">
        <div className="flex flex-wrap gap-2">
          {job ? (
            <span className="px-3 py-1 text-white rounded bg-blue-500 text-[10px] font-semibold">
              {job}
            </span>
          ) : (
            ""
          )}
        </div>
      </td>
      <td className="px-3 py-4 font-semibold text-left tracking-wide text-gray-900">
        <div className="action">
          <div className="flex items-center gap-5">
            <Tooltip
              label="Favorite"
              className="text-sm"
              color="dark"
              position="bottom"
              withArrow
              arrowSize={6}
              transitionProps={{ transition: "pop", duration: 300 }}
              closeDelay={300}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="">
                {fav ? (
                  <BsStarFill
                    onClick={False}
                    className=" text-lg cursor-pointer"
                  />
                ) : (
                  <BsStar onClick={True} className=" text-lg cursor-pointer" />
                )}
              </div>
            </Tooltip>
            <Link to={`/details/${id}`} onClick={(e) => e.stopPropagation()}>
              <Tooltip
                label="Detail"
                className="text-sm"
                color="dark"
                position="bottom"
                withArrow
                arrowSize={6}
                transitionProps={{ transition: "pop", duration: 300 }}
                closeDelay={300}
              >
                <div className="">
                  <TbListDetails className="text-lg cursor-pointer" />
                </div>
              </Tooltip>
            </Link>
            <div className="">
              <Menu
                trigger="hover"
                withArrow
                arrowSize={6}
                openDelay={50}
                closeDelay={200}
                transitionProps={{ transition: "scale", duration: 500 }}
              >
                <Menu.Target>
                  <div className="">
                    <BsThreeDotsVertical className=" text-lg cursor-pointer" />
                  </div>
                </Menu.Target>
                <Menu.Dropdown>
                  <Menu.Item color="red" icon={<AiOutlineDelete size={14} />}>
                    <p>Delete</p>
                  </Menu.Item>
                </Menu.Dropdown>
              </Menu>
            </div>
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableData;
