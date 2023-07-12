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

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "Companyname",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Mailingname",
      width: 150,
      editable: true,
    },

    {
      field: "lastName",
      headerName: "address",
      width: 150,
      editable: true,
    },

    {
      field: "lastName",
      headerName: "Mailingname",
      width: 150,
      editable: true,
    },

    {
      field: "lastName",
      headerName: "Address",
      width: 150,
      editable: true,
    },

    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  const rows = [
    { id: 1, companyname: "viser" },
    { id: 2, lastName: "Lannister", firstName: "Cersei" },
    { id: 3, address: "ghansoli" },
    { id: 4, state: "Maharashtra" },
    { id: 5, country: "India" },
    { id: 6, telephone: "68836464783" },
    { id: 7, mobile: "8767636346" },
    { id: 8, fax: "fax@gmai.com" },
    { id: 9, email: "vdhdh@gmail.com" },
    { id: 9, website: "hgfhfh" },
    { id: 9, pincode: "4000701" },
  ];

  console.log(open, "ooooooooooo");
  return (
    <div>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
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
