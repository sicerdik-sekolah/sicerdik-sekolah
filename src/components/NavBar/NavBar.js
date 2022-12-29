import React, { useState } from "react";
import NavTitle from "../NavTitle/NavTitle";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/loginSlice";
import Cookies from "js-cookie";
import iconSicerdik from "../../assets/logo-sicerdik-fix.png";
import { authorizationCheck } from "../../utils/authRole";
function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const showHandleMenu = () => {
    setShowMenu(!showMenu);
  };
  const [user, setUser] = useState(
    authorizationCheck() == "kepala_sekolah"
      ? "Kepala Sekolah"
      : authorizationCheck() == "staff_sekolah"
      ? "Admin Sekolah"
      : "unknown"
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    Cookies.remove("token");
    localStorage.setItem("jabatan", "");
    localStorage.setItem("nip", "");
    localStorage.setItem("nama", "");
    localStorage.setItem("tempat", "");
  };
  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.navLogo} onClick={() => navigate("/home")}>
          <NavTitle />
        </div>

        <div className={styles.title} onClick={() => navigate("/home")}>
          <img src={iconSicerdik} alt="" width={"200px"} />
          {/* <p>Tanjungpinang</p> */}
        </div>
        <div className={styles.user}>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <p>{user}</p>
            <p>{localStorage.getItem("tempat")}</p>
          </div>
          <div onClick={showHandleMenu}>
            <img
              className={styles.userLogo}
              src="https://img.icons8.com/officel/160/circled-user-male-skin-type-6.png"
              alt=""
            />
            <div
              className={styles.menu}
              style={{ display: `${showMenu ? "block" : "none"}` }}
            >
              <div>
                <img src="https://img.icons8.com/ios/100/exit.png" alt="" />
                <Link onClick={handleLogout} to={"/login"}>
                  Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
