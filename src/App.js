import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import GantiStatusAkun from "./pages/GantiStatusAkun";
import ResetPassword from "./pages/ResetPassword";
import Detail from "./pages/Detail";
import Users from "./pages/Users";
import ManajemenAkunLogin from "./pages/ManajemenAkunLogin";
import SemuaLaporan from "./pages/SemuaLaporan";
import LaporanPerluDikirim from "./pages/LaporanPerluDikirim";
import LaporanSelesai from "./pages/LaporanSelesai";
import LaporanPerluTTD from "./pages/LaporanPerluTTD";
import WebViewerContext from "./context/webviewer";
import "bootstrap/dist/css/bootstrap.min.css";
import PageBeforeLogin from "./pages/PageBeforeLogin";
import LaporanPerluVerifikasi from "./pages/LaporanPerluVerifikasi";
import LaporanPerluRevisi from "./pages/LaporanPerluRevisi";
import BuatAkun from "./pages/BuatAkun";
import TampilanBorang from "./pages/TampilanBorang";
import BuatLaporan from "./pages/BuatLaporan";
import CreateBorang from "./pages/CreateBorang"
import DetailNaskah from "./pages/DetailNaskah";
function App() {
  const [instance, setInstance] = useState();
  return (
    <>
      <WebViewerContext.Provider value={{ instance, setInstance }}>
        <Routes>
          <Route path="/" element={<PageBeforeLogin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tampilin" element={<TampilanBorang />} />
          <Route path="/createBorang" element={<CreateBorang />} />
          <Route path="/reports" element={<SemuaLaporan />} />
          <Route path="/reports-ttd" element={<LaporanPerluTTD />} />
          <Route
            path="/reports-verifikasi"
            element={<LaporanPerluVerifikasi />}
          />
          <Route path="/reports-send" element={<LaporanPerluDikirim />} />
          <Route path="/reports-revisi" element={<LaporanPerluRevisi />} />
          <Route path="/reports-done" element={<LaporanSelesai />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/detailNaskah/:id" element={<DetailNaskah />} />
          <Route path="/BuatLaporan" element={<BuatLaporan />} />
        </Routes>
      </WebViewerContext.Provider>
    </>
  );
}

export default App;
