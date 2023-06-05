import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import TableHead from "./Table/TableHead";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../DataConfig/firestore";
import TableData from "./Table/TableData";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../app/LightSlice";
import Cookies from "js-cookie";
const ContactList = () => {
  const nav = useNavigate();
  const userToken = Cookies?.get("User");
  console.log(userToken);
  const userInfo = JSON.parse(Cookies.get("Info"));
  const userEmail = userInfo?.email;
  const UserCollectionRef = collection(db, userEmail);
  console.log(UserCollectionRef);
  console.log(userEmail);
  const dispatch = useDispatch();
  const tbody = (e) => {
    e.stopPropagation();
  };
  const text = useSelector((state) => state.light.users);
  const getUserData = async () => {
    try {
      const data = await getDocs(UserCollectionRef);
      const filterData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(getUsers(filterData));
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className=" overflow-y-scroll h-[400px] overflow-hidden scroll">
      <table className="w-full">
        <TableHead />
        <tbody className="" onClick={tbody}>
          {text?.map((data) => (
            <TableData key={data.id} {...data} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ContactList;
