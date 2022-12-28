import React from "react";
import Table from "react-bootstrap/Table";
import TableBodySelesai from "../TableBodySelesai/TableBodySelesai";
import TableHeader from "../TableHeader/TableHeader";
import { useSelector } from "react-redux";
function TableComponent(props) {
  const tableHeader = [
    "Nomor Naskah",
    "Hal",
    "Tanggal Naskah Masuk",
    "Nama Siswa",
    "NISN",
    "NIS",
    "Nama Ortu",
    "Tujuan Sekolah",
    // "Yang Menandatangani",
    // "Status Verifikasi",
    "Status TTD Kepsek",
    "Status Dikirim Kepsek",
    "Surat Dari DISDIK",
    // "Status Kirim",
    "Aksi",
  ];
  const { data } = useSelector((state) => state.dummyData);

  const dataButuhTTD = data
    .filter((item) => {
      return item.status_ttd_kepsek === false;
    })
    .map((item) => item);

  const dataPerluDikirim = data
    .filter((item) => {
      return item.status_kirim_dari_kepsek === false;
    })
    .map((item) => item);

  const dataSelesai = data
    .filter((item) => {
      return item.status_kirim_dari_kepsek === true;
    })
    .map((item) => item);

  // console.log(dataSelesai);
  return (
    <Table responsive striped bordered>
      <TableHeader dataRow={tableHeader} />
      {props.isTTD && <TableBodySelesai data={dataButuhTTD} />}
      {/* {props.isVerifikasi && <TableBodySelesai data={dataVerifikasi} />} */}
      {props.isNeedSend && <TableBodySelesai data={dataPerluDikirim} />}
      {props.isDone && <TableBodySelesai data={dataSelesai} />}
      {!props.isTTD &&
        !props.isNeedSend &&
        !props.isDone &&
        !props.isVerifikasi && <TableBodySelesai data={data} />}
      {/* {props.} */}
      {/* <TableBody data={data} /> */}
    </Table>
  );
}

export default TableComponent;
