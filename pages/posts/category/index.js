import { getAllCategories } from "../../../lib/posts";
import Layout from "../../../components/layout";
import Link from "next/link";

export default function Blog({ allCategories }) {
  return (
    <Layout title='Blog'>
      <ul>
        {allCategories.map((category) => {
          return (
            <li>
              <Link href={`/posts/category/${category.toLowerCase()}`}>
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}

export async function getStaticProps() {
  const allCategories = await getAllCategories();
  return {
    props: {
      allCategories,
    },
  };
}
