import Link from "next/link";

import JugglingKid from "../components/jugglingKid";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout title='Significant Hobbies'>
      <h2>
        If there is something stupid I am doing or learning, it will be here
        soon.
      </h2>
      <ul>
        <li>
          <Link href='/dashboard'>Dashboard</Link>
        </li>{" "}
        <li>
          <Link href='/posts'>Posts</Link>
        </li>{" "}
        <li>
          <Link href='/about'>About</Link>
        </li>{" "}
        <li>
          {" "}
          <Link href='/contact'>Contact</Link>
        </li>{" "}
        <li>
          {" "}
          <Link href='/posts/category'>Post Categories</Link>
        </li>
        <li>
          <a href='https://boxing-dusky.vercel.app/'>
            Box App
          </a>
        </li>
      </ul>{" "}
      <JugglingKid />
    </Layout>
  );
}
