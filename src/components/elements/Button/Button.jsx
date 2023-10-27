import styles from "./Button.module.scss";

const Button = ({ label }) => {
  return (
    <div className={styles.Button}>
      <button type="submit" className={styles.submit}>
        {label}
      </button>
    </div>
  );
};

export default Button;
