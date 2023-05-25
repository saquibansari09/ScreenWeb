import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Alter = () => {
  return (
    <section className="">
      <div className="bg-sky-300 h-[30px] w-[100%]">
        <h1 className="text-xl font-semibold ml-3">Company Creation </h1>
      </div>
      <div className="flex gap-4 ml-3 mt-2">
        <h1 className="text-xs">Company Data Path</h1>
        <p className="text-xs font-semibold">:\Data</p>
      </div>
      <hr />
      <div className="grid lg:grid-cols-3 mt-4 justify-start gap-5">
        <div className=" ml-3">
          <label className=" text-sm ">Company Name: </label>
          <input className="bg-gray-200 ml-8 appearance-none border-2 shadow hover:shadow-2xl  py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
        </div>
        <div>
          <p>
            Financial year beginning from
            <br /> Books beginning from
          </p>
        </div>
        <div className="text-sm font-semibold">
          <p>
            :1-Apr-23
            <br />
            :1-Apr-23
          </p>
        </div>
      </div>
      <div className=" flex gap-10 ml-3 mt-4">
        <label className="mt-2 text-sm mr-1 ">Mailing Name:</label>
        <input
          type="text"
          className="bg-gray-200 appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400"
        />
      </div>
      <div className="flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm">Address: </label>
        <input className="bg-gray-200  appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-24 mt-5  ml-3">
        <label className="mt-2 text-sm gap-10">State:</label>
        <input className="bg-gray-200  appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>

      <div className="flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm ">Country:</label>
        <input className="bg-gray-200  appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm ">Pincode:</label>
        <input className="bg-gray-200  appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" flex gap-16 mt-5 ml-3">
        <label className="mt-2 text-sm ">Telephone:</label>
        <input className="bg-gray-200 appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm mr-2">Mobile:</label>
        <input className="bg-gray-200  appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-24 mt-5 ml-3">
        <label className="mt-2 text-sm mr-4">Fax:</label>
        <input className="bg-gray-200  appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm mr-3">E-mail:</label>
        <input className="bg-gray-200 appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-16 mt-5 ml-3 mb-5">
        <label className="mt-2 text-sm mr-3">Website:</label>
        <input className="bg-gray-200 appearance-none border-2 shadow hover:shadow-2xl py-1 px-10 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <hr className="" />
      <div className="flex gap-10 ml-3 ">
        <p className="text-sm">Base Curruncy symbole:</p>
        <span>
          <BsCurrencyRupee className="text-sm mt-2" />
        </span>
      </div>
      <div className="flex gap-10 ml-3 ">
        <p className="text-sm">Formal name:</p>
        <span className="text-sm ml-14">INR</span>
      </div>
    </section>
  );
};

export default Alter;
