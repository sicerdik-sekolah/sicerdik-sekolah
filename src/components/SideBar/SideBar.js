import React from "react";
import { Link } from "react-router-dom";
import iconHome from "../../assets/icon-sidebar-home.png";
import iconLaporan from "../../assets/icon-sidebar-laporan.png";
import iconTTD from "../../assets/icon-sidebar-ttd.png";
import iconVerify from "../../assets/icon-verify.png";
import iconRevisi from "../../assets/icon-revisi.png";
import iconKirim from "../../assets/icon-sidebar-kirim.png";
import iconSelesai from "../../assets/icon-sidebar-selesai.png";

import styles from "./SideBar.module.css";
function SideBar() {
  return (
    <nav className="d-flex flex-column ps-4 pt-5 gap-3 ">
      <div className={`${styles.text} `}>
        <Link to={"/home"}>
          <img src={iconHome} alt="" />
          <p>Halaman Awal</p>
        </Link>
      </div>
      <div className={`${styles.text} `}>
        <Link to={"/reports-ttd"}>
          <img src={iconLaporan} alt="" />
          <p>Naskah Perlu TTD</p>
        </Link>
      </div>
      <div className={`${styles.text} `}>
        <Link to={"/reports-send"}>
          <img src={iconTTD} alt="" />
          <p>Naskah Sudah TTD</p>
        </Link>
      </div>
      <div className={`${styles.text} `}>
        <Link to={"/reports-done"}>
          <img src={iconSelesai} alt="" />
          <p>Naskah Selesai</p>
        </Link>
      </div>
      
    </nav>
  );
}

export default SideBar;
