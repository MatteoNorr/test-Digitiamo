import styles from "./Button.module.scss";
import { HiMagnifyingGlass } from "react-icons/hi2";

const Button = ({ label }) => {
  return (
    <div className={styles.Button}>
      <button type="submit" className={styles.submit}>
        <label>{label}</label>
        <HiMagnifyingGlass className={styles.glass} />
      </button>
    </div>
  );
};

export default Button;
