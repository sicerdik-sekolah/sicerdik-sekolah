import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Cookies from "js-cookie";
import {
  changeStatusVerifikasi,
  changeStatusKirim,
  changeStatusTTD,
  resetError,
  updateNaskahVerifikasi,
  sendFileDisdik,
  createLaporan,
} from "../store/reducers/dummyDataSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import FormCard from "../components/FormCard/FormCard";
import Form from "react-bootstrap/Form";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";
import InputFormWithLabel from "../components/InputFormWithLabel/InputFormWithLabel";
import SideBar from "../components/SideBar/SideBar";
import { authorizationCheck } from "../utils/authRole";
import TextAreaFormWithLabel from "../components/TextAreaFormWithLabel/TextAreaFormWithLabel";
import ViewBorangCard from "../components/ViewBorangCard/ViewBorangCard";
import useStateBuatLaporan from "./useStateBuatLaporan.hooks";
import Swal from "sweetalert2";

function BuatLaporan() {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  // const roleSementara = "Ketua Sub Bagian";
  const [roleSementara, setRoleSementara] = useState(authorizationCheck());
  const [form, setForm] = useState({
    nomor_laporan: "",
    asal_sekolah: localStorage.getItem("tempat"),
    hal: "PINDAH_KELUAR",
    jenis_surat: "FORMAT_PINDAH_SEKOLAH",
    nama_siswa: "",
    nis: "",
    nisn_siswa: "",
    alamat: "",
    tempat_tgl_lahir: "",
    jenis_kelamin: "Laki-Laki",
    tingkatDanKelas: "",
    nama_orang_tua: "",
    pekerjaan_orang_tua: "",
    alamat_orangtua: "",
    noHp_orang_tua: "",
    tahun_lulus: "",
    tujuan_sekolah: "",
    tanggal_naskah: new Date(),
    nama_kepala_sekolah: "",
    nip_kepala_sekolah: "",
    alamat_tujuan_sekolah: "",
    noTelp_tujuan_sekolah: "",
    desa_tujuan_sekolah: "",
    kelurahan_tujuan_sekolah: "",
    kecamatan_tujuan_sekolah: "",
    kabupatenKota_tujuan_sekolah: "",
    provinsi_tujuan_sekolah: "",
    alasan_pindah: "",
    header_sekolah: localStorage.getItem("tempat"),
    alamat_header_sekolah: "",
    email_header_sekolah: "",
    surat_ortu: "",
    surat_pindah_sekolah: "",
    surat_keterangan_lulus: "",
    surat_rekomendasi_dinas_setempat: "",
    surat_lain_lain: "",
  });
  const [status, setStatus] = useState(false);

  const handleChange = (e) => {
    if (
      e.target.name === "surat_ortu" ||
      e.target.name === "surat_pindah_sekolah" ||
      e.target.name === "surat_keterangan_lulus" ||
      e.target.name === "surat_rekomendasi_dinas_setempat" ||
      e.target.name === "surat_lain_lain"
    ) {
      if (e?.target?.files[0]?.type === "application/pdf") {
        setForm({
          ...form,
          [e.target.name]: e.target.files[0],
        });
      } else {
        setForm({ ...form, [e.target.name]: "" });
        toast.error("File Harus Dalam Bentuk PDF", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      setForm({ ...form, [e.target.name]: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(form);
    if (authorizationCheck() === "staff_sekolah") {
      Swal.fire({
        title: "Buat Naskah Baru?",
        showDenyButton: true,
        confirmButtonText: "Buat",
        denyButtonText: `Batalkan`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire("Naskah Telah Dibuat!", "", "success");
          dispatch(createLaporan(form));
          navigation("/home");
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Staff Sekolah yang harus membuat laporan!",
      });
    }
  };

  useEffect(() => {
    if (
      !form.nomor_laporan ||
      !form.nama_siswa ||
      !form.nis ||
      !form.nisn_siswa ||
      !form.alamat ||
      !form.tempat_tgl_lahir ||
      !form.tingkatDanKelas ||
      !form.nama_orang_tua ||
      !form.pekerjaan_orang_tua ||
      !form.alamat_orangtua ||
      !form.noHp_orang_tua ||
      !form.tujuan_sekolah ||
      !form.nama_kepala_sekolah ||
      !form.nip_kepala_sekolah ||
      !form.noTelp_tujuan_sekolah ||
      !form.desa_tujuan_sekolah ||
      !form.kelurahan_tujuan_sekolah ||
      !form.kecamatan_tujuan_sekolah ||
      !form.kabupatenKota_tujuan_sekolah ||
      !form.provinsi_tujuan_sekolah ||
      !form.alasan_pindah ||
      !form.header_sekolah ||
      !form.alamat_header_sekolah ||
      !form.email_header_sekolah
    ) {
      setStatus(false);
    } else {
      setStatus(true);
    }
  }, [form]);

  useEffect(() => {
    if (!Cookies.get("token")) {
      navigation("/login");
      window.location.reload();
    }
  }, [Cookies.get("token")]);

  useEffect(() => {
    if (form.jenis_surat === "FORMAT_PINDAH_RAYON") {
      window.scrollTo({
        top: 1000,
        left: 100,
        behavior: "smooth",
      });
    }
  }, [form.jenis_surat]);
  return (
    <>
      <NavBar />

      <div className="d-flex flex-row justify-content-center">
        <div className="pt-3" style={{ width: "20%" }}>
          <SideBar />
        </div>
        <form
          className="main pt-5 pb-5 px-5"
          style={{ width: "80%" }}
          onSubmit={handleSubmit}
        >
          {/* data Orangtua / wali murid*/}
          <ToastContainer />
          <FormCard>
            <div className="mx-4 mt-3 mb-4 formCardHead">
              <h3 className="pb-3">Data Orang Tua / Wali Murid</h3>
            </div>
            <div className="mx-4 d-flex flex-column gap-4">
              <InputFormWithLabel
                label={"Nama Lengkap"}
                name={"nama_orang_tua"}
                value={form.nama_orang_tua}
                onChange={handleChange}
                placeholder={"Contoh : Setiawan Desiyani Mulyana"}
                isRequired
              />

              <InputFormWithLabel
                label={"Alamat"}
                placeholder={
                  "Contoh : Jl. Cendawan 15, RT. 001/RW. 005, Tanjung Priok"
                }
                name={"alamat_orangtua"}
                value={form.alamat_orangtua}
                onChange={handleChange}
                isRequired
              />
              <InputFormWithLabel
                label={"Pekerjaan"}
                placeholder={"Contoh : Pegawai Negeri Sipil Guru SMA"}
                isRequired
                value={form.pekerjaan_orang_tua}
                name={"pekerjaan_orang_tua"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"No HP"}
                type={"number"}
                placeholder={"Contoh : 08226928122"}
                value={form.noHp_orang_tua}
                name={"noHp_orang_tua"}
                onChange={handleChange}
              />
            </div>
          </FormCard>

          {/* data siswa peserta didik*/}
          <FormCard>
            <div className="mx-4 mt-3 mb-4 formCardHead">
              <h3 className="pb-3">Data Siswa Peserta Didik</h3>
            </div>
            <div className="mx-4 d-flex flex-column gap-4">
              <InputFormWithLabel
                label={"Nama Lengkap"}
                placeholder={"Contoh : Anita Desiyani Mulyana"}
                value={form.nama_siswa}
                name={"nama_siswa"}
                onChange={handleChange}
                isRequired
              />
              <InputFormWithLabel
                label={"Tempat Tanggal Lahir"}
                placeholder={"Contoh : Tanjungpinang, 14 Januari 2022"}
                isRequired
                value={form.tempat_tgl_lahir}
                name={"tempat_tgl_lahir"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"Alamat"}
                placeholder={
                  "Contoh : Jl. Cendawan 15, RT. 001/RW. 005, Tanjung Priok"
                }
                value={form.alamat}
                name={"alamat"}
                onChange={handleChange}
                isRequired
              />
              <InputFormWithLabel
                label={"NIS"}
                type={"number"}
                placeholder={"Contoh : 2010230041"}
                value={form.nis}
                name={"nis"}
                onChange={handleChange}
                isRequired
              />
              <InputFormWithLabel
                label={"NISN"}
                type={"number"}
                value={form.nisn_siswa}
                name={"nisn_siswa"}
                onChange={handleChange}
                placeholder={"Contoh : 4210230041"}
                isRequired
              />
              <div className="d-flex justify-content-between">
                <p style={{ fontSize: "18px", flex: "0.245" }} className="">
                  Jenis Kelamin :
                </p>

                <div style={{ flex: "0.755" }}>
                  <Form.Select
                    onChange={handleChange}
                    name={"jenis_kelamin"}
                    style={{
                      backgroundColor: "#D9D9D9",
                      border: "1px solid rgba(0, 0, 0, 0.25)",
                      borderRadius: "3px",
                    }}
                    value={form.jenis_kelamin}
                  >
                    <option value={"Laki-Laki"}>Laki-Laki </option>
                    <option value={"Perempuan"}>Perempuan </option>
                  </Form.Select>
                </div>
              </div>
              <InputFormWithLabel
                label={"Tingkat / Kelas"}
                placeholder={"Contoh : SD / 6"}
                isRequired
                value={form.tingkatDanKelas}
                name={"tingkatDanKelas"}
                onChange={handleChange}
              />
              {form.jenis_surat === "FORMAT_PINDAH_RAYON" && (
                <>
                  <div>
                    <InputFormWithLabel
                      label={"Tahun Lulus"}
                      type={"number"}
                      value={form.tahun_lulus}
                      name={"tahun_lulus"}
                      onChange={handleChange}
                      placeholder={"ISI TAHUN LULUS (PENTING) Contoh : 2020"}
                      isRequired
                    />
                  </div>
                  <div className="d-flex justify-content-end">
                    <p
                      style={{
                        color: "red",
                        fontSize: "13px",
                        fontWeight: "900",
                      }}
                    >
                      *Isi Tahun Lulus
                    </p>
                  </div>
                </>
              )}
            </div>
          </FormCard>

          {/* data tujuan sekolah */}
          <FormCard>
            <div className="mx-4 mt-3 mb-4 formCardHead">
              <h3 className="pb-3">Data Sekolah Tujuan</h3>
            </div>
            <div className="mx-4 d-flex flex-column gap-4">
              <InputFormWithLabel
                label={"Nama Sekolah"}
                placeholder={
                  "Masukkan Nama Sekolah Tujuan (KAPITAL SEMUA) [SMA NEGERI 2 TANJUNGPINANG]"
                }
                value={form.tujuan_sekolah}
                name={"tujuan_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"Alamat"}
                placeholder={"Masukkan Alamat Sekolah Tujuan"}
                value={form.alamat_tujuan_sekolah}
                name={"alamat_tujuan_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"No Telp"}
                type={"number"}
                placeholder={"Masukkan No Telepon Sekolah Tujuan"}
                value={form.noTelp_tujuan_sekolah}
                name={"noTelp_tujuan_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"Desa "}
                placeholder={"Masukkan Desa "}
                value={form.desa_tujuan_sekolah}
                name={"desa_tujuan_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"Kelurahan "}
                placeholder={"Masukkan Kelurahan "}
                value={form.kelurahan_tujuan_sekolah}
                name={"kelurahan_tujuan_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"Kecamatan"}
                placeholder={"Masukkan Kecamatan"}
                value={form.kecamatan_tujuan_sekolah}
                name={"kecamatan_tujuan_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"Kabupaten / Kota"}
                placeholder={"Masukkan Kabupaten / Kota"}
                value={form.kabupatenKota_tujuan_sekolah}
                name={"kabupatenKota_tujuan_sekolah"}
                onChange={handleChange}
              />

              <InputFormWithLabel
                label={"Provinsi"}
                placeholder={"Masukkan Provinsi"}
                value={form.provinsi_tujuan_sekolah}
                name={"provinsi_tujuan_sekolah"}
                onChange={handleChange}
              />
              <TextAreaFormWithLabel
                label={"Alasan Pindah"}
                placeholder={"Masukkan Alasan Pindah Sekolah"}
                value={form.alasan_pindah}
                name={"alasan_pindah"}
                onChange={handleChange}
                isRequired
              />
            </div>
          </FormCard>

          {/* data pilih jenis file*/}
          <FormCard>
            <div className="mx-4 mt-3 mb-4 formCardHead">
              <h3 className="pb-3">Pilih Jenis Surat</h3>
            </div>
            <div className="d-flex mx-4 flex-column gap-3">
              <InputFormWithLabel
                label={"Nomor Laporan"}
                type={"number"}
                value={form.nomor_laporan}
                name={"nomor_laporan"}
                onChange={handleChange}
                placeholder={"Contoh : 4321"}
                isRequired
              />
              <InputFormWithLabel
                label={"Kop Surat Sekolah"}
                placeholder={
                  "Contoh : SD NEGERI 014 TANJUNGPINANG BUKIT BESTARI"
                }
                onChange={handleChange}
                value={form.header_sekolah}
                name={"header_sekolah"}
                isRequired
              />
              <InputFormWithLabel
                label={"Alamat Kop Surat"}
                placeholder={
                  "Contoh : Jl Basuki Rahmat No 4 Bukit Bestari Tanjungpinang"
                }
                value={form.alamat_header_sekolah}
                name={"alamat_header_sekolah"}
                onChange={handleChange}
                isRequired
              />
              <InputFormWithLabel
                label={"Email Kop Surat"}
                placeholder={"Contoh : sdn014binaan@disdik.co.id"}
                isRequired
                value={form.email_header_sekolah}
                name={"email_header_sekolah"}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-end">
                <p style={{ color: "#FD8A8A", fontSize: "12px" }}>
                  *Bagian ini harus diisi agar sistem secara otomatis
                  menampilkan kop surat anda
                </p>
              </div>
              <InputFormWithLabel
                label={"Nama Kepala Sekolah Asal"}
                placeholder={"Contoh : Muhammad Fadhil, S. Pd"}
                isRequired
                value={form.nama_kepala_sekolah}
                name={"nama_kepala_sekolah"}
                onChange={handleChange}
              />
              <InputFormWithLabel
                label={"NIP Kepala Sekolah"}
                type={"number"}
                placeholder={"Contoh : 4321"}
                isRequired
                value={form.nip_kepala_sekolah}
                name={"nip_kepala_sekolah"}
                onChange={handleChange}
              />
              <div className="d-flex justify-content-end">
                <p style={{ color: "#FD8A8A", fontSize: "12px" }}>
                  *Bagian ini harus diisi agar sistem secara otomatis memasukkan
                  nama kepala sekolah dan nip nya
                </p>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-4 my-3">
              <p style={{ fontSize: "18px", flex: "0.245" }} className="">
                Hal :
              </p>

              <div style={{ flex: "0.755" }}>
                <Form.Select
                  onChange={handleChange}
                  name={"hal"}
                  style={{
                    backgroundColor: "#D9D9D9",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                  }}
                  value={form.hal}
                >
                  <option value={"PINDAH_KELUAR"}>Pindah Keluar </option>
                  <option value={"PINDAH_MASUK"}>Pindah Masuk </option>
                </Form.Select>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-4">
              <p style={{ fontSize: "18px", flex: "0.245" }} className="">
                Jenis Surat :
              </p>

              <div style={{ flex: "0.755" }}>
                <Form.Select
                  onChange={handleChange}
                  name={"jenis_surat"}
                  style={{
                    backgroundColor: "#D9D9D9",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                  }}
                  value={form.jenis_surat}
                >
                  <option value={"FORMAT_PINDAH_SEKOLAH"}>
                    Surat Pindah Sekolah{" "}
                  </option>
                  <option value={"FORMAT_PINDAH_RAYON"}>
                    Surat Pindah Rayon{" "}
                  </option>
                </Form.Select>
              </div>
            </div>
          </FormCard>

          {/* unggah berkas */}
          <FormCard>
            <div className="mx-4 mt-3 mb-4 formCardHead">
              <h3 className="pb-3">Unggah Berkas</h3>
            </div>
            <div className="mx-4 d-flex flex-column gap-4">
              <div>
                <ViewBorangCard
                  label={"Surat Permohonan Orangtua"}
                  status={status}
                  allData={{
                    ...form,
                    jenis_surat: "FORMAT_SURAT_PERMOHONAN_ORTU",
                  }}
                />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">
                    Upload Surat Permohonan Orangtua{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="file"
                    required
                    onChange={handleChange}
                    name={"surat_ortu"}
                  />
                </div>
              </div>
              <div>
                <ViewBorangCard
                  label={"Surat Keterangan Pindah"}
                  status={status}
                  allData={form}
                />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">
                    Upload Surat Keterangan Pindah{" "}
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="file"
                    required
                    onChange={handleChange}
                    name={"surat_pindah_sekolah"}
                  />
                </div>
              </div>
              {form.jenis_surat === "FORMAT_PINDAH_RAYON" && (
                <div>
                  {/* <ViewBorangCard label={"Surat Keterangan Lulus"} /> */}
                  <div
                    className=" pt-2"
                    style={{ borderTop: "1px solid #0A2966" }}
                  >
                    <h5 style={{ fontWeight: "400" }}>
                      Surat Keterangan Lulus
                    </h5>
                  </div>
                  <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                    <label htmlFor="">
                      Upload Surat Keterangan Lulus{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      required
                      onChange={handleChange}
                      name={"surat_keterangan_lulus"}
                    />
                  </div>
                </div>
              )}
              {form.hal === "PINDAH_MASUK" && (
                <div>
                  {/* <ViewBorangCard label={"Surat Rekomendasi Dinas Setempat"} /> */}
                  <div
                    className=" pt-2"
                    style={{ borderTop: "1px solid #0A2966" }}
                  >
                    <h5 style={{ fontWeight: "400" }}>
                      Surat Rekomendasi Dinas Setempat
                    </h5>
                  </div>
                  <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                    <label htmlFor="">
                      Upload Surat Rekomendasi Dinas Setempat{" "}
                      <span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="file"
                      required
                      onChange={handleChange}
                      name={"surat_rekomendasi_dinas_setempat"}
                    />
                  </div>
                </div>
              )}
              <div>
                {/* <ViewBorangCard label={"Surat Lain-lain"} /> */}
                <div
                  className=" pt-2"
                  style={{ borderTop: "1px solid #0A2966" }}
                >
                  <h5 style={{ fontWeight: "400" }}>Surat Lain-Lain</h5>
                </div>
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">Upload Surat Lain-lain</label>
                  <input
                    type="file"
                    onChange={handleChange}
                    name={"surat_lain_lain"}
                  />
                </div>
              </div>
            </div>
          </FormCard>

          <div className="d-flex justify-content-center mx-5 mt-5">
            <ButtonFormView type={"submit"}>Buat Laporan</ButtonFormView>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BuatLaporan;
