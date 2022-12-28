import React from "react";
import { Link } from "react-router-dom";
import IconAksi from "../../assets/logo-aksi-table.png";
import moment from "moment/moment";
function TableBodySelesai(props) {
  return (
    <tbody>
      {props.data &&
        props.data.map((item, idx) => {
          console.log("data >> ", props.data);
          return (
            <tr key={idx} className="text-center align-middle">
              <td>{idx + 1}</td>
              <td>{item.nomor_laporan}</td>
              <td>{item.hal}</td>
              <td>
                {moment(item.tanggal_naskah_masuk).format("MMMM Do YYYY")}
              </td>
              <td>{item.nama_siswa}</td>
              <td>{item.nisn_siswa}</td>
              <td>{item.nis_siswa? item.nis_siswa : 12345}</td>
              <td>{item.nama_orang_tua ? item.nama_orang_tua : "dummy orang tua"}</td>
              <td>{item.tujuan_sekolah}</td>
              <td>
                <span
                  className="button-status px-2 py-1"
                  style={{
                    backgroundColor: `${
                      item.status_ttd_kepsek === false ? "#EDE300" : "#00BDAA"
                    }`,
                  }}
                >
                  {!item.status_ttd_kepsek ? "BELUM" : "SUDAH"}
                </span>
              </td>
              <td>
                <span
                  className="button-status px-2 py-1"
                  style={{
                    backgroundColor: `${
                      item.status_kirim_dari_kepsek === false ? "#EDE300" : "#00BDAA"
                    }`,
                  }}
                >
                  {!item.status_kirim_dari_kepsek ? "BELUM" : "SUDAH"}
                </span>
              </td>
              <td>
                <span
                  className="button-status px-2 py-1"
                  style={{
                    backgroundColor: `${
                      !item.surat_disdik ? "#EDE300" : "#00BDAA"
                    }`,
                  }}
                >
                  {!item.surat_disdik ? "BELUM" : "SUDAH"}
                </span>
              </td>

              <td>
                {/* <Link to={`/detail/${item._id}`}> */}
                <Link to={`/detailNaskah/${item._id}`}>
                  <span className="action-btn">
                    <img src={IconAksi} alt="icon" />
                  </span>
                </Link>
              </td>
            </tr>
          );
        })}
    </tbody>
  );
}

export default TableBodySelesai;
