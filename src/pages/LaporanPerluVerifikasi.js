import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../components/Footer/Footer";
import Table from "../components/Table/Table";
import SideBar from "../components/SideBar/SideBar";
import { useDispatch } from "react-redux";
import { fetchNaskah } from "../store/reducers/dummyDataSlice";

function LaporanPerluVerifikasi() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNaskah());
  }, []);
  const navigation = useNavigate();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigation("/login");
      window.location.reload();
    }
  }, [Cookies.get("token")]);

  return (
    <>
      <NavBar />
      <div className="d-flex flex-row justify-content-center">
        <div
          className="pt-3"
          style={{ width: "17%", borderRight: "2px solid #A19F9F" }}
        >
          <SideBar />
        </div>
        <main className="main pt-5 pb-5 px-2" style={{ width: "83%" }}>
          <div className="container main-container bg-white p-5">
            <div className="mx-5 mt-3 mb-4">
              <h2 className="pb-3">Daftar Naskah Perlu Verifikasi</h2>
            </div>
            <div className="container table-container panel panel-default">
              <Table isVerifikasi />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default LaporanPerluVerifikasi;
