import { TextInput, Textarea } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import {
  BsCalendar,
  BsFlag,
  BsPerson,
  BsTelephone,
  BsPersonWorkspace,
} from "react-icons/bs";
const Edit = ({ edit, setEdit, user }) => {
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
  return (
    <div className="">
      <form className="flex flex-col gap-4 w-[70%] border rounded-md p-3">
        <div className="flex justify-between gap-5">
          <TextInput
            placeholder={"First name"}
            icon={<BsPerson />}
            label="First Name"
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
          onClick={() => {
            alert("Are you sure?");
            setEdit(!edit);
          }}
          className="px-3 py-1 text-sm bg-blue-600 rounded w-20 text-white font-semibold"
        >
          Change
        </button>
      </form>
    </div>
  );
};
export default Edit;