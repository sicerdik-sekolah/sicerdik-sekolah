import WebViewer from "@pdftron/webviewer";
import NavBar from "../components/NavBar/NavBar";
import jsPDF from "jspdf";
import SideBar from "../components/SideBar/SideBar";
import { useReactToPrint } from "react-to-print";
import Button from "../components/ButtonFormView/ButtonFormView"
import { useEffect, useRef } from "react";
import {
  useParams,
  useLocation,
  useSearchParams,
  useNavigate,
} from "react-router-dom";
import Cookies from "js-cookie";
import moment from "moment/moment";
import { useState } from "react";
import dapatkanBulan from "../utils/getMonth";
import SuratPindahSekolahKeluar from "../components/TemplateBorang/SuratPindahSekolahKeluar/SuratPindahSekolahKeluar";
import ButtonFormView from "../components/ButtonFormView/ButtonFormView";
import SuratPindahRayonKeluar from "../components/TemplateBorang/SuratPindahRayonKeluar/SuratPindahRayonKeluar";
import SuratPermohonanOrangTua from "../components/TemplateBorang/SuratPermohonanOrangTua/SuratPermohonanOrangTua";

function CreateBorang(props) {
  const viewer = useRef(null);
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();

  const dateMasuk = new Date(searchParams.get("tanggal_naskah"));
  const tanggalMasuk = dateMasuk.getDate();
  const bulanMasuk = dapatkanBulan(dateMasuk.getMonth() + 1);
  const tahunMasuk = dateMasuk.getFullYear();
  const header = searchParams.get("header_sekolah").toUpperCase();
  const [jenisSurat, setJenisSurat] = useState(searchParams.get("jenis_surat"));
  const asalSekolah = searchParams.get("asal_sekolah").toUpperCase();
  const jsonData = {
    nama_orang_tua: searchParams.get("nama_orang_tua"),
    alamat_orangtua: searchParams.get("alamat_orangtua"),
    pekerjaan_orang_tua: searchParams.get("pekerjaan_orang_tua"),
    noHp_orangtua: searchParams.get("noHp_orangtua"),
    jenis_surat: searchParams.get("jenis_surat"),
    nomor_laporan: searchParams.get("nomor_laporan"),
    nama_siswa: searchParams.get("nama_siswa"),
    asal_sekolah: asalSekolah,
    tujuan_sekolah: searchParams.get("tujuan_sekolah"),
    tanggal_naskah: `${tanggalMasuk} ${bulanMasuk} ${tahunMasuk}`,
    nisn_siswa: searchParams.get("nisn_siswa"),
    nis: searchParams.get("nis"),
    tingkatDanKelas: searchParams.get("tingkatDanKelas"),
    jenis_kelamin: searchParams.get("jenis_kelamin"),
    nip: searchParams.get("nip_kepala_sekolah"),
    tempat_tgl_lahir: searchParams.get("tempat_tgl_lahir"),
    alasan_pindah: searchParams.get("alasan_pindah"),
    tahun_lulus: searchParams.get("tahun_lulus"),
    header_sekolah: header,
    alamat_header_sekolah: searchParams.get("alamat_header_sekolah"),
    email_header_sekolah: searchParams.get("email_header_sekolah"),
    alamat_tujuan_sekolah: searchParams.get("alamat_tujuan_sekolah"),
    noTelp_tujuan_sekolah: searchParams.get("noTelp_tujuan_sekolah"),
    desa_tujuan_sekolah: searchParams.get("desa_tujuan_sekolah"),
    kelurahan_tujuan_sekolah: searchParams.get("kelurahan_tujuan_sekolah"),
    kecamatan_tujuan_sekolah: searchParams.get("kecamatan_tujuan_sekolah"),
    kabupatenKota_tujuan_sekolah: searchParams.get(
      "kabupatenKota_tujuan_sekolah"
    ),
    provinsi_tujuan_sekolah: searchParams.get("provinsi_tujuan_sekolah"),
    nama_kepala_sekolah: searchParams.get("nama_kepala_sekolah"),
    nip_kepala_sekolah: searchParams.get("nip_kepala_sekolah"),
  };
  console.log("searchparams >> ", searchParams.get("nama_siswa"));
  console.log("props >> ", props);
  const token = Cookies.get("token");
  useEffect(() => {
    if (!token) {
      navigation("/home");
    }
  }, []);
  console.log("query >> ", jsonData);

  const printArea = useRef()
  const handlePrint = useReactToPrint({
    content: () => printArea.current,
    documentTitle: "emp-data",
  });
  const handleDownload = () => {
    console.log("downloadingg");
    // const doc = new jsPDF("p", "pt", "a4");
    const doc = new jsPDF({
      orientation: "potrait",
      unit: "px",
      format: "a4",
    });
    doc.html(document.getElementById("content"), {
      callback: (pdf) => {
        pdf.save("File.pdf");
      },
    });
  };

  return (
    <div>
      <NavBar />
      <div className="d-flex flex-row justify-content-center">
        <div
          className="pt-3"
          style={{ width: "17%", borderRight: "2px solid #A19F9F" }}
        >
          <SideBar />
        </div>
        <main className="main pt-5 pb-5 px-2" style={{ width: "83%" }}>
          <div className="d-flex align-items-center justify-content-center align-items-start mb-4">
            <h4 className="text-center ">Buat Borang </h4>
          </div>
          <div className="container d-flex justify-content-center mb-3">
          <ButtonFormView onClick={handlePrint}>Cetak Borang</ButtonFormView>
          </div>
          <div
            className="webviewer"
            ref={viewer}
            style={{
              backgroundColor: "white",
              // height: "100vh",
              padding: "2rem",
              paddingRight: "6rem",
              paddingLeft: "6rem",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div ref={printArea} id="content" style={{padding: "1rem 2rem"}}>
              {jenisSurat === "FORMAT_PINDAH_SEKOLAH" && <SuratPindahSekolahKeluar data={jsonData} />}
              {jenisSurat === "FORMAT_PINDAH_RAYON" && <SuratPindahRayonKeluar data={jsonData} />}
              {jenisSurat === "FORMAT_SURAT_PERMOHONAN_ORTU" && <SuratPermohonanOrangTua data={jsonData} />}
            </div>
          </div>
          {/* <button onClick={handleDownload}>Download</button> */}
          
        </main>
      </div>
    </div>
  );
}

export default CreateBorang;
