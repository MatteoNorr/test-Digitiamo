import SpeedRange from "../elements/SpeedRange";
import styles from "./MobileTab.module.scss";
import { useRef, useState } from "react";

const MobileTab = ({ data }) => {
  const handlerRef = useRef(null);
  const [position, setPosition] = useState(0);
  const [progress, setProgress] = useState(0);

  //Swipe tab
  const swiper = (e) => {
    document.body.style.overflow = "hidden";
    setPosition(e.touches[0].clientY);
    setProgress(0.72);
    if (position < 150) {
      handlerRef.current.style.top = "0";
    } else if (position > 450) {
      handlerRef.current.style.top = "93%";
      handlerRef.current.style.bottom = "0";
      document.body.style.overflow = "auto";
    } else {
      handlerRef.current.style.top = position + "px";
    }
  };
  // end Swiper Tab

  return (
    <>
      <div
        onTouchMove={(e) => swiper(e)}
        ref={handlerRef}
        className={styles.MobileTab}
      >
        <div className={styles.content}>
          <div className={styles.handler} />
          <h1>Timing Analysis</h1>
          <SpeedRange data={data} progress={progress} />
        </div>
      </div>
    </>
  );
};

export default MobileTab;
