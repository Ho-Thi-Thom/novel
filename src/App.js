import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Novel from "./pages/Novel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/novel/:id" element={<Novel />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
