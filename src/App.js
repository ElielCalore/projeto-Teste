import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { CardDetails } from "./Pages/CardDetails/CardDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/card-details"} element={<CardDetails />} />
      </Routes>
    </div>
  );
}

export default App;
