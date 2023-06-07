import { Table } from "@mantine/core";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import TableHead from "../../Child/Table/TableHead";
import TableData from "../../Child/Table/TableData";

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
    <div className=" overflow-y-scroll h-[400px] overflow-hidden scroll">
      <Table className="w-full dark:bg-gray-700">
        <TableHead />
        <tbody className="" onClick={tbody}>
          {filterData?.map((data) => (
            <TableData key={data.id} {...data} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Search;
