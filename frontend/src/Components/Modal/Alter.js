import React from "react";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { PostApi } from "../../ApiTemplete.js/Api";

const Alter = (props) => {
  const [companyname, setCName] = useState("");
  const [mailingname, setMName] = useState("");
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
    setWebsite("");
    setCName("");
    setMName("");
    setAddress("");
    setState("");
    setCountry("");
    setPincode("");
    setTelephone("");
    setMobile("");
    setFax("");
    setEmail("");
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
    try {
      PostApi(url, packet);
      resetForm();
      console.log("-----", companyname);
    } catch (err) {
      console.log(err);
    }
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.companyname) {
      errors.username = "companyname is required.";
    }

    if (!data.mailingname) {
      errors.mailingname = "Email is required.";
    } else if (!isValidEmail(data.mailingname)) {
      errors.mailingname = "Invalid email format.";
    }

    if (!data.address) {
      errors.address = "Address is required.";
    }

    if (!data.state) {
      errors.state = "State is required.";
    }

    if (!data.country) {
      errors.country = "Country is required.";
    }

    if (!data.pincode) {
      errors.pincode = "Pincode is required.";
    }

    if (!data.password) {
      errors.password = "Password is required.";
    } else if (data.password.length < 6) {
      errors.password = "Password should be at least 6 characters long.";
    }

    return errors;
  };

  const [formData, setFormData] = useState({
    companyname: "",
    mailingname: "",
    address: "",
    country: "",
  });

  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    const fieldErrors = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: fieldErrors[name],
    }));
  };

  const validateField = (fieldName, value) => {
    const fieldErrors = {};
    switch (fieldName) {
      case "username":
        if (!value) {
          fieldErrors[fieldName] = "Username is required.";
        }
        break;
      case "email":
        if (!value) {
          fieldErrors[fieldName] = "Email is required.";
        } else if (!isValidEmail(value)) {
          fieldErrors[fieldName] = "Invalid email format.";
        }
        break;
      case "password":
        if (!value) {
          fieldErrors[fieldName] = "Password is required.";
        } else if (value.length < 6) {
          fieldErrors[fieldName] =
            "Password should be at least 6 characters long.";
        }
        break;
      default:
        break;
    }
    return fieldErrors;
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
                    <label
                      htmlFor="companyname"
                      className="text-sm"
                      style={{ flex: 0.5 }}
                    >
                      Company Name
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        type="text"
                        name="companyname"
                        id="companyname"
                        required
                        placeholder="Enter companyname"
                        maxLength={20}
                        value={formData.username}
                        onChange={handleChange}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                      {errors.companyname && <span>{errors.companyname}</span>}
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label
                      htmlFor="mailingname"
                      className="text-sm"
                      style={{ flex: 0.5 }}
                    >
                      Mailing Name
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder="Enter valid name"
                        maxLength={20}
                        value={formData.mailingname}
                        onChange={handleChange}
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
                        type="text"
                        name="address"
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
                        type="text"
                        name="state"
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
                        type="text"
                        name="country"
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
                        type="text"
                        name="pincode"
                        required
                        maxLength={6}
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
                        type="tel"
                        name="telephone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required
                        maxLength={12}
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
                        type="text"
                        name="mobile"
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
                        type="text"
                        name="fax"
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
                        name="email"
                        placeholder="Enter valid email id"
                        value={email}
                        onChange={handleChange}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <div className="my-4 w-[100%]">
                  <div className="flex w-[100%] justify-between items-center">
                    <label
                      htmlFor="website"
                      className="text-sm"
                      style={{ flex: 0.5 }}
                    >
                      Website
                    </label>
                    <div style={{ flex: 1 }}>
                      :
                      <input
                        type="url"
                        name="website"
                        id="website"
                        required
                        placeholder="Enter website link.."
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="bg-gray-200 pl-5 appearance-none border-2 h-[30px] w-[95%] text-gray-700  focus:outline-none focus:bg-yellow-200 focus:border-sky-400"
                      />
                    </div>
                  </div>
                </div>
                <button
                  onSubmit={handleSubmit}
                  type="submit"
                  placeholder="submit"
                >
                  Submit
                </button>
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
