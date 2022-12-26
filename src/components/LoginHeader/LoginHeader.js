import React from "react";
import styles from "./LoginHeader.module.css";
import iconSicerdik from "../../assets/logo-sicerdik-fix.png";

function LoginHeader() {
  return (
    <div className={styles.loginHeader}>
      {/* <h1>SICERDIK</h1>
      <p>Tanjungpinang</p> */}
      <img src={iconSicerdik} alt="" width={"200px"} />
      <h2 className="mt-2">Sekolah</h2>
      <p>Kota Tanjungpinang</p>
    </div>
  );
}

export default LoginHeader;
