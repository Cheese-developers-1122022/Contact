import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../DataConfig/firestore";
import Cookies from "js-cookie";
import { useDisclosure } from "@mantine/hooks";
import { Modal } from "@mantine/core";
import { GrClose } from "react-icons/gr";
import { BiImageAdd, BiPencil } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";
import toast, { Toaster } from "react-hot-toast";
// import {
//   IconUser,
//   IconNotes,
//   IconMailFilled,
//   IconCalendar,
//   IconPhone,
//   IconBuildingSkyscraper,
//   IconMapPinFilled,
// } from "tabler-icons-react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import "react-phone-number-input/style.css";
// import "./CreateContact.css";
import { TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { Loader } from "@mantine/core";
import moment from "moment";
const ContactCreate = () => {
  const [load, setLoad] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [date, setDate] = useState("");
  const [job, setJob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const userToken = Cookies?.get("User");
  const [opened, { open, close }] = useDisclosure(false);
  const userData = JSON.parse(Cookies.get("Info"));
  const userEmail = userData.email;
  const navigate = useNavigate();
  console.log(userEmail);
  const handleEdit = () => {
    const inputElement = document.getElementById("upload");
    inputElement.click();
    close();
  };

  const handleDelete = () => {
    setImage(null);
    close();
  };
  console.log(imageUrl);
  const contactData = collection(db, userEmail);
  const addContact = async (e) => {
    setLoad(false);
    e.preventDefault();
    try {
      await addDoc(contactData, {
        name,
        email,
        company,
        date: moment(date).format("LL"),
        job,
        phoneNumber,
        address,
        note,
        imageUrl: JSON.stringify(imageUrl),
      });
      
      toast.success("Successfully!");
    navigate("/")
    } catch (e) {
      console.error(e);
      setLoad(true);
    }
  };
  console.log(date);

  return (
    <div className="relative w-screen flex  flex-col p-5 md:items-center ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="  flex justify-between items-end  md:self-start p-3">
        <div className=" md:hidden">
          <Link to={"/"}>
            <button className="text-lg  close-btn">
              <GrClose className="" />
            </button>
          </Link>
        </div>
        <div className=" md:hidden">
          <Link>
            <button
              onClick={addContact}
              className={` text-white bg-blue-500 rounded-md px-5 py-1`}
            >
              Create
            </button>
          </Link>
        </div>
      </div>
      <hr className=" text-gray-900 md:hidden" />
      <div className=" flex flex-col items-center md:items-baseline gap-5 mt-5 md:mt-3">
        <div>
          <div className="mb-3 hidden md:block">
            <Link to={"/"}>
              <button className=" text-lg absolute top-6 left-6   close-btn">
                <GrClose className=" " />
              </button>
            </Link>
          </div>
          <div
            className={`${
              imageUrl ? "bg-none" : "bg-sky-200"
            } w-32 h-32 border md:w-40 md:h-40 rounded-[5rem] relative flex items-center justify-center`}
          >
            <label htmlFor="upload" className="cursor-pointer">
              <input
                id="upload"
                type="file"
                className="hidden"
                onChange={(e) => setImageUrl(e.target.files[0])}
              />
              {imageUrl ? (
                <img
                  src={URL.createObjectURL(imageUrl)}
                  alt="Selected image"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-[5rem] object-cover"
                />
              ) : (
                <div>
                  <BiImageAdd className=" text-4xl" />
                </div>
              )}
            </label>
            <div>
              <div
                className={`${
                  imageUrl ? "block" : "hidden"
                } absolute float-right bottom-2 right-2 `}
              >
                <button
                  className=" w-8 h-8 border  flex items-center justify-center  bg-white rounded-[3rem] "
                  onClick={open}
                >
                  <BiPencil className="text-blue-600" />
                </button>
              </div>
              <div className={`${imageUrl ? { close } : ""}`}>
                <Modal
                  opened={opened}
                  onClose={close}
                  title="Edit"
                  centered
                  size={250}
                >
                  <div className=" bg-white rounded-md  ">
                    <div className=" flex flex-col gap-3 ">
                      <div
                        className=" flex gap-3 items-center hover:bg-gray-200 p-3"
                        onClick={handleEdit}
                      >
                        <BiImageAdd className=" text-gray-500 text-lg" />
                        <h4>Change picture</h4>
                      </div>
                      <div
                        className=" flex gap-3 items-center hover:bg-gray-200 p-3"
                        onClick={handleDelete}
                      >
                        <BsTrash className="text-gray-500 text-lg" />
                        <h4>Delete picture</h4>
                      </div>
                    </div>
                  </div>
                </Modal>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action="" onSubmit={addContact}>
            <div>
              <TextInput
                type="text"
                label="Name"
                // icon={<IconUser />}
                className=" w-[300px] md:w-[500px] lg:w-[550px] "
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
              />
            </div>
            <div className="mt-3">
              <TextInput
                type="tel"
                label="Phone number"
                // icon={<IconPhone />}
                className=" w-[300px] md:w-[500px] lg:w-[550px]"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
            <div className="mt-3">
              <TextInput
                type="text"
                label="Email"
                // icon={<IconMailFilled />}
                className="   w-[300px] md:w-[500px] lg:w-[550px]"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
            </div>
            <div className="mt-3">
              <TextInput
                type="text"
                label="Address"
                // icon={<IconMapPinFilled />}
                className="   w-[300px] md:w-[500px] lg:w-[550px]"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Address"
              />
            </div>
            <div className="mt-3">
              <DateInput
                type="text"
                label="Birthday"
                // icon={<IconCalendar />}
                valueFormat="DD/MM/YYYY "
                className="w-[300px] md:w-[500px] lg:w-[550px]"
                value={date}
                onChange={(date) => setDate(date)}
                placeholder="Birthday"
              />
              <p className="text-gray-500 mt-1">DD/MM/YY</p>
            </div>
            <div className="mt-3 ">
              <TextInput
                type="text"
                label="Job"
                // icon={<IconBuildingSkyscraper />}
                className=" w-[300px] md:w-[500px] lg:w-[550px]"
                value={job}
                onChange={(e) => setJob(e.target.value)}
                placeholder="Job"
              />
            </div>
            <div className=" mt-3">
              <TextInput
                type="text"
                label="Note"
                // icon={<IconNotes />}
                className=" w-[300px] md:w-[500px] lg:w-[550px]"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Add note"
              />
            </div>
            <>
              {load ? (
                <button
                  type="submit"
                  className=" px-6 py-2 text-white rounded-md  bg-blue-500 hover:bg-blue-600 mt-5 hidden md:block "
                >
                  Create Contact
                </button>
              ) : (
                <button className=" px-6 py-2 text-white rounded-md  bg-blue-500 hover:bg-blue-600 mt-5 hidden md:block  disabled:bg-blue-400">
                  <Loader color="red" size="sm" variant="dots" />
                </button>
              )}
            </>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactCreate;
