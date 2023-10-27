import styles from "./Dropdown.module.scss";

const Dropdown = () => {
  return (
    <div className={styles.Dropdown}>
      <select>
        <option>GET</option>
        <option>POST</option>
        <option>PUT</option>
        <option>DELETE</option>
        <option>INFO</option>
        <option>DUMB</option>
      </select>
    </div>
  );
};

export default Dropdown;
