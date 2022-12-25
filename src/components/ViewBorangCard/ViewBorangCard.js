import React, { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styles from "./ViewBorangCard.module.css";
import iconEye from "../../assets/icon-eye.png";
import { useReactToPrint } from "react-to-print";
import { apiFile } from "../../config/index";
import WebViewer from "@pdftron/webviewer";
import { createSearchParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
function ViewBorangCard(props) {
  const [form, setForm] = useState({});
  const [canGo, setCanGo] = useState(props.status);
  // console.log("view borang card form >> ", props.allData)
  const handleClick = () => {
    if (props.status === false) {
      toast.error("Input Semua Data Form Dahulu", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      setCanGo(true);
      setForm(props.allData)
    }
  };

  return (
    <>
      <div
        className={`${styles.card} mb-2`}
        style={{ cursor: "pointer" }}
        onClick={handleClick}
      >
        <Link
          target={`${canGo ? "_blank" : ""}`}
          to={{
            pathname: `${canGo ? "/createBorang" : "/BuatLaporan"}`,
            search: `${
              canGo
                ? createSearchParams({
                    jenis_surat: form.jenis_surat,
                    nomor_laporan: form.nomor_laporan,
                    nama_siswa: form.nama_siswa,
                    asal_sekolah: form.asal_sekolah,
                    tujuan_sekolah: form.tujuan_sekolah,
                    nomor_naskah: form.nomor_naskah,
                    tanggal_naskah_masuk: form.tanggal_naskah,
                    // tanggal_disposisi: form.tanggal_naskah_disposisi,
                    nisn_siswa: form.nisn_siswa,
                    nis_siswa: form.nis,
                    kelas: form.kelas,
                    nama_ortu: form.nama_orang_tua,
                    jenis_kelamin: form.jenis_kelamin,
                    nip: form.nip_kepala_sekolah,
                    tempat_tanggal_lahir: form.tempat_tgl_lahir,
                    pekerjaan_ortu: form.pekerjaan_orang_tua,
                    alasan_pindah: form.alasan_pindah,
                    // jabatan: roleSementara,
                    tahun_lulus: `${
                      form.tahun_lulus ? form.tahun_lulus : "2022"
                    }`,
                  }).toString()
                : ""
            }`,
          }}
          className="d-flex text-black text-decoration-none justify-content-between flex-grow-1"
        >
          <p>{props.label}</p>

          <div className={styles.icon}>
            <img src={iconEye} alt="" />
          </div>
        </Link>
      </div>
    </>
  );
}

export default ViewBorangCard;
