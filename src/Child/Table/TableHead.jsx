import React from 'react'

const TableHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="">
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]">
          Profile
        </th>
        <th className="px-3 py-5 font-semibold tracking-wide flex justify-center sm:justify-start md:justify-start lg:justify-start xl:justify-start 2xl:justify-start items-center text-[#357686b7]">
          Name
        </th>
        <th className="px-3 py-5 hidden sm:hidden md:hidden lg:table-cell xl:table-cell 2xl:table-cell tracking-wide text-left text-[#357686b7]">
          Email
        </th>
        <th className="px-3 py-5 hidden sm:hidden md:hidden lg:table-cell xl:table-cell 2xl:table-cell tracking-wide text-left text-[#357686b7]">
          Location
        </th>
        <th className="px-3 py-5 hidden sm:hidden md:hidden lg:hidden xl:table-cell 2xl:table-cell font-semibold tracking-wide text-left text-[#357686b7]">
          Job
        </th>
        <th className="px-3 py-5 hidden sm:table-cell md:table-cell lg:table-cell xl:table-cell 2xl:table-cell font-semibold tracking-wide text-left text-[#357686b7]">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default TableHead