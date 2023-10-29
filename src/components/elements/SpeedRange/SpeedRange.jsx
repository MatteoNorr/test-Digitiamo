import styles from "./SpeedRange.module.scss";
import ArcProgress from "react-arc-progress";

const SpeedRange = ({ data, progress }) => {
  const fillColor = { gradient: ["#ff5353", "#ffd321", "#77e6b3"] };
  const emptyColor = "#e9e9e9";

  return (
    <>
      <div className={styles.pageLoad}>
        <ArcProgress
          progress={progress}
          fillColor={fillColor}
          emptyColor={emptyColor}
          text="720"
          size={180}
          textStyle={{ font: "Montserrat, sans-serif", size: "1.8em" }}
        />
        <span>Great!</span>
        <h3>Page Load</h3>
        {data.map((data, i) => (
          <p key={i}>{data.load}</p>
        ))}
      </div>
      <div className={styles.interaction}>
        <ArcProgress
          progress={progress}
          fillColor={fillColor}
          emptyColor={emptyColor}
          text="720"
          size={180}
          textStyle={{ font: "Montserrat, sans-serif", size: "1.8em" }}
        />
        <span>Great!</span>
        <h3>Page Load</h3>
        {data.map((data, i) => (
          <p key={i}>{data.interaction}</p>
        ))}
      </div>
    </>
  );
};

export default SpeedRange;
