import { useEffect, useState } from "react";
import styles from "./Cards.module.scss";

const Cards = ({ data }) => {
  //Alternative for fetching data
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch(
  //       "https://api.npoint.io/3c65c66e537e1badac54"
  //     );
  //     const data = await response.json();
  //     setData(data);
  //   }

  //   fetchData();
  // }, []);

  return (
    <>
      {data.map((data, index) => (
        <div key={index} className={styles.Cards}>
          <div className={styles.card}>
            <h2>URL INFO</h2>
            <div className={styles.el}>
              <h3>DOMAIN</h3>
              <p>{data.domain}</p>
            </div>
            <div className={styles.el}>
              <h3>SCHEME</h3>
              <p>{data.scheme}</p>
            </div>
            <div className={styles.el}>
              <h3>PATH</h3>
              <p>{data.path}</p>
            </div>
          </div>
          <div className={styles.card}>
            <h2>RESPONSE</h2>
            <div className={styles.el}>
              <p>{data.response}</p>
            </div>
            <div className={styles.el}>
              <p>Location: {data.location}</p>
            </div>
            <div className={styles.el}>
              <p>Server: {data.server}</p>
            </div>
          </div>
          <div className={styles.card}>
            <h2>RESPONSE</h2>
            <div className={styles.el}>
              <p>{data.http}</p>
            </div>
            <div className={styles.el}>
              <p>Date: {data.date.slice(0, 10)}</p>
            </div>
            <div className={styles.el}>
              <p>Server: {data.server}</p>
            </div>
          </div>
        </div>
      ))}
      <div className={styles.share}>
        <h2>SHARE</h2>
        {data.map((data, index) => (
          <p key={index}>
            <a href="" target="_blank">
              {data.httprequest}
            </a>
          </p>
        ))}
      </div>
    </>
  );
};

export default Cards;
