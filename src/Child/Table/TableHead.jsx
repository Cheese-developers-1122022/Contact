import React from 'react'

const TableHead = () => {
  return (
    <thead className="bg-gray-50">
      <tr className="">
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]"></th>
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]">
          Name
        </th>
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]">
          Email
        </th>
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]">
          Location
        </th>
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]">
          Job
        </th>
        <th className="px-3 py-5 font-semibold tracking-wide text-left text-[#357686b7]">
          Action
        </th>
      </tr>
    </thead>
  );
}

export default TableHead