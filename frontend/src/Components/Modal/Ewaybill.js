import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { PostApi } from "../../ApiTemplete.js/Api";

const Ewaybill = (props) => {
  const [gst, setGst] = useState("");
  const [username, setUser] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    console.log("-----", gst);
    const url = "http://localhost:5000/storeAlter/create";
    const packet = {
      gst: gst,
      username: username,
      password: password,
    };
    console.log("-----", packet);
    PostApi(url, packet);
  };

  return (
    <Modal
      className="mt-5"
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <section>
          <div className="flex justify-between px-2 w-[100%] h-[30px] bg-sky-400">
            <h1 className="text-base">Features</h1>
            <h1 className="text-base">Viser Solution Private Limited</h1>
          </div>
          <div className="w-[100%] h-[50vh]">
            <h1 className="text-base text-center text-black pt-2">
              e-Way Bill Login
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
                    GSTIN
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      required
                      placeholder="Enter gst no."
                      maxLength={10}
                      value={gst}
                      onChange={(e) => setGst(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-3 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm" style={{ flex: 0.5 }}>
                    Username
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      type="text"
                      placeholder="Enter username"
                      required
                      maxLength={10}
                      value={username}
                      onChange={(e) => setUser(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-3 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm" style={{ flex: 0.5 }}>
                    Password
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      type="password"
                      placeholder="Enter valid password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <button className="px-8 py-2 bg-slate-500 hover:bg-slate-400 ">
                Send
              </button>
            </form>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default Ewaybill;
