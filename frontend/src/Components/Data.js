import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
// import { response } from "express";

const Data = () => {
  const [open, setOpen] = useState([]);

  const data = async () => {
    const res = await axios.get("http://localhost:5000/storeAlter");

    setOpen(res.data);
  };
  useEffect(() => {
    data();
  }, []);
  return (
    <div>
      {open.map((item) => {
        return <div>{item.mobile}</div>;
      })}
    </div>
  );
};

export default Data;
