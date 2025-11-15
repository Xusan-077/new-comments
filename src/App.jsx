import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Saralangan from "./pages/Saralangan";
import Layout from "./pages/Layout";
import HomeOrg from "./pages/Homeorg";
import NotFound from "./pages/NotFound";
import { useEffect, useState } from "react";
import { Context } from "./context";
import DetailPage from "./components/DetailPage";

export default function App() {
  const [like, setLike] = useState(
    localStorage.getItem("like") ? JSON.parse(localStorage.getItem("like")) : []
  );

  useEffect(() => {
    localStorage.setItem("like", JSON.stringify(like));
  }, [like]);

  return (
    <Context.Provider value={{ like, setLike }}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeOrg />} />
          <Route path="/news/:newsId" element={<DetailPage />} />
          <Route path="/saralanganlar" element={<Saralangan />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Context.Provider>
  );
}
