import React from "react";
import styles from "./TextAreaFormWithLabel.module.css";

function TextAreaFormWithLabel(props) {
  return (
    <div className={styles.inputGroup}>
      <label> {props.label}</label>
      {/* {console.log("val >> ", props.value.toLocaleString())} */}
      <div>
        <textarea
          type={props.type}
          name={props.name}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.isRequired}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default TextAreaFormWithLabel;
