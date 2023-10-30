import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { GetServerSideProps } from "next";
import Input from "@/components/Input";
import Cards from "@/components/Cards";
import MobileTab from "@/components/MobileTab";
import { useState } from "react";

const BASE_URL = "https://api.npoint.io/8ff13758138fc91bac40";

export default function Home({ data }) {
  const [submit, setSubmit] = useState(false);

  return (
    <>
      <Head>
        <title>HTTP analysis</title>
        <meta name="description" content="Digitiamo Test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className={styles.status}>
          {submit && (
            <div className={styles.status_txt}>
              <h2>{data[0].status}</h2>
              <p>Everything is fine</p>
            </div>
          )}
          <Input url={BASE_URL} submit={submit} setSubmit={setSubmit} />
        </div>
        <Cards data={data} submit={submit} />
        <MobileTab data={data} submit={submit} />
      </main>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();

  return { props: { data } };
};
