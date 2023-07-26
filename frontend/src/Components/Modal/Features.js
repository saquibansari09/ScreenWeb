import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";

function Features(props) {
  const [companydata, setData] = useState("");
  const [email, setEmail] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("-----", companydata);
      let res = await fetch("http://localhost:5000/storeAlter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companydata: companydata,
          email: email,
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
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <section>
          {/* <div className="flex justify-between px-2 w-[100%] h-[30px] bg-sky-400">
            <h1 className="text-base">Features</h1>
            <h1 className="text-base">Viser Solution Private Limited</h1>
          </div> */}
          <div className="w-[100%] ">
            {/* <h1 className="text-base text-center text-black pt-2">
              Features And User Access
            </h1>
            <div className="flex justify-start gap-5 ">
              <h1 className="text-base">Company Name</h1>
              <h2 className="font-bold text-base ml-20">
                :Viser Logistic Private Limited
              </h2>
            </div> */}
            <form onSubmit={handleSubmit}>
              <div className="my-2 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm italic " style={{ flex: 0.3 }}>
                    Show more features
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={companydata}
                      onChange={(e) => setData(e.target.value)}
                      className="bg-gray-200 pl-2 appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-3 w-[100%]">
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm italic" style={{ flex: 0.3 }}>
                    Show all features
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
            </form>

            <hr />
            <div>
              <div className="my-2 w-[100%]">
                <h1 className="text-base">Accounting</h1>
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Maintain Accounts
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Enable Bill-wise entry
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Enable Cost Centres
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>

                <h1 className="text-base">Inventory</h1>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Maintain Inventory
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Integrate Accounts with Inventory
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Enable multiple Price Levels
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Enable Batches
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Maintain Expiry Date for Batches
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Use Discount column in invoices
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between items-center mt-2">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Use separate Actual and Billed Quantity column in invoices
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
              <div className="my-2 w-[100%]">
                <h1 className="text-base">Accounting</h1>
                <div className="flex w-[100%] justify-between items-center">
                  <label className="text-sm " style={{ flex: 1 }}>
                    Maintain Accounts
                  </label>
                  <div style={{ flex: 1 }}>
                    :
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-200 pl-2  appearance-none border-2 h-[25px] w-[10%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <button>Send</button>
          </div>
        </section>
      </Modal.Body>
    </Modal>
  );
}
export default Features;
