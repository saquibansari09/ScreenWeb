import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
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

  console.log(open, "ooooooooooo");

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "copanyname",
      headerName: "Companyname",
      width: 150,
    },

    {
      field: "mailingname",
      headerName: "Mailing Name",
      width: 150,
    },

    {
      field: "address",
      headerName: "Address",
      width: 150,
    },

    {
      field: "state",
      headerName: "State",
      width: 150,
      editable: true,
    },

    {
      field: "country",
      headerName: "Country",
      width: 150,
      editable: true,
    },

    {
      field: "pincode",
      headerName: "Pincode",
      width: 150,
      editable: true,
    },
    {
      field: "telephone",
      headerName: "Telephone",
      width: 150,
      editable: true,
    },
    {
      field: "mobile",
      headerName: "Mobile",
      width: 150,
      editable: true,
    },
    {
      field: "fax",
      headerName: "Fax",
      width: 150,
      editable: true,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
    },
    {
      field: "website",
      headerName: "website",
      width: 150,
      editable: true,
    },
  ];

  return (
    <div>
      <Box sx={{ width: "100%", height: "100vh" }}>
        <DataGrid
          rows={open}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[3]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </div>
  );
};

export default Data;
