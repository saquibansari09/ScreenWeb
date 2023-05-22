import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Create from "./Components/Pages/Create";
import Alter from "./Components/Pages/Alter";
import Select from "./Components/Pages/Select";
import Change from "./Components/Pages/Change";
import Shut from "./Components/Pages/Shut";
import Navbar from "./Components/Pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dropdownOptions = [
    { title: "Create", path: "/create" },
    { title: "Alter", path: "/alter" },
    { title: "Select", path: "/select" },
    { title: "Change", path: "/change" },
    { title: "Shut", path: "/shut" },
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
