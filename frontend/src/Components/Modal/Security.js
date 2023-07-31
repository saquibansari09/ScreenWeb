import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Security(props) {
  const [security, setSecurity] = useState("");
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("-----", security);
      let res = await fetch("http://localhost:5000/storeAlter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          security: security,
          email: email,
        }),
      }).then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
  };

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
          <div className="flex justify-between px-2 w-[100%] h-[30px] bg-sky-400">
            <h1 className="text-base">Security And User Access</h1>
            <h1 className="text-base">Viser Solution Private Limited</h1>
          </div>
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
            <form onSubmit={handleSubmit}>
              <div className="my-2 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm " style={{ flex: 0.5 }}>
                    Control User Access to Company Data
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      required
                      placeholder="Control User Access to Company Data"
                      value={security}
                      onChange={(e) => setSecurity(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-3 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm" style={{ flex: 0.5 }}>
                    E-mail ID for Browser Access
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      placeholder="E-mail ID for Browser Access"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <button>Send</button>
            </form>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}

export default Security;
