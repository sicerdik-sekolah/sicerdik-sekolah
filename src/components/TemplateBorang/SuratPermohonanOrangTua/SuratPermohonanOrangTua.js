import React from "react";
import TutWuri from "../tutwurihandayani.png";
import Pemko from "../pemkotpi.png";
import nomorsurat from "../nomorsuratstatistik.png";

function SuratPermohonanOrangTua(props) {
  return (
    <div className="borang" style={{ backgroundColor: "white" }}>
      <div className="headerKop m-0 p-1 d-flex justify-content-between">
        <div className="text-center" style={{ flexGrow: 1 }}>
          <p className="" >SURAT PERMOHONAN ORANG TUA</p>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-end align-items-end  mt-4">
        <div className="tujuanSuratOrtu">
          <p>Kepada</p>
          <p>Yth. Kepala Sekolah</p>
          <p className="w-75">{props.data.asal_sekolah}</p>
          <p>Di Tanjungpinang</p>
        </div>
      </div>

      <div className="contentOrtu mt-4 d-flex flex-column justify-content-start mx-5">
        <p className="mt-4">Yang bertanda tangan di bawah ini :</p>
        <div className="contentData align-self-start w-100">
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "2.5rem" }}>
              <span className=""> Nama Orang tua / Wali Murid </span>
              <span>: {props.data.nama_orang_tua}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "2rem" }}>
              <span className=""> Alamat Orang tua / Wali Murid </span>
              <span>: {props.data.alamat_orangtua}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "0.8rem" }}>
              <span className=""> Pekerjaan Orang tua / Wali Murid </span>
              <span>: {props.data.pekerjaan_orang_tua}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "9.8rem" }}>
              <span className=""> Nomor HP </span>
              <span>: {props.data.noHp_orangtua}</span>
            </p>
          </div>
        </div>
        <p className="mt-4">Orang tua / Wali Murid dari Siswa :</p>
        <div className="contentData align-self-start w-100">
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "9rem" }}>
              <span className=""> Nama Siswa </span>
              <span>: {props.data.nama_siswa}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "9.7rem" }}>
              <span className=""> NIS / NISN </span>
              <span>
                : {props.data.nis} / {props.data.nisn_siswa}
              </span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "8.5rem" }}>
              <span className=""> Jenis Kelamin </span>
              <span>: {props.data.pekerjaan_orang_tua}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "5.5rem" }}>
              <span className=""> Siswa Tingkat / Kelas </span>
              <span>: {props.data.tingkatDanKelas}</span>
            </p>
          </div>
        </div>
        <p className="mt-4">
          Mengajukan permohonan pindah belajar untuk anak tersebut di atas ke :
        </p>
        <div className="contentData align-self-start w-100">
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "8rem" }}>
              <span className=""> Nama Sekolah </span>
              <span>: {props.data.tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "7.5rem" }}>
              <span className=""> Alamat Sekolah </span>
              <span>: {props.data.alamat_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "10.4rem" }}>
              <span className=""> No. Telp </span>
              <span>: {props.data.noTelp_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "11.7rem" }}>
              <span className=""> Desa</span>
              <span>: {props.data.desa_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "9.7rem" }}>
              <span className=""> Kelurahan</span>
              <span>: {props.data.kelurahan_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "9.2rem" }}>
              <span className=""> Kecamatan</span>
              <span>: {props.data.kecamatan_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "6.7rem" }}>
              <span className=""> Kabupaten / Kota</span>
              <span>: {props.data.kabupatenKota_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "10.4rem" }}>
              <span className=""> Provinsi</span>
              <span>: {props.data.provinsi_tujuan_sekolah}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "2.7rem" }}>
              <span className=""> Alasan Mengajukan Pindah</span>
              <span>: {props.data.alasan_pindah}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="content d-flex flex-column justify-content-start  mx-5">
        <p style={{ textAlign: "justify" }}>
          &emsp;&emsp;&emsp;&emsp;Demikian permohonan ini disampaikan, mohon
          agar dapat diproses lebih lanjut, terimakasih.
        </p>
      </div>
      <div className="d-flex mt-4 justify-content-end">
        <div className="ttdBorangOrtu me-5">
          <p>Tanjungpinang , {props.data.tanggal_naskah}</p>
          <p>Orang Tua / Wali Murid</p>
          <br />
          <br />
          <br />
          <br />    
          <p>{'...........................................'}</p>
        </div>
      </div>
    </div>
  );
}

export default SuratPermohonanOrangTua;
