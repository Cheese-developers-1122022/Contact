import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../DataConfig/firestore";
import Cookies from "js-cookie";

const ContactCreate = () => {
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
  const userData = JSON.parse(Cookies.get("Info"));
  const userEmail = userData.email;
  console.log(userEmail);
  const contactData = collection(db, userEmail);
  const addContact = async (e) => {
    e.preventDefault();
    try {
      await addDoc(contactData, {
        name,
        email,
        company,
        date,
        job,
        phoneNumber,
        address,
        note,
        imageUrl,
      });
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="h-screen w-screen bg-white dark:bg-black flex justify-center">
      <form
        onSubmit={addContact}
        className="flex flex-col gap-3 justify-center"
      >
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="text"
          placeholder="Company"
          onChange={(e) => setCompany(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="date"
          placeholder=""
          onChange={(e) => setDate(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="text"
          placeholder="Job"
          onChange={(e) => setJob(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="tel"
          placeholder="PhoneNumber"
          onChange={(e) => setPhoneNumber(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => setAddress(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="text"
          placeholder="ImageUrl"
          onChange={(e) => setImageUrl(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <input
          type="text"
          placeholder="Note"
          onChange={(e) => setNote(e.target.value)}
          className=" p-2  bg-slate-300 text-white border-[1px] border-[#151515] rounded"
        />
        <button
          type="submit"
          className=" px-3 py-2 font-sans font-semibold text-white bg-blue-700"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default ContactCreate;
