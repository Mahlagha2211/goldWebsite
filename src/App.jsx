import HomePage from "./pages/HomePage";
import Categories from "./pages/Categories";
import { Routes, Route } from "react-router-dom";
import Categorytype from "./components/Categories/Categorytype";
import AllCategory from "./components/Categories/AllCategory";
import Top from "./components/Top";
import DetailItem from "./components/Categories/DetailItem";
import { ContextMenu } from "./components/context/ContexMenu";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Workflow from "./pages/Workflow";

function App() {
  return (
    <ContextMenu>
      <Top />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Categories />}>
          <Route index element={<AllCategory />} />
          <Route path=":category" element={<Categorytype />} />
          <Route path=":category/:id" element={<DetailItem />} />
        </Route>
        <Route path="/workflow" element={<Workflow />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </ContextMenu>
  );
}

export default App;
