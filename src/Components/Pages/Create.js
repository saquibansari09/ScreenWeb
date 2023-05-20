import React from "react";
import { BsCurrencyRupee } from "react-icons/bs";

const Create = () => {
  return (
    <section>
      <div className=" w-[100%] h-[100vh]">
        <h1 className="pl-5 bg-sky-500 text-lg text-black">Company Creation</h1>
        <div className="flex gap-5 pt-3 ">
          <p className="pl-5 text-base">Company Data Path</p>
          <p className="text-base">:Y:\Data</p>
        </div>
        <hr className="w-[100%] " />
        <form>
          <div className="lg:flex  px-5  mb-4">
            <p>Company Name:</p>
            <input className="bg-gray-200 ml-8 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
            <p className="ml-10">
              Financial year Beginning from <br /> Books beginning from
            </p>
            <p className="ml-10">
              :April-23 <br />
              :April-23
            </p>
          </div>
          <div className="lg:flex  px-5">
            <p>Mailing Name:</p>
            <input className="bg-gray-200 ml-12 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:outline-none focus:bg-yellow-400 focus:border-purple-500" />
          </div>
          <div className="lg:flex  px-5 mt-4">
            <p>Address:</p>
            <input className="bg-gray-200 ml-24 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
          <div className="lg:flex  px-5 mt-3">
            <p>State:</p>
            <p className="pl-32 font-bold">Not Applicable</p>
          </div>
          <div className="lg:flex  px-5 mt-3">
            <p>Country</p>
            <p className="pl-28 font-bold">India</p>
          </div>
          <div className="lg:flex  px-5 mt-4">
            <p>Pincode</p>
            <input className="bg-gray-200 ml-24 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
          <div className="lg:flex  px-5 mt-4">
            <p>Telephone</p>
            <input className="bg-gray-200 ml-20 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
          <div className="lg:flex  px-5 mt-4">
            <p>Mobile</p>
            <input className="bg-gray-200 ml-28 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
          <div className="lg:flex  px-5 mt-4">
            <p>Fax</p>
            <input className="bg-gray-200 ml-32 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
          <div className="lg:flex px-5 mt-4">
            <p>E-mail</p>
            <input className="bg-gray-200 ml-24 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
          <div className="lg:flex  px-5 mt-4 pb-10">
            <p>Website</p>
            <input className="bg-gray-200 ml-20 appearance-none border-2 border-gray-200 rounded w-[300px] py-2 px-4 text-gray-700  focus:bg-yellow-400 focus:outline-none  focus:border-purple-500" />
          </div>
        </form>
        <div className="flex gap-5 px-5 ">
          <h1 className="text-base">
            Base Currency Symbol <br />
            Formal name
          </h1>
          <span>
            <BsCurrencyRupee className="text-lg mt-3" />
            <p>INR</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Create;
