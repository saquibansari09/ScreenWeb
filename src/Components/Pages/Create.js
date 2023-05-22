import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Create = () => {
  return (
    <section className="">
      <div className="bg-sky-600 h-[40px] w-[100%]">
        <h1 className="text-2xl font-bold px-5">Company Creation</h1>
      </div>
      <div className="flex ">
        <p className="text-lg px-5 mt-2">Company Data path</p>
        <p className="mt-2 font-bold">:Y:\Data</p>
      </div>
      <hr />

      <div className="flex lg:flex justify-start px-20 gap-10">
        <div className="mt-3">
          <label className="mt-2 text-xl">Company Name:</label>
          <input className="bg-gray-200 ml-12 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
        </div>
        <div>
          <p>
            Financial year beginning from
            <br /> Books beginning from
          </p>
        </div>
        <div className="text-sm font-bold">
          <p>:1-Apr-23</p>
          <p>:1-Apr-23</p>
        </div>
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Mailing Name:</label>
        <input className="bg-gray-200 ml-16 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Address:</label>
        <input className="bg-gray-200 ml-28 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className=" flex px-20 mt-3">
        <label className=" text-xl">State:</label>
        <div className="ml-36 mt-2">
          <p className="font-bold">Not Applicable</p>
        </div>
      </div>
      <div className=" flex px-20 ">
        <label className="text-xl">Country:</label>
        <div className="ml-36 mt-2">
          <p className="font-bold">India</p>
        </div>
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Pincode:</label>
        <input className="bg-gray-200 ml-28 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Telephone:</label>
        <input className="bg-gray-200 ml-24 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Mobile:</label>
        <input className="bg-gray-200 ml-32 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Fax:</label>
        <input className="bg-gray-200 ml-40 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">E-mail:</label>
        <input className="bg-gray-200 ml-32 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <div className="px-20 mt-3">
        <label className="mt-2 text-xl">Website:</label>
        <input className="bg-gray-200 ml-28 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
      </div>
      <hr className="px-20" />
      <div className="flex gap-10 px-20 text-xl">
        <p>Base Curruncy symbole:</p>
        <span>
          {" "}
          <BsCurrencyRupee className="text-2xl" />
        </span>
      </div>
      <div className="flex gap-10 px-20 text-xl">
        <p className="text-xl">Formal name:</p>
        <span>INR</span>
      </div>
    </section>
  );
};

export default Create;
