import WebViewer from "@pdftron/webviewer";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SideBar from "../components/SideBar/SideBar";
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
function dapatkanBulan(angka) {
  if (angka == 1) {
    return "Januari";
  } else if (angka == 2) {
    return "Februari";
  } else if (angka == 3) {
    return "Maret";
  } else if (angka == 4) {
    return "April";
  } else if (angka == 5) {
    return "Mei";
  } else if (angka == 6) {
    return "Juni";
  } else if (angka == 7) {
    return "Juli";
  } else if (angka == 8) {
    return "Agustus";
  } else if (angka == 9) {
    return "September";
  } else if (angka == 10) {
    return "Oktober";
  } else if (angka == 11) {
    return "November";
  } else if (angka == 12) {
    return "Desember";
  }
}

function CreateBorang(props) {
  const viewer = useRef(null);
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();

  const dateMasuk = new Date(searchParams.get("tanggal_naskah"));
  const tanggalMasuk = dateMasuk.getDate();
  const bulanMasuk = dapatkanBulan(dateMasuk.getMonth() + 1);
  const tahunMasuk = dateMasuk.getFullYear();
  const header = searchParams.get("header_sekolah").toUpperCase()
  const [jenisSurat, setJenisSurat] = useState(searchParams.get("jenis_surat"));
  const asalSekolah = searchParams.get("asal_sekolah").toUpperCase()
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
    kabupatenKota_tujuan_sekolah: searchParams.get("kabupatenKota_tujuan_sekolah"),
    provinsi_tujuan_sekolah: searchParams.get("provinsi_tujuan_sekolah"),
    nama_kepala_sekolah: searchParams.get("nama_kepala_sekolah"),
    nip_kepala_sekolah: searchParams.get("nip_kepala_sekolah"),
  };
  console.log("searchparams >> ", searchParams.get("nama_siswa"));
  console.log("props >> ", props);
  const token = Cookies.get("token")
  useEffect(() => {
    if (!token) {
      navigation("/home");
    }
  }, []);
  console.log("query >> ", jsonData);
  useEffect(() => {
    WebViewer(
      { path: "lib", initialDoc: `/files/${jenisSurat}.docx` },
      viewer.current
    ).then((instance) => {
      instance.UI.disableElements(["toolbarGroup-Shapes"]);
      instance.UI.disableElements(["toolbarGroup-Edit"]);
      instance.UI.disableElements(["toolbarGroup-Insert"]);
      instance.UI.disableElements(["toolbarGroup-View"]);
      instance.UI.disableElements(["toolbarGroup-Annotate"]);
      instance.UI.disableElements(["toolbarGroup-Forms"]);
      instance.UI.disableElements(["toolbarGroup-Button"]);
      instance.UI.disableElements(["toolbarGroup-FillAndSign"]);
      instance.UI.disableElements(["signatureToolGroupButton"]);
      instance.UI.disableElements(["notesPanel"]);
      instance.UI.disableElements(["viewControlsButton"]);
      instance.UI.disableElements(["selectToolButton"]);
      instance.UI.disableElements(["toggleNotesButton"]);
      instance.UI.disableElements(["searchButton"]);
      instance.UI.disableElements(["freeTextToolGroupButton"]);
      instance.UI.disableElements(["crossStampToolButton"]);
      instance.UI.disableElements(["checkStampToolButton"]);
      instance.UI.disableElements(["rubberStampToolGroupButton"]);
      instance.UI.disableElements(["dateFreeTextToolButton"]);
      instance.UI.disableElements(["eraserToolButton"]);
      instance.UI.disableElements(["panToolButton"]);
      instance.UI.disableElements(["signatureToolGroupButton"]);
      instance.UI.disableElements(["viewControlsOverlay"]);
      instance.UI.disableElements(["ribbons"]);
      instance.UI.disableElements(["tools"]);
      instance.UI.disableElements(["headerItems"]);
      instance.UI.disableElements(["toolsHeader"]);
      const { documentViewer } = instance.Core;

      documentViewer.addEventListener("documentLoaded", async () => {
        await documentViewer.getDocument().documentCompletePromise();
        documentViewer.updateView();
        await documentViewer.getDocument().applyTemplateValues(jsonData);
      });
    });
  }, []);

  


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
          <div className="d-flex align-items-center justify-content-center mb-4">
            <h4 className="text-center ">Buat Borang </h4>
          </div>
          <div
            className="webviewer"
            ref={viewer}
            style={{
              height: "100vh",

              justifyContent: "center",
              alignItems: "center",
            }}
          ></div>
        </main>
      </div>
    </div>
  );
}

export default CreateBorang;
