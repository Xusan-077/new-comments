import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saralangan from "./pages/Saralangan";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/saralangan" element={<Saralangan />} />
      </Route>
    </Routes>
  );
}
