import { addDoc, collection } from "firebase/firestore";
import React, { useRef } from "react";
import { db } from "./DataConfig/firestore";
const Login = () => {
  const userCollection = collection(db, "User3");
  const nameRef = useRef();
  const emailRef = useRef();
  const AddressRef = useRef();
  const phoneNumberRef = useRef();
  const Name = nameRef?.current?.value;
  const Email = emailRef?.current?.value;
  const phoneNumber = phoneNumberRef?.current?.value;
  const address = AddressRef?.curre?.value;
  const formHandler = async (e) => {
    e.preventDefault();

    try {
      await addDoc(userCollection, {
        Name,
        Email,
        phoneNumber,
        address,
      });
    } catch (e) {
      console.error(e);
    }
  };
  console.log(Name);
  console.log(Email);
  console.log(phoneNumber);
  console.log(address);
  return (
    <div className=" ">
      <form onSubmit={formHandler}>
        <div className="flex flex-col gap-4">
          <input type="text" ref={nameRef} className="p-4" placeholder="Name" />
          <input
            type="text"
            ref={emailRef}
            className="p-4"
            placeholder="Email"
          />
          <input
            type="text"
            ref={AddressRef}
            className="p-4"
            placeholder="Address"
          />
          <input
            type="text"
            ref={phoneNumberRef}
            className="p-4"
            placeholder="PhoneNumber"
          />
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
