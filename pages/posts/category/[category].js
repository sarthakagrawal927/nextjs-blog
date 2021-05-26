import Layout from "../../../components/layout";
import utilStyles from "../../../styles/utils.module.scss";
import Link from "next/link";
import Date from "../../../components/date";
import { getSortedPostsData, getAllCategories } from "../../../lib/posts";

export default function Blog({ postsData }) {
  return (
    <Layout title='Blog'>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {postsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
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
  const categories = await getAllCategories();
  categories.map((category) =>
    paths.push({ params: { category: category.toLowerCase() } }),
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
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
