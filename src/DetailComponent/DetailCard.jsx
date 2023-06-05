import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiCake, BiNote } from "react-icons/bi";
import { BsFlag, BsTelephone, BsPersonWorkspace } from "react-icons/bs";
const DetailCard = ({ user }) => {
  const userPhoneNumber = user.phoneNumber;
  // const date = new Date().toDateString();
  return (
    <div className="flex flex-col gap-5 min-w-[450px] p-3 border rounded-md shadow-md shadow-gray-100">
      <h3 className="text-gray-800 font-semibold">Contact details</h3>
      <div className="flex flex-col gap-3">
        <p className="flex items-center">
          <AiOutlineMail className="text-gray-600 mr-5 mb-0" />{" "}
          <a
            href="https://mail.google.com/mail/u/?authuser=user@gmail.com"
            className="text-blue-400"
          >
            {user.email}
          </a>
        </p>
        <p className="flex items-center">
          <BsTelephone className="text-gray-600 mr-5 mb-0" />
          <a href={"tel:" + userPhoneNumber} className="text-blue-400">
            {user.phoneNumber}
          </a>
        </p>
        <p className="flex items-center">
          <BsFlag className="text-gray-600 mr-5 mb-0" />
          <a
            href="https://www.google.com/maps/place/Landon"
            onClick={(e) => e.stopPropagation()}
            className="text-gray-700"
          >
            {user.address}
          </a>
        </p>
        <p className="flex items-center">
          <BsPersonWorkspace className="text-gray-600 mr-5 mb-0" />
          <p className="text-gray-700">{user.job}</p>
        </p>
        <p className="flex items-center">
          <BiCake className="text-gray-600 mr-5 mb-0" />
          <p className="text-gray-700">{user.date}</p>
        </p>
        <p className="flex items-center">
          <BiNote className="text-gray-600 mr-5 mb-0" />
          <p className="text-gray-700">{user.note}</p>
        </p>
      </div>
    </div>
  );
};
export default DetailCard;