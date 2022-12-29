import React, { useEffect } from "react";
import NavBar from "../components/NavBar/NavBar";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Footer from "../components/Footer/Footer";
import Table from "../components/Table/Table";
import SideBar from "../components/SideBar/SideBar";
import { useSelector, useDispatch } from "react-redux";
import { fetchNaskah } from "../store/reducers/dummyDataSlice";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";

function Home() {
  const navigation = useNavigate();
  const { data } = useSelector((state) => state.dummyData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNaskah());
  }, []);

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigation("/login");
      window.location.reload();
    }
  }, [Cookies.get("token")]);

  // useEffect(() => {
  //   dispatch(fetchNaskah());
  //   setInterval(() => {
  //     console.log("token", Cookies.get("token"));
  //     if (!Cookies.get("token")) {
  //       navigation("/login");
  //     } else {
  //       dispatch(fetchNaskah());
  //     }
  //   }, 45000);
  // }, []);
  return (
    <>
      <NavBar />
      <div className="d-flex flex-row justify-content-center">
        <div className="pt-3" style={{ width: "20%" }}>
          <SideBar />
        </div>
        <main className="main-home pt-5 pb-5 px-5" style={{ width: "80%" }}>
          <div className="d-flex justify-content-end mb-3">
            <ButtonFormView onClick={() => navigation("/BuatLaporan")}>
              +Permohonan Baru
            </ButtonFormView>
          </div>
          <div className="container main-container bg-white p-5 ">
            <div className="mx-5 mt-3 mb-4">
              <h2 className="pb-3" style={{ color: "#0A2966" }}>
                Daftar Semua Naskah
              </h2>
            </div>
            <div className="container table-container panel panel-default">
              <Table />
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Home;
