import React from "react";
import Contacts from "./Component/Sidebar/Contacts";
import { Routes, Route } from "react-router-dom";
import ContactCreate from "./Component/Sidebar/ContactCreate";
import Register from "./Component/Sidebar/Register";
import Login from "./Component/Sidebar/Login";
import Detail from "./Component/Sidebar/Details";
const Path = () => {
  return (
    <Routes>
      <Route path="/" element={<Contacts />} />
      <Route path="/create" element={<ContactCreate />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/details/:id" element={<Detail />} />
    </Routes>
  );
};

export default Path;
