import { BrowserRouter, Routes, Route } from "react-router-dom";
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
        <Route path="/novel/:id" element={<Novel />}>
          <Route path="*" element={<TabNovel />} />
          <Route path="vocabulary" element={<VocabularyList />} />
          <Route path="multiple" element={<Multiple />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
