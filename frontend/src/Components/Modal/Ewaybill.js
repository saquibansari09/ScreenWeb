import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

const Ewaybill = (props) => {
  const [gst, setGst] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("-----", gst);
      let res = await fetch("http://localhost:5000/storeAlter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          gst: gst,
          user: user,
          password: password,
        }),
      }).then((res) => console.log(res));
    } catch (err) {
      console.log(err);
    }
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
                    Usename
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={user}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
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
};

export default Ewaybill;
