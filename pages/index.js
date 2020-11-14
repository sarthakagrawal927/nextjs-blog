import Link from "next/link";

import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.scss";

export default function Home() {
  return (
    <Layout title='Significant Hobbies'>
      <h2>
        If there is something stupid I am doing or learning, it will be here
        soon.
      </h2>
      <p>H </p>
      <Link href='/dashboard'>
        <a>Dashboard</a>
      </Link>{" "}
      <Link href='/about'>
        <a>About</a>
      </Link>{" "}
      <Link href='/posts'>
        <a>Posts</a>
      </Link>{" "}
      <Link href='/medium'>
        <a>Medium</a>
      </Link>{" "}
    </Layout>
  );
}
