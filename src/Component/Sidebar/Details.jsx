import { Modal, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import DetailCard from "../../DetailComponent/DetailCard";
import Edit from "../../DetailComponent/DetailEdit";
import LineThrough from "../../DetailComponent/LineThrough";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../DataConfig/firestore";
import Cookies from "js-cookie";
import DetailEdit from "../../DetailComponent/DetailControl";
import { User } from "tabler-icons-react";
const Detail = () => {
  const [user, setUser] = useState([]);
  const [newImage, setNewImage] = useState([]);
  const [opened, { open, close }] = useDisclosure(false);
  const [edit, setEdit] = useState(false);
  useEffect(() => {
    console.log(edit);
  });
  const date = new Date().toLocaleString("en-GB", {
    hour12: true,
    hour: "2-digit",
    minute: "2-digit",
  });
  console.log(user.date);
  // const dateObj = new Date(user.date.seconds * 1000);
  // console.log(dateObj);
  const UserId = useParams();
  const storage = JSON.parse(Cookies?.get("Info"));
  const userDocName = storage.email;
  console.log(UserId.id);
  const UserRef = doc(db, userDocName, UserId.id);

  const UserData = async () => {
    try {
      const data = await getDoc(UserRef);
      setUser(data?.data());
    } catch (e) {
      console.error(e);
    }
  };
  useEffect(() => {
    UserData();
  }, [edit]);
  console.log(user?.imageUrl);
  const submit = () => {
    confirmAlert({
      title: "You have unsaved changes",
      message: "Are you sure you want to discard your unsaved changes?",
      buttons: [
        {
          label: "Discard",
          onClick: () => setEdit(!edit),
        },
        {
          label: "Cancel",
          onClick: () => setEdit(edit),
        },
      ],
    });
  };
  console.log(user?.imageUrl);
  return (
    <div className="w-[80%] min-h-full lg:px-8 md:px-4">
      <div className="flex items-end justify-between pb-6 relative">
        <div className="py-5 px-3 flex flex-row gap-10">
          {!edit ? (
            <Link to={"/"} className=" cursor-pointer">
              <h3>
                <BsArrowLeft className="text-xl font-semibold" />
              </h3>
            </Link>
          ) : (
            <>
              <Link
                onClick={(e) => {
                  e.stopPropagation();
                  if (edit) {
                    submit();
                  }
                }}
                className=" cursor-pointer"
              >
                <h3>
                  <RxCross2 className="text-xl font-semibold" />
                </h3>
              </Link>
            </>
          )}
          <div className="flex gap-5 items-center">
            <div className="">
              <div
                className=" sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:h-[170px] lg:w-[170px] overflow-hidden rounded-full cursor-pointer"
                onClick={open}
              >
                {/* image condition sis ya ml */}
                {user?.imageUrl === "" ? (
                  <div className="flex items-center justify-center sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:h-[170px] lg:w-[170px] object-cover">
                    <h2 className=" uppercase text-xl font-medium text-black">
                      {user?.name?.charAt(0)}
                    </h2>
                  </div>
                ) : (
                  <img
                    src={user.imageUrl}
                    alt=""
                    className=" sm:w-[90px] sm:h-[90px] md:w-[130px] md:h-[130px] lg:h-[170px] lg:w-[170px] object-cover"
                  />
                )}
              </div>
            </div>
            <Modal
              onClose={close}
              opened={opened}
              centered
              title={<h3 className="text-lg font-semibold">Photo</h3>}
              transitionProps={{
                transition: "fade",
                duration: 400,
                timingFunction: "linear",
              }}
              radius={"0.7rem"}
            >
              <div className="p-5">
                <div className="flex flex-col justify-center items-center mx-auto rounded-full h-[170px] w-[170px] overflow-hidden">
                  <img
                    src={user?.imageUrl}
                    alt=""
                    className="h-[170px] w-[170px] object-cover"
                  />
                </div>
                <div className="text-center mt-5">
                  <h3 className="text-lg font-semibold">{user.name}</h3>
                  <p>{user.email}</p>
                  <div className="flex justify-center mt-5">
                    <TextInput
                      value={newImage}
                      onChange={(e) => setNewImage(e.target.value)}
                      placeholder="Upload New Image"
                    />
                  </div>
                </div>
              </div>
            </Modal>
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold ">{user.name}</h3>
              {/* <a
                href="tel:09-9729374073"
                className="text-gray-500 font-medium text-sm"
              >
                09-9729374073
              </a> */}
              <p className="text-gray-700 font-medium text-sm mt-1">
                {user.job}
              </p>
            </div>
          </div>
        </div>
        <DetailEdit edit={edit} setEdit={setEdit} />
      </div>
      {!edit ? (
        <div className="mt-5">
          <LineThrough user={user} />
          <div className="flex justify-between gap-10 w-[80%] mt-16">
            <DetailCard user={user} />
            <div className="">
              <h3 className="text-lg text-gray-800 flex items-center gap-1">
                History <AiOutlineQuestionCircle className="text-gray-500" />
              </h3>
              <p className="">
                Last edited :{" "}
                <span className="text-gray-700">{`Today,${date}`}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-5">
          <Edit user={user} edit={edit} setEdit={setEdit} />
        </div>
      )}
    </div>
  );
};
export default Detail;
