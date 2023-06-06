import { TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsCalendar,
  BsFlag,
  BsPerson,
  BsTelephone,
  BsPersonWorkspace,
} from "react-icons/bs";
import { db } from "../DataConfig/firestore";
import { doc, updateDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import moment from "moment";
const Edit = ({ edit, setEdit, user }) => {
  const storage = JSON?.parse(Cookies?.get("Info"));
  console.log(user?.id);
  console.log(storage);
  const userDocName = storage?.email;
  const UserId = useParams();
  console.log(UserId.id);
  const updateDocRef = doc(db, userDocName, UserId.id);

  console.log(user);
  const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [telephone, setTelephone] = useState(null);
  const [birthday, setBirthday] = useState(null);
  const [job, setJob] = useState("");
  const [note, setNote] = useState("");
  const handleDateChange = (date) => {
    setBirthday(date);
  };
  useEffect(() => {
    setFirstName(user?.name);
    setEmail(user?.email);
    // setBirthday(user?.date);
    setJob(user?.job);
    setTelephone(user?.phoneNumber);
    setNote(user?.note);
    setCountry(user?.address);
  }, [user]);
  const formSubmit = async (e) => {
    e.preventDefault();
    alert("Are you sure?");
    try {
      await updateDoc(updateDocRef, {
        name: firstName,
        email,
        address: country,
        phoneNumber: telephone,
        job,
        note,
       date: moment(birthday).format("LL"),
      });
      setEdit(!edit);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(user.date)
  return (
    <div className="">
      <form className="flex flex-col gap-4 w-[70%] border rounded-md p-3">
        <div className="flex justify-between gap-5">
          <TextInput
            placeholder={"Name"}
            icon={<BsPerson />}
            label="Name"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full"
          />
          {/* <TextInput
            placeholder="Last Name"
            label="Last Name"
            type="text"
            icon={<BsPerson />}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full"
          /> */}
          <TextInput
            placeholder="your@gmail.com"
            icon={<AiOutlineMail />}
            label="Gmail"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            className="w-full"
          />
        </div>
        <TextInput
          type="number"
          placeholder="Phone"
          label="Phone"
          icon={<BsTelephone />}
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        <TextInput
          label="Country"
          placeholder="Country"
          icon={<BsFlag />}
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <DateInput
          label="Birthday"
          icon={<BsCalendar />}
          placeholder="YYYY-MM-DD"
          value={birthday}
          onChange={handleDateChange}
        />
        <TextInput
          label="Job"
          placeholder="Job"
          icon={<BsPersonWorkspace />}
          type="text"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
        <Textarea
          label="Note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button
          type="submit"
          onClick={formSubmit}
          className="px-3 py-1 text-sm bg-blue-600 rounded w-20 text-white font-semibold"
        >
          Change
        </button>
      </form>
    </div>
  );
};
export default Edit;
