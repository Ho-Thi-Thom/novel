import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Novel from "./pages/Novel";
import TabNovel from "./pages/Novel/TabNovel";
import VocabularyList from "./pages/Novel/VocabularyList";
import Multiple from "./pages/Novel/Multiple";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Novel />}>
          <Route index element={<Navigate to="novel" />} />
          <Route path="novel" element={<TabNovel />} />
          <Route path="vocabulary" element={<VocabularyList />} />
          <Route path="multiple" element={<Multiple />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
