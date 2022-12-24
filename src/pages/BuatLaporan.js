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
  // const { id } = useParams();
  const navigation = useNavigate();
  const [penandaTangan, setPenandatangan] = useState("kasubag");
  const [jenisSurat, setJenisSurat] = useState("Surat Pindah Sekolah");
  const [kembalikanSuratVerfikasi, setKembalikanSuratVerifikasi] =
    useState(false);
  const [kembalikanSuratTTD, setKembalikanSuratTTD] = useState(false);
  const [formTTE, setFormTTE] = useState({
    nip: "",
    keyphrase: "",
  });
  const [fileDisdik, setFileDisdik] = useState("");
  const [nomorNaskah, setNomorNaskah] = useState("");
  const [tanggalDisposisi, setTanggalDisposisi] = useState(new Date());
  const dispatch = useDispatch();
  const { data: allData, errorMessage } = useSelector(
    (state) => state.dummyData
  );
  // const { form } = useSelector((state) => state.login);
  // const targetData = allData.find((item) => item._id == id);
  // console.log("target data >> ", targetData);
  // const roleSementara = "Ketua Sub Bagian";
  const [roleSementara, setRoleSementara] = useState(authorizationCheck());

  useEffect(() => {
    if (errorMessage) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: errorMessage,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          dispatch(resetError());
        }
      });
    }
  }, [errorMessage]);

  return (
    <>
      <NavBar />

      <div className="d-flex flex-row justify-content-center">
        <div className="pt-3" style={{ width: "20%" }}>
          <SideBar />
        </div>
        <main className="main pt-5 pb-5 px-5" style={{ width: "80%" }}>
          {/* data Orangtua / wali murid*/}
          <FormCard>
            <div className="mx-4 mt-3 mb-4 formCardHead">
              <h3 className="pb-3">Data Orang Tua / Wali Murid</h3>
            </div>
            <div className="mx-4 d-flex flex-column gap-4">
              <InputFormWithLabel
                label={"Nama Lengkap"}
                placeholder={"Contoh : Setiawan Desiyani Mulyana"}
              />

              <InputFormWithLabel
                label={"Alamat"}
                placeholder={
                  "Contoh : Jl. Cendawan 15, RT. 001/RW. 005, Tanjung Priok"
                }
              />
              <InputFormWithLabel
                label={"Pekerjaan"}
                placeholder={"Contoh : Pegawai Negeri Sipil Guru SMA"}
              />
              <InputFormWithLabel
                label={"No HP"}
                type={"number"}
                placeholder={"Contoh : 08226928122"}
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
              />
              <InputFormWithLabel
                label={"Tempat Tanggal Lahir"}
                placeholder={"Contoh : Tanjungpinang, 14 Januari 2022"}
              />
              <InputFormWithLabel
                label={"Alamat"}
                placeholder={
                  "Contoh : Jl. Cendawan 15, RT. 001/RW. 005, Tanjung Priok"
                }
              />
              <InputFormWithLabel
                label={"NIS"}
                type={"number"}
                placeholder={"Contoh : 2010230041"}
              />
              <InputFormWithLabel
                label={"NISN"}
                type={"number"}
                placeholder={"Contoh : 4210230041"}
              />
              <div className="d-flex justify-content-between">
                <p style={{ fontSize: "18px", flex: "0.245" }} className="">
                  Jenis Kelamin :
                </p>

                <div style={{ flex: "0.755" }}>
                  <Form.Select
                    style={{
                      backgroundColor: "#D9D9D9",
                      border: "1px solid rgba(0, 0, 0, 0.25)",
                      borderRadius: "3px",
                    }}
                  >
                    <option value={"Pria"}>Laki-Laki </option>
                    <option value={"REKOMENDASI_PINDAH_SEKOLAH_MASUK"}>
                      Perempuan{" "}
                    </option>
                  </Form.Select>
                </div>
              </div>
              <InputFormWithLabel
                label={"Tingkat / Kelas"}
                placeholder={"Contoh : SD / 6"}
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
              />
              <InputFormWithLabel
                label={"Alamat"}
                placeholder={"Masukkan Alamat Sekolah Tujuan"}
              />
              <InputFormWithLabel
                label={"Desa / Kelurahan"}
                placeholder={"Masukkan Desa / Kelurahan"}
              />
              <InputFormWithLabel
                label={"Kecamatan"}
                placeholder={"Masukkan Kecamatan"}
              />
              <InputFormWithLabel
                label={"Kabupaten / Kota"}
                placeholder={"Masukkan Kabupaten / Kota"}
              />
              <InputFormWithLabel
                label={"Provinsi"}
                placeholder={"Masukkan Provinsi"}
              />
              <TextAreaFormWithLabel
                label={"Alasan Pindah"}
                placeholder={"Masukkan Alasan Pindah Sekolah"}
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
                label={"Kop Surat Sekolah"}
                placeholder={
                  "Contoh : SD NEGERI 014 TANJUNGPINANG BUKIT BESTARI"
                }
              />
              <InputFormWithLabel
                label={"Alamat Kop Surat"}
                placeholder={
                  "Contoh : Jl Basuki Rahmat No 4 Bukit Bestari Tanjungpinang"
                }
              />
              <InputFormWithLabel
                label={"Email Kop Surat"}
                placeholder={"Contoh : sdn014binaan@disdik.co.id"}
              />
              <div className="d-flex justify-content-end">
                <p style={{fontSize: "12px"}}>*Bagian ini harus diisi agar sistem secara otomatis menampilkan kop surat anda</p>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-4 my-3">
              <p style={{ fontSize: "18px", flex: "0.245" }} className="">
                Hal :
              </p>

              <div style={{ flex: "0.755" }}>
                <Form.Select
                  style={{
                    backgroundColor: "#D9D9D9",
                    border: "1px solid rgba(0, 0, 0, 0.25)",
                    borderRadius: "3px",
                  }}
                >
                  <option value={"PINDAH KELUAR"}>Pindah Keluar </option>
                  <option value={"PINDAH MASUK"}>Pindah Masuk </option>
                </Form.Select>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-4">
              <p style={{ fontSize: "18px", flex: "0.245" }} className="">
                Jenis Surat :
              </p>

              <div style={{ flex: "0.755" }}>
                <Form.Select
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
                  <input type="file" />
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
                  <input type="file" />
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
                  <input type="file" />
                </div>
              </div>
              <div>
                <ViewBorangCard label={"Surat Lain-lain"} />
                <div className="input-group mt-2 gap-2 mx-1 d-flex flex-column">
                  <label htmlFor="">Upload Surat Lain-lain</label>
                  <input type="file" />
                </div>
              </div>
            </div>
          </FormCard>

          <div className="d-flex justify-content-center mx-5 mt-5">
            <ButtonFormView onClick={() => navigation("/BuatLaporan")}>
              Buat Laporan
            </ButtonFormView>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default BuatLaporan;
