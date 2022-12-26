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

function DetailNaskah() {
  const { id } = useParams();
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
  const targetData = allData.find((item) => item._id == id);
  console.log("target data >> ", targetData);
  // const roleSementara = "Ketua Sub Bagian";
  const [roleSementara, setRoleSementara] = useState(authorizationCheck());

  const onChangeTanggalDisposisi = (e) => {
    setTanggalDisposisi(e.target.value);
    console.log("tanggal_disposisi", tanggalDisposisi);
  };
  const handleMarkAsVerified = (id) => {
    console.log("role >>> ", roleSementara);
    if (/*form.role*/ roleSementara === "staff") {
      Swal.fire({
        title: "Verifikasi Naskah?",
        showDenyButton: true,
        confirmButtonText: "Verifikasi",
        denyButtonText: `Batalkan`,
      }).then((result) => {
        if (result.isConfirmed) {
          if (nomorNaskah && tanggalDisposisi) {
            dispatch(changeStatusVerifikasi(id));
            // console.log("no >> ", nomorNaskah);
            // console.log("tanggal Disposisi >> ", tanggalDisposisi);
            // console.log("jenis >> ", jenisSurat);
            // console.log("penandatangan >> ", penandaTangan);
            const payload = {
              id: id,
              nomor_naskah: nomorNaskah,
              tanggal_naskah_disposisi: tanggalDisposisi,
              jenis_surat: jenisSurat,
              yang_menandatangani: penandaTangan,
            };
            dispatch(updateNaskahVerifikasi(payload));
            Swal.fire("Verified!", "", "success");
            navigation("/home");
          } else {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Cek nomor naskah dan tanggal disposisi (harus diisi)",
            });
          }
        }
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda bukan orang yang melakukan Verifikasi Berkas",
      });
    }
  };

  const handleMarkAsTTD = (id) => {
    console.log("role >>> ", roleSementara);
    console.log("file >> ", fileDisdik);
    if (
      /*form.role*/ roleSementara === "kasubag" ||
      /*form.role*/ roleSementara === "sekretaris"
    ) {
      if (targetData.yang_menandatangani === roleSementara) {
        Swal.fire({
          title: "Yakin Untuk Menandatangi?",
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: "Tanda Tangan",
          denyButtonText: `Batal`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            dispatch(changeStatusTTD(id));
            Swal.fire("Berhasil di Tanda tangan!", "", "success");
            navigation("/home");
          } else if (result.isDenied) {
            Swal.fire("Tidak ada perubahan", "", "info");
          }
        });
        // if (formTTE.nip !== form.nip || formTTE.keyphrase !== form.keyphrase) {
        //   Swal.fire({
        //     icon: "error",
        //     title: "Oops...",
        //     text: "NIP atau KEYPHRASE Salah",
        //   });
        // } else if (
        //   formTTE.nip === form.nip &&
        //   formTTE.keyphrase === form.keyphrase
        // ) {
        //   Swal.fire({
        //     title: "Yakin Untuk Menandatangi?",
        //     showDenyButton: true,
        //     showCancelButton: true,
        //     confirmButtonText: "Tanda Tangan",
        //     denyButtonText: `Batal`,
        //   }).then((result) => {
        //     /* Read more about isConfirmed, isDenied below */
        //     if (result.isConfirmed) {
        //       dispatch(changeStatusTTD(id));
        //       Swal.fire("Berhasil di Tanda tangan!", "", "success");
        //     } else if (result.isDenied) {
        //       Swal.fire("Tidak ada perubahan", "", "info");
        //     }
        //   });
        // }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Anda bukanlah orang yang dipilih melakukan TTD",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda bukan orang yang melakukan TTD",
      });
    }
  };

  const handleChangeFormTTE = (e) => {
    setFormTTE(() => {
      return { ...formTTE, [e.target.name]: e.target.value };
    });
  };

  const handleMarkAsSended = (id) => {
    if (
      /*form.role*/ roleSementara === "kasubag" ||
      roleSementara === "sekretaris"
    ) {
      if (fileDisdik) {
        if (targetData.status_ttd === true) {
          Swal.fire({
            title: "Kirim Naskah?",
            showDenyButton: true,
            confirmButtonText: "Kirim",
            denyButtonText: `Batalkan`,
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(sendFileDisdik({ id: id, data: fileDisdik }));
              dispatch(changeStatusKirim(id));
              Swal.fire("Terkirim!", "", "success");
              navigation("/home");
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Naskah belum di tandatangani",
          });
        }
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "File Rekomendasi Belum Di Upload",
        });
      }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Anda bukan orang yang melakukan Pengiriman Naskah",
      });
    }
  };

  const handleChange = (e) => {
    setPenandatangan(e.target.value);
    // props.changeSelected(e.target.value);
  };
  const handleChangeJenisSurat = (e) => {
    setJenisSurat(e.target.value);
    // props.changeSelected(e.target.value);
  };

  const handleChangeFileDisdik = (e) => {
    setFileDisdik(e.target.files[0]);
    console.log("file >> ", fileDisdik);
  };

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

  useEffect(() => {
    if (!targetData) {
      navigation("/home");
    }
  }, []);
  // const jsonData = {
  //   nama_siswa: "ORIAS",
  //   asal_sekolah: "sman2",
  //   nomor_naskah: "27831",
  // };

  return (
    <>
      <NavBar />
      {targetData ? (
        <div className="d-flex flex-row justify-content-center">
          <div
            className="pt-3"
            style={{ width: "17%", borderRight: "2px solid #A19F9F" }}
          >
            <SideBar />
          </div>
          <main className="main pt-5 pb-5 px-3" style={{ width: "83%" }}>
            <FormCard>
              <div className="mx-4 mt-3 mb-4 formCardHead">
                <h3 className="pb-3">File-File Naskah id-{id}</h3>
              </div>
              <div className="mx-5 mt-3 mb-4">
                <ViewSuratCard
                  label={"Surat Permohonan Orangtua"}
                  pdfFile={targetData.surat_ortu}
                />
                <ViewSuratCard
                  label={"Surat Keterangan Pindah Sekolah / Rayon"}
                  pdfFile={targetData.surat_pindah}
                />
                <ViewSuratCard
                  label={"Surat Keterangan Lulus"}
                  pdfFile={targetData.surat_pindah}
                />
                <ViewSuratCard
                  label={"Surat Keterangan Dinas Pendidikan Setempat"}
                  pdfFile={targetData.surat_pindah}
                />
                <ViewSuratCard
                  label={"Surat Lain-Lain"}
                  pdfFile={`${targetData.surat_plh && targetData.surat_plh}`}
                />
              </div>
            </FormCard>

            <FormCard>
              <div className="mx-4 mt-3 mb-4 formCardHead">
                <h3 className="pb-3">Form Tanda Tangan {"(TTD)"}</h3>
              </div>
              {targetData.surat_disdik && (
                <div className="mx-5 mt-3 mb-4">
                  <ViewSuratCard
                    label={"Surat Rekomendasi DISDIK"}
                    pdfFile={targetData.surat_disdik}
                  />
                </div>
              )}
              {targetData.status_ttd === false ||
              targetData.status_kirim === false ? (
                <>
                  <div className="mx-5 mt-3 mb-4"></div>
                  <div className="d-flex flex-row justify-content-between align-items-center mx-4 mt-3 mb-4 px-4 gap-5">
                    <div>
                      <p>Upload Surat Yang Telah Di Tanda Tangan</p>
                      <input
                        type="file"
                        name={"filedisdik"}
                        // value={fileDisdik}
                        onChange={handleChangeFileDisdik}
                      />
                    </div>
                  </div>

                  <div className="mx-5 mt-3 mb-4">
                    <div className="d-flex flex-row align-items-center justify-content-between">
                      {targetData.status_ttd === false ? (
                        <div className="formLaporanAction d-flex justify-content-end align-items-center flex-column my-4 gap-3 ">
                          <div>
                            <ButtonFormView
                              onClick={() => handleMarkAsTTD(id)}
                              isprimary={"true"}
                            >
                              {/* Proses TTE */}
                              Tandai telah di Tandatangani
                            </ButtonFormView>
                          </div>
                        </div>
                      ) : (
                        <p className="text-center">Sudah Di TTD </p>
                      )}
                      {targetData.status_kirim === false ? (
                        <div className="formLaporanAction d-flex justify-content-end align-items-center flex-column my-4 gap-3 ">
                          <div>
                            <ButtonFormView
                              isinfo
                              onClick={() => handleMarkAsSended(id)}
                            >
                              Kirim
                            </ButtonFormView>
                          </div>
                        </div>
                      ) : (
                        <p className="d-flex justify-content-center align-items-center text-status-form mt-5 mb-0">
                          SUDAH DIKIRIM
                        </p>
                      )}
                    </div>
                  </div>
                </>
              ) : (
                <p className="d-flex justify-content-center align-items-center text-status-form mt-5 mb-0">
                  SUDAH DI TANDATANGANI DAN DI KIRIM DARI SEKOLAH
                </p>
              )}
            </FormCard>

          </main>
        </div>
      ) : (
        navigation("/home")
      )}
      <Footer />
    </>
  );
}

export default DetailNaskah;