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
      setForm(props.allData);
      // console.log("props all data >>> ", form);
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
                    nama_orang_tua: form.nama_orang_tua,
                    alamat_orangtua: form.alamat_orangtua,
                    pekerjaan_orang_tua: form.pekerjaan_orang_tua,
                    noHp_orangtua: form.noHp_orang_tua,
                    jenis_surat: form.jenis_surat,
                    nomor_laporan: form.nomor_laporan,
                    nama_siswa: form.nama_siswa,
                    asal_sekolah: form.asal_sekolah,
                    tujuan_sekolah: form.tujuan_sekolah,
                    tanggal_naskah: form.tanggal_naskah,
                    nisn_siswa: form.nisn_siswa,
                    nis: form.nis,
                    tingkatDanKelas: form.tingkatDanKelas,
                    jenis_kelamin: form.jenis_kelamin,
                    nip: form.nip_kepala_sekolah,
                    tempat_tgl_lahir: form.tempat_tgl_lahir,
                    alasan_pindah: form.alasan_pindah,
                    tahun_lulus: `${
                      form.tahun_lulus ? form.tahun_lulus : "2022"
                    }`,
                    header_sekolah: form.header_sekolah,
                    alamat_header_sekolah: form.alamat_header_sekolah,
                    email_header_sekolah: form.email_header_sekolah,
                    alamat_tujuan_sekolah: form.alamat_tujuan_sekolah,
                    noTelp_tujuan_sekolah: form.noTelp_tujuan_sekolah,
                    desa_tujuan_sekolah: form.desa_tujuan_sekolah,
                    kelurahan_tujuan_sekolah: form.kelurahan_tujuan_sekolah,
                    kecamatan_tujuan_sekolah: form.kecamatan_tujuan_sekolah,
                    kabupatenKota_tujuan_sekolah:
                      form.kabupatenKota_tujuan_sekolah,
                    provinsi_tujuan_sekolah: form.provinsi_tujuan_sekolah,
                    nama_kepala_sekolah: form.nama_kepala_sekolah,
                    nip_kepala_sekolah: form.nip_kepala_sekolah,
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
