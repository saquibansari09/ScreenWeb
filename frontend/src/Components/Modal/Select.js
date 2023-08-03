import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsCurrencyRupee } from "react-icons/bs";
import { PostApi } from "../../ApiTemplete.js/Api";

const Alter = (props) => {
  const [companyname, setCompany] = useState("");
  const [mailingname, setMailing] = useState("");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");
  const [telephone, setTelephone] = useState("");
  const [mobile, setMobile] = useState("");
  const [fax, setFax] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");

  const resetForm = () => {
    setCompany("");
    setMailing("");
    setAddress("");
    setState("");
    setCountry("");
    setPincode("");
    setTelephone("");
    setMobile("");
    setFax("");
    setEmail("");
    setWebsite("");
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:5000/storeAlter/create";
    const packet = {
      companyname: companyname,
      mailingname: mailingname,
      address: address,
      state: state,
      country: country,
      pincode: pincode,
      telephone: telephone,
      mobile: mobile,
      fax: fax,
      email: email,
      website: website,
    };
    console.log("-----", packet);
    resetForm();
    PostApi(url, packet);
  };

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
          <div className="flex gap-5">
            <div className="flex-1">
              <form onSubmit={handleSubmit}>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Company Name
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        placeholder="Enter company name"
                        required
                        value={companyname}
                        onChange={(e) => setCompany(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Mailing Name
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        placeholder="Enter valid name"
                        maxLength={20}
                        value={mailingname}
                        onChange={(e) => setMailing(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Address
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        maxLength={100}
                        placeholder="Enter valid address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      State
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        placeholder="Enter State"
                        maxLength={15}
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Country
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        placeholder="Enter country"
                        required
                        maxLength={20}
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Pincode
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        minLength={6}
                        pattern="[0-9]+"
                        placeholder="Enter pincode"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Telephone
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        pattern="[0-9]+"
                        maxLength={14}
                        placeholder="Enter valid telephone...."
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Mobile
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        pattern="[0-9]+"
                        maxLength={12}
                        placeholder="Enter valid mobile no..."
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Fax
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        pattern="[0-9]+"
                        maxLength={10}
                        placeholder="Enter valid fax...."
                        value={fax}
                        onChange={(e) => setFax(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Email
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        required
                        type="email"
                        placeholder="Enter valid email id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label className="text-sm" style={{ flex: 0.5 }}>
                      Website
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        type="url"
                        required
                        placeholder="Enter website link.."
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <button onSubmit={handleSubmit}>Send</button>
              </form>
            </div>
            <div className="flex-1">
              <div className="flex flex-justify-content-between gap-10">
                <div className="mt-2">
                  <p className="text-xs mt-2">
                    Financial year beginning from
                    <br /> Books beginning from
                  </p>
                </div>
                <div className="text-xs font-semibold ">
                  <p className="mt-3">
                    :1-Apr-23
                    <br />
                    :1-Apr-23
                  </p>
                </div>
              </div>
            </div>
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
        </section>
      </Modal.Body>
    </Modal>
  );
};

export default Alter;
