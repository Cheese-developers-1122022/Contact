import React, { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import TableHead from "./Table/TableHead";
import { collection, doc, getDocs, onSnapshot } from "firebase/firestore";
import { db } from "../DataConfig/firestore";
import TableData from "./Table/TableData";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../app/LightSlice";
import Cookies from "js-cookie";
import { Table } from "@mantine/core";
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
  console.log(text);
  const getUserData = async () => {
    try {
      const unsubscribe = onSnapshot(UserCollectionRef, (snapshot) => {
        const filterData = snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        dispatch(getUsers(filterData));
      });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div className=" overflow-y-scroll h-[360px] overflow-hidden scroll">
      <Table verticalSpacing="xl" className="w-full">
        <TableHead />
        <tbody className="" onClick={tbody}>
          {text?.map((data) => (
            <TableData key={data.id} {...data} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};
export default ContactList;
