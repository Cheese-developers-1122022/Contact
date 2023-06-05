import { TextInput, Textarea } from "@mantine/core";
import React, { useRef } from "react";
import { AiOutlineSend } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
const Form = ({ close }) => {
  const form = useRef();
  // const [res, setRes] = useState(null);
  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        "service_7g0eywj",
        "template_7qnrxoi",
        form.current,
        "Ebu4oArSdzC-7RLH3"
      );
      if (result.text === "OK") {
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal.stopTimer);
            toast.addEventListener("mouseleave", Swal.resumeTimer);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Message sent successfully",
        });
      }
    } catch (error) {
      console.error(error.text);
    }
  };
  const buttonHandler = () => {
    return toast("Message sent successfully");
  };
  return (
    <form
      ref={form}
      className="flex flex-col justify-center mx-auto w-80 gap-3 p-5"
      onSubmit={sendEmail}
    >
      <TextInput label="Name" name="name" placeholder="Name" required />
      <TextInput
        mt="md"
        label="Email"
        name="email"
        type="email"
        placeholder="Email"
        required
      />
      <Textarea
        mt="md"
        label="Message"
        name="message"
        type="text"
        placeholder="Message"
        required
      />
      <div className="mt-5">
        <button
          type="submit"
          onClick={() => {
            close();
            sendEmail();
          }}
          className="flex btn-send items-center gap-1 px-4 py-1 text-sm bg-[#5097c7d2] hover:bg-[#5c96b8e5] transition duration-500 text-white"
        >
          Send <AiOutlineSend className="send-icons" />
        </button>
      </div>
    </form>
  );
};
export default Form;
