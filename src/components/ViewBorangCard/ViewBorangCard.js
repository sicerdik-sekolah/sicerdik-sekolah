import React, { useState, useRef, useEffect } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import styles from "./ViewBorangCard.module.css";
import iconEye from "../../assets/icon-eye.png";
import { useReactToPrint } from "react-to-print";
import { apiFile } from "../../config/index";
import WebViewer from "@pdftron/webviewer";
function ViewBorangCard(props) {
  return (
    <>
      <div className={`${styles.card} mb-2`}>
        <p>{props.label}</p>
        <div className={styles.icon}>
          <img src={iconEye} alt="" />
        </div>
      </div>
    </>
  );
}

export default ViewBorangCard;
