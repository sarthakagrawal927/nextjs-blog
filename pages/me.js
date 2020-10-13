import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

export default function Sarthak() {
  return (
    <Layout>
      <Head>
        <link rel='icon' href='logo/vercel.svg' />
        <title>Sarthak | CV</title>
      </Head>
      <h1>My personal CV </h1>; Here are some blogs
      <Link href='/posts/firstpost'>
        <a className='foo' target='_blank' rel='noopener noreferrer'>
          this page!
        </a>
      </Link>
    </Layout>
  );
}
