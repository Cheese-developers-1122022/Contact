import React from "react";
import { useNavigate } from "react-router-dom";

const SearchCard = (props) => {
  const { name, email, phoneNumber, id ,imageUrl} = props;
  const navigate = useNavigate();
  const detailLink = (e) => {
    navigate(`/details/${id}`);
  };
  return (
    <div onClick={detailLink} className="border-[px] flex flex-col gap-2">
      <>
        {imageUrl ? (
          <div className="w-10 h-10 border-2 border-[#D8D8D8] hover:border-blue-500 rounded-full overflow-hidden">
            <img
              src={imageUrl}
              className=" w-10 h-10 object-cover object-center"
              alt=""
            />
          </div>
        ) : (
          <div className="flex items-center justify-center bg-gray-300 rounded-full w-10 h-10 border-2 border-[#acacac] hover:border-blue-500">
            <h2 className=" uppercase text-2xl font-semibold  text-black">
              {name?.charAt(0)}
            </h2>
          </div>
        )}
      </>
      <div className="">
        <h2 className="">{name}</h2>
        <h2 className="">{email}</h2>
        <h2 className="">{phoneNumber}</h2>
      </div>
    </div>
  );
};

export default SearchCard;
