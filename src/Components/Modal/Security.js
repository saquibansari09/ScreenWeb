import React from "react";
import Modal from "react-bootstrap/Modal";

function Security(props) {
  return (
    <Modal
      className="mt-20"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <section>
          <div className="w-[100%] h-[30px] bg-sky-400"></div>
          <div className="w-[100%] h-[50vh]">
            <h1 className="text-base text-center text-black pt-2">
              Security And User Access
            </h1>
            <div className="flex justify-start gap-5 ">
              <h1 className="text-base">Company Name</h1>
              <h2 className="font-bold text-base ml-20">
                :Viser Logistic Private Limited
              </h2>
            </div>
            <hr />
            <div className="flex gap-10">
              <h1 className="text-base">Control User Access to Company Data</h1>
              <div>
                <input className=" pl-5 w-[400px] h-[30px] border-2 focus:outline-none border-sky-400 bg-yellow-200 focus:outline-2"></input>
              </div>
            </div>
            <div className="mt-5">
              <h1 className="text-base">E-mail ID for Browser Access</h1>
            </div>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
export default Security;
