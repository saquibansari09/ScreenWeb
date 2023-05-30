// import React from "react";
// // import { BsCurrencyRupee } from "react-icons/bs";

// const Create = () => {
//   return (
//     <section className="w-[100%] bg-slate-300">
//       <div className="bg-sky-500 w-[100%] h-[25px] ">
//         <h1 className="text-base font-bold pl-5">Gateway of Tally</h1>
//         <div>
//           <div className="grid lg:grid-cols-2 px-5 mt-5">
//             <div className="grid lg:grid-cols-2 px-5 ">
//               <div>
//                 <h1 className="text-sm text-sky-400  ">CURRENT PERIOD</h1>
//                 <p className="font-bold text-sm">1-Apr-22 to 31-March-23</p>
//               </div>
//               <div>
//                 <h1 className="text-sm text-sky-400 pl-16 ">CURRENT PERIOD</h1>
//                 <p className="font-bold text-sm">Wednesday,29-March-2023</p>
//               </div>
//             </div>
//             <div className=" w-[300px] h-[60vh] mt-24 mb-10 ">
//               <ul className="text-center">
//                 <h1 className="text-sm text-white bg-sky-500 text-center">
//                   Gateway of Tally
//                 </h1>
//                 <li className="">MASTERS</li>
//                 <li className="bg-yellow-500 pr-5">Create</li>
//                 <li className="pr-8">Alter</li>
//                 <li className="pl-16">CHart of Accounts</li>
//                 <li className="pl-12">TRANSACTIONS</li>
//                 <li className="">Vouchers</li>
//                 <li className="">Day Book</li>
//                 <li className="">UTILITIES</li>
//                 <li className="">BaNking</li>
//                 <li className="">REPORTS</li>
//                 <li className="pl-9">Balance Sheet</li>
//                 <li className="pl-9">Ratio Analysis</li>
//                 <li className="pl-24">Display More Reports</li>
//                 <li className="pr-8">Quit</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Create;

import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function Create(props) {
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
        <section className="w-[100%] h-[85vh]">
          <div className="bg-sky-500 w-[100%] h-[25px] ">
            <h1 className="text-base font-bold pl-5">Gateway of Tally</h1>
            <div>
              <div className="grid lg:grid-cols-2 px-5 mt-5">
                <div className="grid lg:grid-cols-2 px-5 ">
                  <div>
                    <h1 className="text-sm text-sky-400  ">CURRENT PERIOD</h1>
                    <p className="font-bold text-sm">1-Apr-22 to 31-March-23</p>
                  </div>
                  <div>
                    <h1 className="text-sm text-sky-400 pl-16 ">
                      CURRENT PERIOD
                    </h1>
                    <p className="font-bold text-sm">Wednesday,29-March-2023</p>
                  </div>
                </div>
                <div className=" w-[300px] h-[60vh] mt-24 mb-10 ">
                  <ul className="text-center">
                    <h1 className="text-sm text-white bg-sky-500 text-center">
                      Gateway of Tally
                    </h1>
                    <li className="">MASTERS</li>
                    <li className="bg-yellow-500 pr-5">Create</li>
                    <li className="pr-8">Alter</li>
                    <li className="pl-16">CHart of Accounts</li>
                    <li className="pl-12">TRANSACTIONS</li>
                    <li className="">Vouchers</li>
                    <li className="">Day Book</li>
                    <li className="">UTILITIES</li>
                    <li className="">BaNking</li>
                    <li className="">REPORTS</li>
                    <li className="pl-9">Balance Sheet</li>
                    <li className="pl-9">Ratio Analysis</li>
                    <li className="pl-24">Display More Reports</li>
                    <li className="pr-8">Quit</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Create
      </Button>
      <Create show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default App;
