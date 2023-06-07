import { Table } from "@mantine/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchCard from "./SearchCard";

const Search = () => {
  const tbody = (e) => {
    e.stopPropagation();
  };

  const location = useLocation();
  const { search } = location?.state;
  const [user, setUser] = useState([]);
  const data = useSelector((state) => state.light.users);
  const filterData = data?.filter((item) =>
    item?.name.toLowerCase().includes(search)
  );
  console.log(filterData);
  return (
    <div className="flex justify-around flex-wrap gap-5">
      {filterData?.map((data) => (
        <SearchCard key={data.id} {...data} />
      ))}
    </div>
  );
};

export default Search;
