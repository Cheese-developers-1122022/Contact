import React from "react";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Form from "../DetailComponent/EmailForm";
const Recently = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const place = (e) => {
    e.stopPropagation();
  };
  const call = (e) => {
    e.stopPropagation();
  };
  const userEmailAndCall = (e) => {
    e.stopPropagation();
  };
  return (
    <div className=" overflow-hidden">
      <div className=" flex items-center gap-5 py-5 overflow-scroll scroll">
        {/* map ya ml */}
        {/* detail id need */}
        <div
          className="flex min-w-[380px] flex-col p-5 rounded-lg shadow-lg shadow-blue-100 gap-3 justify-center user-card"
          onClick={userEmailAndCall}
        >
          <Link to={"/detail"}>
            <div className="flex justify-between items-center pb-4 border-b">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    src="https://i2-prod.mirror.co.uk/incoming/article28700340.ece/ALTERNATES/s1200d/0_TOPSHOT-FBL-WC-2022-MATCH58-CRO-BRA.jpg"
                    className=" w-10 h-10 object-cover object-center"
                    alt=""
                  />
                </div>
                <div className="">
                  <h3 className="font-semibold">Neymar Jr</h3>
                  <a
                    href="tel:09-970662791"
                    onClick={call}
                    className="text-gray-500 cursor-pointer text-sm"
                  >
                    09298414102
                  </a>
                </div>
              </div>
              <div className="p-2 rounded-full bg-gray-100">
                <BsStarFill className="text-gray-400 text-sm" />
              </div>
            </div>
          </Link>
          <div className="p-2">
            <a
              href="https://www.google.com/maps/place/Landon"
              onClick={place}
              className="text-gray-600 font-[500] mb-1"
            >
              Landon,USA
            </a>
            <p className=" text-gray-600 font-[500] text-sm">Kyaw@gmail.com</p>
          </div>
          <div className="flex items-center gap-5">
            <button
              onClick={(e) => {
                open();
                e.stopPropagation();
              }}
              className="flex items-center gap-2 px-4 py-1 text-gray-400 text-email text-sm"
            >
              <AiOutlineMail /> Send Email
            </button>
            <Modal title="Send Email" onClose={close} opened={opened} centered>
              {/* form mhr close method passing payy ml */}
              <Form close={close} />
            </Modal>
            <a
              // tel need
              onClick={call}
              href={`tel:09-97066279`}
              className="flex items-center gap-2 px-4 py-1 text-gray-400 text-call text-sm"
            >
              <BiPhoneCall /> Call
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Recently;
