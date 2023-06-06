import { Loader, Menu, Tooltip } from "@mantine/core";
import React, { useState } from "react";
import { AiOutlineDelete, AiOutlinePrinter } from "react-icons/ai";
import { BsStar, BsStarFill, BsThreeDotsVertical } from "react-icons/bs";
const DetailEdit = ({ edit, setEdit,user }) => {
  const [isFav, setIsFav] = useState(false);
  const favorite = () => {
    setIsFav(!isFav);
  };
  return (
    <>
      <div className="flex gap-5 items-center">
        <Tooltip
          label="Favorite"
          className={`text-sm`}
          color="dark"
          position="bottom"
          withArrow
          arrowSize={6}
          transitionProps={{ transition: "pop", duration: 300 }}
          closeDelay={100}
        >
          <div className="" onClick={favorite}>
            {!isFav ? (
              <BsStar
                className={` text-lg cursor-pointer ${
                  !edit ? "block" : "hidden"
                }`}
              />
            ) : (
              <BsStarFill
                className={` text-yellow-400 text-lg cursor-pointer ${
                  !edit ? "block" : "hidden"
                }`}
              />
            )}
          </div>
        </Tooltip>
        <div className={!edit ? "block" : "hidden"}>
          <Menu
            trigger="hover"
            openDelay={50}
            closeDelay={300}
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
        {/* id lo tl */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            setEdit(!edit);
          }}
        >
          {!edit ? (
            <button className="px-5 py-1 bg-blue-600 text-white text-sm font-semibold rounded">
              Edit
            </button>
          ) : (
            <button
              className="px-5 py-1 bg-blue-600 text-white text-sm font-semibold rounded"
              onClick={(e) => {
                e.stopPropagation();
                if (
                  confirm(
                    "Are you sure you want to discard your unsaved changes?"
                  )
                ) {
                  setEdit(!edit);
                } else {
                  setEdit(edit);
                }
              }}
            >
              Back
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export default DetailEdit;
