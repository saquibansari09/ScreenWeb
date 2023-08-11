import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { PostApi } from "../../ApiTemplete.js/Api";
// import { Detail } from "../../../../Backend/Entity/Detail";

function Detail(props) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");

  const resetForm = () => {
    setCountry("");
    setState("");
    setPincode("");
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/storeAlter/create";
    const packet = {
      country: country,
      state: state,
      pincode: pincode,
    };
    try {
      PostApi(url, packet);
      resetForm();
      console.log("-----");
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
                    Country
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      required
                      placeholder="Country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-3 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm" style={{ flex: 0.5 }}>
                    State
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      placeholder="State"
                      required
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="bg-gray-200 pl-5  appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-3 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm" style={{ flex: 0.5 }}>
                    Pincode
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      placeholder="Pincode"
                      required
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
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

export default Detail;
