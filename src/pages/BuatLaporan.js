import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate, createSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  changeStatusVerifikasi,
  changeStatusKirim,
  changeStatusTTD,
  resetError,
  updateNaskahVerifikasi,
  sendFileDisdik,
} from "../store/reducers/dummyDataSlice";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
import FormCard from "../components/FormCard/FormCard";
import ViewSuratCard from "../components/ViewSuratCard/ViewSuratCard";
import Form from "react-bootstrap/Form";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";
import InputFormWithLabel from "../components/InputFormWithLabel/InputFormWithLabel";
import ViewStatusCard from "../components/ViewStatusCard/ViewStatusCard";
import Swal from "sweetalert2";
import SideBar from "../components/SideBar/SideBar";
import { authorizationCheck } from "../utils/authRole";
import TextAreaFormWithLabel from "../components/TextAreaFormWithLabel/TextAreaFormWithLabel";
import ViewBorangCard from "../components/ViewBorangCard/ViewBorangCard";
function BuatLaporan() {
  const [form, setForm] = useState({
    nomor_laporan: "",
    asal_sekolah: "",
    hal: "PINDAH_KELUAR",
    jenis_surat : "FORMAT_PINDAH_SEKOLAH",
    nama_siswa: "",
    nis: "",
    nisn_siswa: "",
    alamat : "",
    tempat_tgl_lahir : "",
    jenis_kelamin: "Laki-Laki",
    tingkatDanKelas: "",
    nama_orang_tua: "",
    pekerjaan_orang_tua: "",
    alamat_orangtua: "",
    noHp_orang_tua : "",
    tahun_lulus: "",
    tujuan_sekolah: "",
    tanggal_naskah: "",
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
    header_sekolah : "",
    alamat_header_sekolah: "",
    email_header_sekolah : ""
  });

  const handleChange = (e) => {
    
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // const { id } = useParams();
  const navigation = useNavigate();
  const [penandaTangan, setPenandatangan] = useState("kasubag");
  const [jenisSurat, setJenisSurat] = useState("Surat Pindah Sekolah");
  const [fileDisdik, setFileDisdik] = useState("");
  const [tanggalDisposisi, setTanggalDisposisi] = useState(new Date());
  const dispatch = useDispatch();

  // const roleSementara = "Ketua Sub Bagian";
  const [roleSementara, setRoleSementara] = useState(authorizationCheck());

  return (
    <>
      <NavBar />

      <div className="d-flex flex-row justify-content-center">
        <div className="pt-3" style={{ width: "20%" }}>
          <SideBar />
        </div>
        <form className="main pt-5 pb-5 px-5" style={{ width: "80%" }}>
          {/* data Orangtua / wali murid*/}
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
                  <Form.Select onChange={handleChange} name={"jenis_kelamin"}
                    style={{
                      backgroundColor: "#D9D9D9",
                      border: "1px solid rgba(0, 0, 0, 0.25)",
                      borderRadius: "3px",
                    }}
                  >
                    <option value={"Laki-Laki"}>Laki-Laki </option>
                    <option value={"Perempuan"}>
                      Perempuan{" "}
                    </option>
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
                <p style={{ fontSize: "12px" }}>
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
                <p style={{ fontSize: "12px" }}>
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
                <Form.Select onChange={handleChange} name={"hal"}
                  style={{
                    backgroundColor: "#D9D9D9",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                  }}
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
                <Form.Select onChange={handleChange} name={"jenis_surat"}
                  style={{
                    backgroundColor: "#D9D9D9",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                  }}
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
                <ViewBorangCard label={"Surat Permohonan Orangtua"} />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">Upload Surat Permohonan Orangtua</label>
                  <input type="file" required />
                </div>
              </div>
              <div>
                <ViewBorangCard label={"Surat Keterangan Pindah"} />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">Upload Surat Keterangan Pindah</label>
                  <input type="file" />
                </div>
              </div>
              <div>
                <ViewBorangCard label={"Surat Keterangan Lulus"} />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">Upload Surat Keterangan Lulus</label>
                  <input type="file" required />
                </div>
              </div>
              <div>
                <ViewBorangCard
                  label={"Surat Surat Rekomendasi Dinas Setempat"}
                />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">
                    Upload Surat Rekomendasi Dinas Setempat
                  </label>
                  <input type="file" required />
                </div>
              </div>
              <div>
                <ViewBorangCard label={"Surat Lain-lain"} />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">Upload Surat Lain-lain</label>
                  <input type="file" required />
                </div>
              </div>
            </div>
          </FormCard>

          <div className="d-flex justify-content-center mx-5 mt-5">
            <ButtonFormView onClick={() => console.log(form)}>
              Buat Laporan
            </ButtonFormView>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default BuatLaporan;
