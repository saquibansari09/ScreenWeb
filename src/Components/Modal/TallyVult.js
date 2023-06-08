import React from "react";
import Modal from "react-bootstrap/Modal";

function TallyVult(props) {
  return (
    <Modal
      className=""
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <section>
          <div className="w-[100%] h-[30px] bg-sky-500">
            <div className="flex justify-between px-2">
              <h1 className="text-lg text-black font-bold ml-3">TallyVult</h1>
              <h1 className="text-left text-base ">
                Viser Solution Private Limited
              </h1>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-center mt-10">
              Tally Vault
            </h1>
            <p className="italic flex-col text-justify">
              <span>TallyVault Password encripts your Company Data</span>
              <br />
              (if you forget your TallyVault Password you will permanently lose
              Access to your Company Data)
            </p>
            <div className="flex gap-12 mt-4 ">
              <label className="mt-2 text-sm ">Country Name</label>
              <input className="bg-gray-200 pl-5  appearance-none border-2 hover:border-sky-400  w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200  focus:border-sky-400" />
            </div>
            <div className="flex gap-20 mt-4 ">
              <label className="mt-2 text-sm ">Password</label>
              <input className="bg-gray-200 pl-5  appearance-none border-2 hover:border-sky-400  w-[400px] h-[30px] text-gray-700  focus:outline-none focus:bg-yellow-200  focus:border-sky-400" />
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
export default TallyVult;
