import Button from "../elements/Button";
import Dropdown from "../elements/Dropdown";
import styles from "./Input.module.scss";

const Input = () => {
  return (
    <>
      <form className={styles.Input}>
        <Dropdown />
        <input
          className={styles.searchbar}
          ype="text"
          placeholder="Insert your link here"
          value=""
        />
        <Button label="SEND" />
      </form>
    </>
  );
};

export default Input;
