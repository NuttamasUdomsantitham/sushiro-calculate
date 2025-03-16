'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Banner from "@/components/Banner";
import Count from "@/components/Count"
import QuantityInput from "@/components/QuantityInput";

export default function Home() {
  return (
    <main className={styles.main}>
      <Banner/>
      <Count/>

    </main>
  );
}
