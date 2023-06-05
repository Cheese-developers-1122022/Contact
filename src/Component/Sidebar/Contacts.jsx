import React from "react";
import ContactList from "../../Child/ContactList";
import Recently from "../../Child/Recently";

const Contacts = () => {
  return (
    <div className=" w-full min-h-full px-10">
      <div className="mb-10 pt-16">
        <h3 className="text-2xl text-blue-800 font-semibold mb-7">Favorite</h3>
        <Recently />
      </div>
      <div className="">
        <h3 className="text-2xl text-blue-800 font-semibold">Contact Lists</h3>
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
