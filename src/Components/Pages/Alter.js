import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Alter = () => {
  return (
    <section className="">
      <div className="w-[100%] h-[25px] bg-sky-400 ">
        <h1 className="text-base ml-3">Company Creation</h1>
      </div>

      <div className="flex flex-row text-justify gap-10 mt-5">
        <label className="ml-3  text-sm mt-3">Company Name:</label>
        <input className="bg-gray-200   appearance-none border-2   py-2 px-4 focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
        <p>
          Financial year beginning from <br /> Books beginning from
        </p>
        <p>
          :1.Apr-23
          <br /> :1.Apr.23
        </p>
      </div>

      <div className="flex gap-7 mt-5">
        <label className="mt-2 ml-3 text-sm">Company Name:</label>
        <input className="bg-gray-200  appearance-none border-2 text-black   py-2 px-4 focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>

      <div className=" flex gap-10 mt-5">
        <label className="mt-2 text-sm ml-3">Mailing Name:</label>
        <input
          type="text"
          className="bg-gray-200 appearance-none border-2  py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400"
        />
      </div>
      <div className="flex gap-20 mt-5">
        <label className="mt-2 text-sm ml-3">Address: </label>
        <input className="bg-gray-200  appearance-none border-2  py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="flex gap-24 mt-5">
        <label className="mt-2 text-sm ml-3 gap-10">State:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>

      <div className="flex gap-20 mt-5">
        <label className="mt-2 text-sm ml-3">Country:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="mt-5 flex gap-20">
        <label className="mt-2 text-sm ml-3">Pincode:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" mt-5 flex gap-16">
        <label className="mt-2 text-sm ml-3">Telephone:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="mt-5 flex gap-20">
        <label className="mt-2 text-sm ml-3">Mobile:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className=" mt-5 flex gap-28">
        <label className="mt-2 text-sm ml-3">Fax:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="mt-5 flex gap-24">
        <label className="mt-2 text-sm ml-3">E-mail:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="mt-5 flex gap-20">
        <label className="mt-2 text-sm ml-3">Website:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <hr className="" />
      <div className="flex gap-10  text-sm ml-3">
        <p>Base Curruncy symbole:</p>
        <span>
          {" "}
          <BsCurrencyRupee className="text-2xl" />
        </span>
      </div>
      <div className="flex gap-10 text-sm ml-3">
        <p className="text-sm ">Formal name:</p>
        <span>INR</span>
      </div>
    </section>
  );
};

export default Alter;
