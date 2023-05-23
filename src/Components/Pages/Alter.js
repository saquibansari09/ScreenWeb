import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Alter = () => {
  return (
    <section className="">
      <div className="bg-sky-600 h-[40px] w-[100%]">
        <h1 className="text-2xl font-bold px-5">Company Alteration</h1>
      </div>
      <div className="flex lg:flex justify-start gap-10">
        <div className="flex gap-7 mt-5">
          <label className="mt-2 ml-3 text-sm">Company Name:</label>
          <input className="bg-gray-200  appearance-none border-2   py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
        </div>
        <div className="mt-5">
          <p className="">
            Financial year beginning from
            <br /> Books beginning from
          </p>
        </div>
        <div className="text-sm font-bold mt-5">
          <p>
            :1-Apr-23
            <br />
            :1-Apr-23
          </p>
        </div>
      </div>
      <div className=" flex gap-10 mt-5">
        <label className="mt-2 text-sm ml-3">Mailing Name:</label>
        <input
          type="text"
          className="bg-gray-200 appearance-none border-2 border-sky-400 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400"
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
      <div className=" mt-5 flex gap-24">
        <label className="mt-2 text-sm ml-3">Fax:</label>
        <input className="bg-gray-200  appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="mt-5 flex gap-20">
        <label className="mt-2 text-sm ml-3">E-mail:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <div className="mt-5 flex gap-16">
        <label className="mt-2 text-sm ml-3">Website:</label>
        <input className="bg-gray-200 appearance-none border-2 py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-sky-400" />
      </div>
      <hr className="" />
      <div className="flex gap-10 px-20 text-xl">
        <p>Base Curruncy symbole:</p>
        <span>
          {" "}
          <BsCurrencyRupee className="text-2xl" />
        </span>
      </div>
      <div className="flex gap-10 text-xl">
        <p className="text-xl pl-20">Formal name:</p>
        <span>INR</span>
      </div>
    </section>
  );
};

export default Alter;
