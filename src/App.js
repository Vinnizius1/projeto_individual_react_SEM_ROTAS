import Home from "./pages/home/Home";
import ModalUser from "./pages/modal/ModalUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:name" element={<ModalUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
