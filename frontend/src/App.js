import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Create from "./Components/Modal/modal";
import Alter from "./Components/Modal/Alter";
import Select from "./Components/Modal/Select";
import Change from "./Components/Modal/Change";
import Shut from "./Components/Modal/Shut";
import TallyVult from "./Components/Modal/TallyVult";
import Navbar from "./Components/Pages/Navbar";
import Security from "./Components/Modal/Security";
import Button from "./Components/Modal/Button";
import Axios from "axios";

function App() {
  const dropdownOptions = [
    { title: "Create", path: "/create" },
    { title: "Alter", path: "/alter" },
    { title: "Select", path: "/select" },
    { title: "Change", path: "/change" },
    { title: "Shut", path: "/shut" },
    { title: "TallyVult", path: "/tallyvult" },
    { title: "Security", path: "/security" },
    { title: "Button", path: "/button" },
  ];

  const [data, setData] = useState("");
  const getData = async () => {
    const response = await Axios.get("http://localhost:5000/getData");
    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/creates" element={<Create />} />
          <Route path="/alter" element={<Alter />} />
          <Route path="/select" element={<Select />} />
          <Route path="/change" element={<Change />} />
          <Route path="/shut" element={<Shut />} />
          <Route path="/tallyvult" element={<TallyVult />} />
          <Route path="/security" element={<Security />} />
          <Route path="/button" element={<Button />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
