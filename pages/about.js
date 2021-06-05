import Image from "next/image";
import Layout from "../components/layout";

const about = () => {
  return (
    <Layout>
      {" "}
      <ul>
        <li>
          {" "}
          <a href='https://www.imdb.com/list/ls083838140/'>
            My Watched TV series
          </a>
        </li>
        <li>
          {" "}
          <a href='https://www.imdb.com/chart/moviemeter/'>Popular movies</a>
        </li>
        <li>
          {" "}
          <a href='https://www.imdb.com/chart/tvmeter/'>Popular TV</a>
        </li>
      </ul>
      Coding Activity
      <figure>
        <embed src='https://wakatime.com/share/@sarthakagrawal927/c25c97c9-20d5-414e-9054-5469e2052f51.svg' />
      </figure>
      <figure>
        <embed src='https://wakatime.com/share/@sarthakagrawal927/6cfe5ca5-1641-4e68-86b9-7266a6892e2d.svg' />
      </figure>
      <figure>
        <embed src='https://wakatime.com/share/@sarthakagrawal927/73178f2a-624f-4ffd-8dcd-6c31898ac457.svg' />
      </figure>
      <figure>
        <embed src='https://wakatime.com/share/@sarthakagrawal927/07ba4a46-68bc-4e64-8480-8e4b169a0251.svg' />
      </figure>
    </Layout>
  );
};

export default about;
