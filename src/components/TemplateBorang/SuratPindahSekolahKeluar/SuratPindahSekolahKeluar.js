import React from "react";
import TutWuri from "../tutwurihandayani.png";
import Pemko from "../pemkotpi.png";
import nomorsurat from "../nomorsuratstatistik.png";
function SuratPindahSekolahKeluar(props) {
  return (
    <div className="borang" style={{ backgroundColor: "white" }}>
      <div className="headerKop d-flex justify-content-between">
        <div className="pemkob">
          <img src={Pemko} alt="" width={"90px"} height={"110px"} />
        </div>
        <div className="text-center" style={{ flexGrow: 1 }}>
          <h5>PEMERINTAH KOTA TANJUNGPINANG</h5>
          <h5>DINAS PENDIDIKAN</h5>
          <h5>{props.data.asal_sekolah}</h5>
          <p>Alamat : {props.data.alamat_header_sekolah}</p>
          <p>Email : {props.data.email_header_sekolah}</p>
        </div>
        <div className="pemkob">
          <img src={TutWuri} alt="" width={"140px"} height={"110px"} />
        </div>
      </div>
      <div
        className="d-flex justify-content-end mt-2"
        style={{ marginRight: "5rem" }}
      >
        <img src={nomorsurat} alt="" width={"230px"} height={"40px"} />
      </div>
      <div className="titleBorang text-center d-flex flex-column justify-content-center align-items-center">
        <p className="title text-center mt-2">
          SURAT KETERANGAN PINDAH SEKOLAH
        </p>
        <p>Nomor : 422/ {props.data.nomor_laporan} / 2023</p>
      </div>
      <div className="content d-flex flex-column justify-content-start align-items-center mx-5">
        <p className="mt-2">
          &emsp;&emsp;&emsp;&emsp;Yang bertanda tangan di bawah ini Kepala{" "}
          {props.data.asal_sekolah} Provinsi Kepulauan Riau, menerangkan bahwa :
        </p>
        <div className="contentData align-self-start w-100">
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "7.5rem" }}>
              <span className=""> Nama Siswa </span>
              <span>: {props.data.nama_siswa}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "2rem" }}>
              <span className=""> Tempat dan Tanggal Lahir </span>
              <span>: {props.data.tempat_tgl_lahir}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "8.7rem" }}>
              <span className=""> NIS/NISN </span>
              <span>
                : {props.data.nis} / {props.data.nisn_siswa}
              </span>
            </p>
          </div>

          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "7rem" }}>
              <span className=""> Jenis Kelamin </span>
              <span>: {props.data.jenis_kelamin}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "7rem" }}>
              <span className=""> Tingkat/Kelas </span>
              <span>: {props.data.tingkatDanKelas}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="content d-flex flex-column justify-content-start  mx-5">
        <p>
        &emsp;&emsp;&emsp;&emsp;Sesuai dengan surat permohonan pindah sekolah dari orang tua/wali
          murid :
        </p>
        <div className="contentData align-self-start w-100">
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "10rem" }}>
              <span className=""> Nama </span>
              <span>: {props.data.nama_orang_tua}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "8.3rem" }}>
              <span className=""> Pekerjaan </span>
              <span>: {props.data.pekerjaan_orang_tua}</span>
            </p>
          </div>
          <div className="">
            <p className="d-flex  flex-row" style={{ gap: "9.3rem" }}>
              <span className=""> Alamat </span>
              <span>: {props.data.alamat_orangtua}</span>
            </p>
          </div>
        </div>
        <p style={{ textAlign: "justify" }}>
          &emsp;&emsp;&emsp;&emsp;Telah mengajukan permohonan pindah ke
          {" "}{props.data.tujuan_sekolah}, {props.data.alamat_tujuan_sekolah}{" "}
          Provinsi {props.data.provinsi_tujuan_sekolah}, dengan alasan
          {" "}{props.data.alasan_pindah}. Bersama ini kami sertakan Buku
          Laporan Peserta Didik yang bersangkutan dan surat permohonan pindah
          sekolah oleh orang tua/wali murid.
        </p>
      </div>
      <div className="d-flex mt-2 justify-content-end">
        <div className="ttdBorang me-5">
          <p>Tanjungpinang , {props.data.tanggal_naskah}</p>
          <p>Kepala Sekolah</p>
          <br />
          <br />
          <br />
          <br />
          <p>{props.data.nama_kepala_sekolah}</p>
          <p>NIP : {`${props.data.nip_kepala_sekolah}`}</p>
        </div>
      </div>
    </div>
  );
}

export default SuratPindahSekolahKeluar;
