import React from "react";
import Modal from "react-bootstrap/Modal";
import { BsCurrencyRupee } from "react-icons/bs";
const Alter = (props) => {
  return (
    <Modal
      className="mt-11 pb-44"
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
      </Modal.Header>
      <Modal.Body className="justify-start">
        <section>
          <div className="bg-sky-600 h-[40px] ">
            <h1 className="text-2xl font-bold px-3">Company Alteration </h1>
          </div>
          {/* <div className="flex-col gap-10">
            <div className="  mt-3 ml-3">
              <label className=" text-sm">Company Name: </label>
              <input className="bg-gray-200 pl-5 appearance-none border-2  shadow hover:shadow-2xl w-[200px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className="mt-2">
              <p className="text-xs mt-2">
                Financial year beginning from
                <br /> Books beginning from
              </p>
            </div>
            <div className="text-xs font-semibold mt-2">
              <p>
                :1-Apr-23
                <br />
                :1-Apr-23
              </p>
            </div>
          </div> */}
          <div className=" flex gap-10  mt-3 ml-3">
            <label className="mt-2 text-sm mr-1 ">Mailing Name:</label>
            <input
              type="text"
              className="bg-gray-200 pl-5 appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
            />
          </div>
          <form>
            <div className="flex gap-20 mt-2 ml-3">
              <label className="mt-2 text-sm">Address: </label>
              <input className="bg-gray-200 pl-5 appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className="flex gap-24 mt-2  ml-3">
              <label className="mt-2 text-sm gap-10">State:</label>
              <input className="bg-gray-200 pl-5  appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>

            <div className="flex gap-20 mt-2 ml-3">
              <label className="mt-2 text-sm ">Country:</label>
              <input className="bg-gray-200 pl-5  appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className=" flex gap-20 mt-2 ml-3">
              <label className="mt-2 text-sm ">Pincode:</label>
              <input className="bg-gray-200 pl-5  appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className=" flex gap-16 mt-2 ml-3">
              <label className="mt-2 text-sm ">Telephone:</label>
              <input className="bg-gray-200 pl-5 appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className="flex gap-20 mt-2 ml-3">
              <label className="mt-2 text-sm mr-2">Mobile:</label>
              <input className="bg-gray-200 pl-5  appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className="flex gap-24 mt-2 ml-3">
              <label className="mt-2 text-sm mr-4">Fax:</label>
              <input className="bg-gray-200 pl-5 appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className=" flex gap-20 mt-2 ml-3">
              <label className="mt-2 text-sm mr-3">E-mail:</label>
              <input className="bg-gray-200 pl-5 appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
            </div>
            <div className="flex gap-16 mt-2 ml-3">
              <label className="mt-2 text-sm mr-4">Website:</label>
              <input className="bg-gray-200 pl-5 appearance-none border-2 shadow hover:shadow-2xl w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400" />
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
          </form>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default Alter;
