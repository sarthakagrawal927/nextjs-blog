import Head from "next/head";
import styles from "./layout.module.scss";

export default function Layout({ children, home, title }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
        <title>{title}</title>
      </Head>
      <header className={styles.header}>Significant Hobbies</header>
      <main>{children}</main>
    </div>
  );
}
