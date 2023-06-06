import React from "react";
import Navbar from "../Component/Sidebar/Navbar";
import Siderbar from "../Component/Sidebar/Siderbar";
import Contracts from "../Component/Sidebar/Contacts";
const ContactsPage = () => {
  return (
    <div className="flex flex-col w-screen">
      <Navbar />
      <div className="flex w-screen">
        <Siderbar />
        <Contracts />
      </div>
    </div>
  );
};

export default ContactsPage;
