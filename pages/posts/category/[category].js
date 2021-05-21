import Head from "next/head";
import Layout, { siteTitle } from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.scss";
import Link from "next/link";
import Date from "../../../components/date";
import { getSortedPostsData } from "../../../lib/posts";
import { postCategories } from "../../../lib/postCategories";

export default function Blog({ postsData }) {
  return (
    <Layout title='Blog'>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title, category }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              {category}
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticPaths() {
  let paths = [];
  postCategories.map((category) =>
    paths.push({ params: { category: category } }),
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // console.log(getAllCategories());
  const allPostsData = getSortedPostsData();
  const postsData = allPostsData.filter((post) => {
    return post.category.toLowerCase() === params.category;
  });
  return {
    props: {
      postsData,
    },
  };
}
