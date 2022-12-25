import React, {useState} from 'react'
import { authorizationCheck } from "../utils/authRole";

function useStateBuatLaporan() {
    const [form, setForm] = useState({
    nomor_laporan: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nomor_laporan
        : ""
    }`,
    asal_sekolah: authorizationCheck(),
    hal: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).hal
        : "PINDAH_KELUAR"
    }`
    ,
    jenis_surat: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).jenis_surat
        : "FORMAT_PINDAH_SEKOLAH"
    }`,
    nama_siswa: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nama_siswa
        : ""
    }`,
    nis: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nis
        : ""
    }`,
    nisn_siswa: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nisn_siswa
        : ""
    }`,
    alamat: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).alamat
        : ""
    }`,
    tempat_tgl_lahir: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).tempat_tgl_lahir
        : ""
    }`,
    jenis_kelamin: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).jenis_kelamin
        : "Laki-Laki"
    }`,
    tingkatDanKelas: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).tingkatDanKelas
        : ""
    }`,
    nama_orang_tua: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nama_orang_tua
        : ""
    }`,
    pekerjaan_orang_tua: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).pekerjaan_orang_tua
        : ""
    }`,
    alamat_orangtua: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).alamat_orangtua
        : ""
    }`,
    noHp_orang_tua: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).noHp_orang_tua
        : ""
    }`,
    tahun_lulus: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).tahun_lulus
        : ""
    }`,
    tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).tujuan_sekolah
        : ""
    }`,
    tanggal_naskah: new Date(),
    nama_kepala_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nama_kepala_sekolah
        : ""
    }`,
    nip_kepala_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).nip_kepala_sekolah
        : ""
    }`,
    alamat_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).alamat_tujuan_sekolah
        : ""
    }`,
    noTelp_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).noTelp_tujuan_sekolah
        : ""
    }`,
    desa_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).desa_tujuan_sekolah
        : ""
    }`,
    kelurahan_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).kelurahan_tujuan_sekolah
        : ""
    }`,
    kecamatan_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).kecamatan_tujuan_sekolah
        : ""
    }`,
    kabupatenKota_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).kabupatenKota_tujuan_sekolah
        : ""
    }`,
    provinsi_tujuan_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).provinsi_tujuan_sekolah
        : ""
    }`,
    alasan_pindah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).alasan_pindah
        : ""
    }`,
    header_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).header_sekolah
        : ""
    }`,
    alamat_header_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).alamat_header_sekolah
        : ""
    }`,
    email_header_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).email_header_sekolah
        : ""
    }`,
    surat_ortu: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).surat_ortu
        : ""
    }`,
    surat_pindah_sekolah: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).surat_pindah_sekolah
        : ""
    }`,
    surat_keterangan_lulus: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).surat_keterangan_lulus
        : ""
    }`,
    surat_rekomendasi_dinas_setempat: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).surat_rekomendasi_dinas_setempat
        : ""
    }`,
    surat_lain_lain: `${
      localStorage.getItem("form")
        ? JSON.parse(localStorage.getItem("form")).surat_lain_lain
        : ""
    }`,
  });
  return {
    form, setForm
  }
}

export default useStateBuatLaporan