import Link from "next/link";
import Head from "next/head";
import Layout from "../components/layout";
import GSearch from "../components/gsearch";
import Pomodore from "../components/pomodoro";

export default function Sarthak() {
  return (
    <Layout>
      <Head>
        <title>The Dashboard</title>
      </Head>
      <GSearch />
      <Pomodore />
    </Layout>
  );
}
