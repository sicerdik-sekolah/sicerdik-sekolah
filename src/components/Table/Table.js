import React from "react";
import Table from "react-bootstrap/Table";
import TableBody from "../TableBody/TableBody";
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
    // "Status Kirim",
    "Aksi",
  ];
  const { data } = useSelector((state) => state.dummyData);
  const dataReverse = [...data].reverse()
  console.log("data >>>>",dataReverse);
  const dataButuhTTD = data ? [...data].reverse()
    .filter((item) => {
      return item.status_ttd_kepsek === false;
    })
    .map((item) => item): [];

  const dataPerluDikirim = data ? [...data].reverse()
    .filter((item) => {
      return item.status_kirim_dari_kepsek === false;
    })
    .map((item) => item): [];

  const dataSelesai = data ? [...data].reverse()
    .filter((item) => {
      return item.status_kirim_dari_kepsek === true;
    })
    .map((item) => item) : [];
  
  console.log(dataSelesai);
  return (
    <Table responsive striped bordered>
      <TableHeader dataRow={tableHeader} />
      {props.isTTD && <TableBody data={dataButuhTTD} />}
      {/* {props.isVerifikasi && <TableBody data={dataVerifikasi} />} */}
      {props.isNeedSend && <TableBody data={dataPerluDikirim} />}
      {props.isDone && <TableBody data={dataSelesai} />}
      {!props.isTTD && !props.isNeedSend && !props.isDone && !props.isVerifikasi && (
        <TableBody data={dataReverse} />
      )}
      {/* {props.} */}
      {/* <TableBody data={data} /> */}
    </Table>
  );
}

export default TableComponent;
