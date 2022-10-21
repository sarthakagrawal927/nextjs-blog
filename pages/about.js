import Image from "next/image";
import Layout from "../components/layout";

const about = () => {
  return (
    <Layout>
      <ul>
        <li>
          <a href='https://www.imdb.com/list/ls083838140/'>
            My Watched TV series
          </a>
        </li>
        <li>
          <a href='https://www.imdb.com/chart/moviemeter/'>Popular movies</a>
        </li>
        <li>
          <a href='https://www.imdb.com/chart/tvmeter/'>Popular TV</a>
        </li>
      </ul>
    </Layout>
  );
};

export default about;
