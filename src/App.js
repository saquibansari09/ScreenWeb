import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Create from "./Components/Pages/Create";
import Alter from "./Components/Pages/Alter";
import Select from "./Components/Pages/Select";
import Change from "./Components/Pages/Change";
import Shut from "./Components/Pages/Shut";
import TallyVult from "./Components/Pages/TallyVult";
import Navbar from "./Components/Pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Security from "./Components/Pages/Security";

function App() {
  const dropdownOptions = [
    { title: "Create", path: "/create" },
    { title: "Alter", path: "/alter" },
    { title: "Select", path: "/select" },
    { title: "Change", path: "/change" },
    { title: "Shut", path: "/shut" },
    { title: "TallyVult", path: "/tallyvult" },
    { title: "Security", path: "/security" },
  ];
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/alter" element={<Alter />} />
          <Route path="/select" element={<Select />} />
          <Route path="/change" element={<Change />} />
          <Route path="/shut" element={<Shut />} />
          <Route path="/tallyvult" element={<TallyVult />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
