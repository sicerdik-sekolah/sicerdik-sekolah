import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../../components/Table/dataDummy";
import axios from "axios";
import Cookies from "js-cookie";
import { apiPath } from "../../config/index";
const initialState = {
  data: [],
  errorMessage: "",
};

export const createLaporan = createAsyncThunk(
  "/dummyDataSlice/createLaporan",
  async (payload) => {
    // console.log("payload send file disdik >> ", payload);
    // console.log(">>>>>surat_ortu", payload.surat_ortu);
    // console.log(">>>>>surat_pindah", payload.surat_pindah_sekolah);
    // console.log(">>>>>surat_lain_lain", payload.surat_lain_lain);
    // console.log(
    //   ">>>>>surat_dinas_pendidikan_setempat",
    //   payload.surat_rekomendasi_dinas_setempat
    // );
    // console.log(">>>>>surat_keterangan_lulus", payload.surat_keterangan_lulus);
    // console.log(">>>>>tanggal_naskah_masuk", payload.tanggal_naskah);
    // console.log(">>>>>nama_siswa", payload.nama_siswa);
    // console.log(">>>>>nisn_siswa", payload.nisn_siswa);
    // console.log(">>>>>tujuan_sekolah", payload.tujuan_sekolah);
    // console.log(">>>>>hal", payload.hal);
    // console.log(">>>>>nomor_laporan", payload.nomor_laporan);
    // console.log(">>>>>tempat_tgl_lahir", payload.tempat_tgl_lahir);
    // console.log(">>>>>nis", payload.nis);
    // console.log(">>>>>jenis_kelamin", payload.jenis_kelamin);
    // console.log(">>>>>alasan_pindah", payload.alasan_pindah);
    // console.log(">>>>>tingkatDanKelas", payload.tingkatDanKelas);
    // console.log(">>>>>nama_orang_tua", payload.nama_orang_tua);
    // console.log(">>>>>pekerjaan_orang_tua", payload.pekerjaan_orang_tua);
    // console.log(">>>>>alamat_orangtua", payload.alamat_orangtua);
    // console.log(">>>>>noHp_orangtua", payload.noHp_orangtua);
    // console.log(">>>>>jenis_surat", payload.jenis_surat);
    // console.log(">>>>>alamat_tujuan_sekolah", payload.alamat_tujuan_sekolah);
    // console.log(">>>>>noTelp_tujuan_sekolah", payload.noTelp_tujuan_sekolah);
    // console.log(">>>>>desa_tujuan_sekolah", payload.desa_tujuan_sekolah);
    // console.log(
    //   ">>>>>kelurahan_tujuan_sekolah",
    //   payload.kelurahan_tujuan_sekolah
    // );
    // console.log(
    //   ">>>>>kecamatan_tujuan_sekolah",
    //   payload.kecamatan_tujuan_sekolah
    // );
    // console.log(
    //   ">>>>>kabupatenKota_tujuan_sekolah",
    //   payload.kabupatenKota_tujuan_sekolah
    // );
    // console.log(
    //   ">>>>>provinsi_tujuan_sekolah",
    //   payload.provinsi_tujuan_sekolah
    // );
    const token = Cookies.get("token");
    let formData = new FormData();
    formData.append("surat_ortu", payload.surat_ortu);
    formData.append("surat_pindah", payload.surat_pindah_sekolah);
    formData.append("surat_lain_lain", payload.surat_lain_lain);
    formData.append(
      "surat_dinas_pendidikan_setempat",
      payload.surat_rekomendasi_dinas_setempat
    );
    formData.append("surat_keterangan_lulus", payload.surat_keterangan_lulus);
    formData.append("tanggal_naskah_masuk", payload.tanggal_naskah);
    formData.append("nama_siswa", payload.nama_siswa);
    formData.append("nisn_siswa", payload.nisn_siswa);
    formData.append("tujuan_sekolah", payload.tujuan_sekolah);
    formData.append("hal", payload.hal);
    formData.append("nomor_laporan", payload.nomor_laporan);
    formData.append("tempat_tgl_lahir", payload.tempat_tgl_lahir);
    formData.append("nis", payload.nis);
    formData.append("jenis_kelamin", payload.jenis_kelamin);
    formData.append("alasan_pindah", payload.alasan_pindah);
    formData.append("tingkatDanKelas", payload.tingkatDanKelas);
    formData.append("nama_orang_tua", payload.nama_orang_tua);
    formData.append("pekerjaan_orang_tua", payload.pekerjaan_orang_tua);
    formData.append("alamat_orangtua", payload.alamat_orangtua);
    formData.append("noHp_orangtua", payload.noHp_orangtua);
    formData.append("jenis_surat", payload.jenis_surat);
    formData.append("alamat_tujuan_sekolah", payload.alamat_tujuan_sekolah);
    formData.append("noTelp_tujuan_sekolah", payload.noTelp_tujuan_sekolah);
    formData.append("desa_tujuan_sekolah", payload.desa_tujuan_sekolah);
    formData.append(
      "kelurahan_tujuan_sekolah",
      payload.kelurahan_tujuan_sekolah
    );
    formData.append(
      "kecamatan_tujuan_sekolah",
      payload.kecamatan_tujuan_sekolah
    );
    formData.append(
      "kabupatenKota_tujuan_sekolah",
      payload.kabupatenKota_tujuan_sekolah
    );
    formData.append("provinsi_tujuan_sekolah", payload.provinsi_tujuan_sekolah);
    // const res = await axios({
    //   method : "post",
    //   url : `${apiPath}/cms/laporan`,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    //   },
    //   data : {
    //     ...payload,
    //     ...formData
    //   }
    // })
    const res = await axios.post(`${apiPath}/cms/laporan`, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": formData ? "multipart/form-data" : "application/json",
      },
    });

    // console.log("res >> ", res);
    return res;
  }
);

export const fetchNaskah = createAsyncThunk(
  "/dummyDataSlice/fetchNaskah",
  async () => {
    try {
      const token = Cookies.get("token");
      // console.log("token >>> ", token);
      const resp = await axios({
        method: "get",
        url: `${apiPath}/cms/laporan-sekolah`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log("respon laporan fetching >> ", resp);
      return resp.data.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeStatusVerifikasi = createAsyncThunk(
  "/dummyDataSlice/changeStatusVerifikasi",
  async (id) => {
    try {
      const token = Cookies.get("token");
      // console.log("token >>> ", token);
      const res = await axios({
        method: "put",
        url: `${apiPath}/cms/laporan/ubah-status-verifikasi/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
export const changeStatusKirimKepsek = createAsyncThunk(
  "/dummyDataSlice/changeStatusKirim",
  async (id) => {
    try {
      const token = Cookies.get("token");
      // console.log("token >>> ", token);
      const res = await axios({
        method: "put",
        url: `${apiPath}/cms/laporan/ubah-status-kirim-kepsek/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log("res >> ", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);
export const changeStatusKirim = createAsyncThunk(
  "/dummyDataSlice/changeStatusKirim",
  async (id) => {
    try {
      const token = Cookies.get("token");
      // console.log("token >>> ", token);
      const res = await axios({
        method: "put",
        url: `${apiPath}/cms/laporan/ubah-status-kirim/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log("res >> ", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateNaskahVerifikasi = createAsyncThunk(
  "/dummyDataSlice/updateNaskahVerifikasi",
  async (payload) => {
    try {
      const token = Cookies.get("token");
      // console.log("payload >> ", payload)
      // console.log("token >> ", token)
      const res = await axios({
        method: "put",
        url: `${apiPath}/cms/laporan/update-data-verifikasi/${payload.id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
        data: payload,
      });
      // console.log("res >> ", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const changeStatusTTD = createAsyncThunk(
  "/dummyDataSlice/changeStatusTTD",
  async (id) => {
    try {
      const token = Cookies.get("token");
      // console.log("token >>> ", token);
      const res = await axios({
        method: "put",
        url: `${apiPath}/cms/laporan/ubah-status-ttd-kepsek/${id}`,
        headers: {
          Authorization: "Bearer " + token,
        },
      });
      // console.log("res >> ", res);
      return res;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateNaskahTelahTTDKepsek = createAsyncThunk(
  "/dummyDataSlice/updateNaskahTelahTTDKepsek",
  async (payload) => {
    let filename = payload.data;

    // console.log("payload send file disdik >> ", payload);
    // console.log("filename send file disdik >> ", filename);
    const token = Cookies.get("token");
    // console.log("token >> ", token);
    let formData = new FormData();
    formData.append("surat_pindah", filename);
    // const res = await axios({
    //   method : "put",
    //   url :`${apiPath}/cms/laporan/update-surat-ttd-kepsek/${payload.id}`,
    //   data : formData,
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     'Content-Type': formData ? 'multipart/form-data' : 'application/json',
    //   },
    // })
    const res = await axios.put(
      `${apiPath}/cms/laporan/update-surat-ttd-kepsek/${payload.id}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": formData ? "multipart/form-data" : "application/json",
        },
      }
    );

    // console.log("res >> ", res);
    return res;
  }
);

export const dummyDataSlice = createSlice({
  name: "dummyData",
  initialState,
  reducers: {
    // changeStatusVerifikasi: (state, action) => {
    //   const idSearch = Number(action.payload);
    //   state.data.find((item) => item.id === idSearch).status_verifikasi =
    //     "SUDAH";
    // },
    // changeStatusKirim: (state, action) => {
    //   const idSearch = Number(action.payload);
    //   if (
    //     state.data.find((item) => item.id === idSearch).status_ttd === "SUDAH"
    //   ) {
    //     state.data.find((item) => item.id === idSearch).status_kirim = "SUDAH";
    //   } else {
    //     state.errorMessage = "Berkas Belum di Tandatangan";
    //   }
    // },
    // changeStatusTTD: (state, action) => {
    //   const id = Number(action.payload);
    //   console.log(id);
    //   if (
    //     state.data.find((item) => item.id === id).status_verifikasi === "SUDAH"
    //   ) {
    //     state.data.find((item) => item.id === id).status_ttd = "SUDAH";
    //   } else {
    //     state.errorMessage = "Berkas Belum di Verifikasi";
    //   }
    // },
    resetError: (state) => {
      state.errorMessage = "";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNaskah.fulfilled, (state, action) => {
        // console.log("action payload >>> ", action.payload);
        state.data = action.payload;
      })
      .addCase(changeStatusVerifikasi.fulfilled, (state, action) => {
        // console.log("action payload >>> ", action.payload);
      })
      .addCase(changeStatusTTD.fulfilled, (state, action) => {
        // console.log("action payload >>> ", action.payload);
      })

      .addCase(changeStatusKirim.fulfilled, (state, action) => {
        // console.log("action payload >>> ", action.payload);
      })
      .addCase(updateNaskahVerifikasi.fulfilled, (state, action) => {
        // console.log("action payload >>> ", action.payload);
      })

      .addCase(createLaporan.fulfilled, (state, action) => {
        // console.log("action payload >>> ", action.payload);
      });
  },
});

export const { resetError } = dummyDataSlice.actions;
export default dummyDataSlice.reducer;
