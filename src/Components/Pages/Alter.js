import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Alter = () => {
  return (
    <section className="">
      <div className="bg-sky-600 h-[40px] w-[100%]">
        <h1 className="text-2xl font-bold px-5">Company </h1>
      </div>
      <div className="grid lg:grid-cols-3 justify-start gap-10">
        <div className=" mt-5 ml-3">
          <label className=" text-sm ">Company Name: </label>
          <input className="bg-gray-200 ml-8 appearance-none border-2  py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
        </div>
        <div className="mt-5">
          <p className="">
            Financial year beginning from
            <br /> Books beginning from
          </p>
        </div>
        <div className="text-sm font-semibold mt-5">
          <p>
            :1-Apr-23
            <br />
            :1-Apr-23
          </p>
        </div>
      </div>
      <div className=" flex gap-10  mt-3 ml-3">
        <label className="mt-2 text-sm mr-1 ">Mailing Name:</label>
        <input
          type="text"
          className="bg-gray-200 appearance-none border-2 border-text-black py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400"
        />
      </div>
      <div className="flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm">Address: </label>
        <input className="bg-gray-200  appearance-none border-2 border-text-black   py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-24 mt-5  ml-3">
        <label className="mt-2 text-sm gap-10">State:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>

      <div className="flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm ">Country:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm ">Pincode:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" flex gap-16 mt-5 ml-3">
        <label className="mt-2 text-sm ">Telephone:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm mr-2">Mobile:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-24 mt-5 ml-3">
        <label className="mt-2 text-sm mr-4">Fax:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" flex gap-20 mt-5 ml-3">
        <label className="mt-2 text-sm mr-3">E-mail:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-16 mt-5 ml-3">
        <label className="mt-2 text-sm mr-3">Website:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <hr className="" />
      <div className="flex gap-10 ml-3 ">
        <p className="text-sm">Base Curruncy symbole:</p>
        <span>
          {" "}
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
