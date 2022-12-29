import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import iconSicerdik from "../assets/logo-sicerdik.png";
import iconSicerdikFix from "../assets/logo-sicerdik-fix.png";
import ButtonLogin from "../components/ButtonLogin/ButtonLogin";
function PageBeforeLogin() {
  const navigation = useNavigate();
  const token = Cookies.get("token");

  const handleClick = () => {
    navigation("/login");
  };
  useEffect(() => {
    if (token) {
      navigation("/home");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="portal">
      <div className="container container-portal  d-flex flex-column justify-content-center align-items-center">
        <div className="card">
          <div className="iconPendidikan">
            {/* <img src={iconSicerdik} alt="" /> */}
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/* <h1>SICERDIK</h1>
            <h3>Tanjungpinang</h3> */}
            <img
              className="mb-3"
              src={iconSicerdikFix}
              alt=""
              width={"300px"}
            />
            {/* <h3 className="text-center">Sistem Cepat Efisien <br /> Pelayanan Peserta Didik</h3> */}
            <p
              style={{
                fontSize: "16px",
                color: "white",
                fontFamily: "Poppins, sans-serif",
                // textShadow: "0 0 3px black",
              }}
            >
              <span style={{ color: "#EB455F" }}>Sistem</span>{" "}
              <span style={{ color: "yellow" }}>Cepat</span>{" "}
              <span style={{ color: "yellow" }}>Efisien</span>{" "}
              <span style={{ color: "#7DE5ED" }}>Pelayanan</span>{" "}
              <span style={{ color: "#2192FF" }}>Peserta </span>
              <span style={{ color: "#2192FF" }}>Didik</span>
            </p>
            <h2 className="mt-3" style={{ marginBottom: "0" }}>
              Dinas Pendidikan
            </h2>
            <h2>Kota Tanjungpinang</h2>
            <div className={"btnSection"}>
              <ButtonLogin
                onClickHandle={handleClick}
                title={"Masuk"}
                type={"submit"}
              >
                Masuk
              </ButtonLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageBeforeLogin;
