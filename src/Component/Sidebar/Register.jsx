import { PasswordInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useRegisterMutation } from "../../app/Authapi";

const Register = () => {
  const notify = () => toast("Here is your toast.");

  const [register, { isError, isLoading, isSuccess, isUninitialized }] =
    useRegisterMutation();
  const nav = useNavigate();
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validate: {
      name: (value) =>
        value.length < 4 ? "Name must have at least 4 letters" : null,

      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      password: (value) =>
        value.length < 8 ? "Password must have at least 8 letters" : null,
      // email: isEmail,
    },
  });
  // const localStorage =

  return (
    <div className="  h-screen flex justify-center  items-center">
      <div className="border-2 shadow-xl w-[1000px] p-10 rounded-md flex justify-around  items-center">
        <form
          onSubmit={form.onSubmit(async (values) => {
            try {
              const { data } = await register(values);
              console.log(data);
              console.log(values);
              notify();
              if (data?.success) {
                nav("/login");
              }
            } catch (error) {
              console.log(error);
            }
          })}
          className=" w-[40%] flex flex-col gap-7"
        >
          <p className=" text-4xl font-extrabold">Sing Up</p>
          <div className="  flex items-center gap-5">
            <label htmlFor="">
              <BsFillPersonFill className=" text-2xl" />
            </label>
            <TextInput
              className=" w-[100%]   "
              {...form.getInputProps("name")}
              placeholder="Your Name"
            />
          </div>
          <div className=" w-[100%] flex items-center gap-5">
            <label htmlFor="">
              <MdEmail className=" text-2xl" />
            </label>
            <TextInput
              className=" w-[100%]   "
              {...form.getInputProps("email")}
              placeholder="Your Email"
            />
          </div>
          <div className=" flex items-center gap-5">
            <label htmlFor="">
              <RiLockPasswordFill className=" text-2xl" />
            </label>
            <PasswordInput
              className=" w-[100%] "
              {...form.getInputProps("password")}
              placeholder="Password "
            />
          </div>
          <div className=" flex items-center gap-5">
            <label htmlFor="">
              <RiLockPasswordFill className=" text-2xl" />
            </label>
            <PasswordInput
              className=" w-[100%]   "
              {...form.getInputProps("password_confirmation")}
              placeholder="Password confirmation"
            />
          </div>
          <div>
            <button
              type="submit"
              className=" bg-blue-600 px-7 py-2 text-white rounded"
            >
              register
            </button>
          </div>
        </form>
        <div className=" w-[20%]"></div>
      </div>
    </div>
  );
};

export default Register;
