import "./App.css";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Create from "./Components/Pages/Create";
import Alter from "./Components/Pages/Alter";
import Select from "./Components/Pages/Select";
import Navbar from "./Components/Pages/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const dropdownOptions = [
    { title: "Create", path: "/create" },
    { title: "Alter", path: "/alter" },
    { title: "Select", path: "/select" },
    { title: "Change", path: "/change" },
  ];
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/create" element={<Create />} />
          <Route path="/alter" element={<Alter />} />
          <Route path="/select" element={<Select />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
