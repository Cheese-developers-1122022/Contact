import React, { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import Form from "../DetailComponent/EmailForm";
import { useSelector } from "react-redux";
const Recently = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [favoriteItem, setFavoriteItem] = useState([]);
  const [filterFavorite, setFilterFavorite] = useState([]);
  const favorite = useSelector((state) => state.light.users);


  useEffect(() => {
    setFavoriteItem(favorite);
  }, [favorite]);

  useEffect(() => {
    const filter = favoriteItem.filter((item) => item.fav === true);
    setFilterFavorite(filter);
  }, [favoriteItem]);

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
    <div className="flex items-center relative">
      <div className=" w-[90vw] sm:w-[70vw] md:w-[90vw] lg:w-[70vw] xl:w-[85vw] overflow-x-scroll scroll-custom flex items-center gap-5 scroll-smooth py-4">
        {filterFavorite?.map((item) => {
          return (
            <div
              key={item?.id}
              className="flex min-w-[380px] flex-col p-5 rounded-lg shadow-lg shadow-blue-100 gap-3 justify-center user-card"
              onClick={userEmailAndCall}
            >
              <Link to={`/details/${item?.id}`}>
                <div className="flex justify-between items-center pb-4 border-b">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      {item?.imageUrl ? (
                        <img
                          src={item?.imageUrl}
                          className=" w-10 h-10 object-cover object-center"
                          alt=""
                        />
                      ) : (
                        <img
                          src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                          className=" w-10 h-10 object-cover object-center"
                          alt=""
                        />
                      )}
                    </div>
                    <div className="">
                      <h3 className="font-semibold">{item?.name}</h3>
                      <a
                        href={`tel:${item?.phoneNumber}`}
                        onClick={call}
                        className="text-gray-500 cursor-pointer text-sm"
                      >
                        {item?.phoneNumber}
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
                  href={`https://www.google.com/maps/place/${item?.address}`}
                  onClick={place}
                  className="text-gray-600 font-[500] mb-1"
                >
                  {item?.address}
                </a>
                <p className=" text-gray-600 font-[500] text-sm">
                  Kyaw@gmail.com
                </p>
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
                <Modal
                  title="Send Email"
                  onClose={close}
                  opened={opened}
                  centered
                >
                  {/* form mhr close method passing payy ml */}
                  <Form close={close} />
                </Modal>
                <a
                  // tel need
                  onClick={call}
                  href={`tel:${item?.phoneNumber}`}
                  className="flex items-center gap-2 px-4 py-1 text-gray-400 text-call text-sm"
                >
                  <BiPhoneCall /> Call
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Recently;