import { Routes, Route } from "react-router-dom";
import { HomePage } from "./Pages/HomePage/HomePage";
import { Lists } from "./Pages/Lists/Lists";
import { ListDetails } from "./Pages/ListDetails/ListDetails";

function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/lists"} element={<Lists />} />
        <Route path={"/lists/:id"} element={<ListDetails />} />
      </Routes>
    </div>
  );
}

export default App;
