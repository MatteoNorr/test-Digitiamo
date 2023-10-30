import { useState } from "react";
import Button from "../elements/Button";
import Dropdown from "../elements/Dropdown";
import styles from "./Input.module.scss";

const Input = ({ url, setSubmit }) => {
  const onSubmitTrue = (e) => {
    e.preventDefault();
    setSubmit(true);
  };

  return (
    <>
      <form onSubmit={onSubmitTrue} className={styles.Input}>
        <Dropdown />
        <input className={styles.searchbar} ype="text" placeholder={url} />
        <Button label="SEND" />
      </form>
    </>
  );
};

export default Input;
