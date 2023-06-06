import React, { useEffect, useState } from "react";
import ContactList from "../../Child/ContactList";
import Recently from "../../Child/Recently";
import { useSelector } from "react-redux";

const Contacts = () => {
  const [user, setUser] = useState([]);
  const data = useSelector((state) => state.light.users);

  const filterFav = data?.filter((item) => item.fav === true);
  useEffect(() => {
    setUser(filterFav);
  }, [data]);

  console.log(user);

  return (
    <div className=" flex flex-col gap-5">
      {user.length ? (
        <div className=" mt-5">
          <h3 className="text-2xl text-blue-800 font-semibold mb-5 ml-5">
            Favorite
          </h3>
          <Recently />
        </div>
      ) : (
        <div className=""></div>
      )}
      <div className="mt-4">
        <h3 className="text-2xl text-blue-800 font-semibold mb-5 ml-5">
          Contact Lists
        </h3>
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
