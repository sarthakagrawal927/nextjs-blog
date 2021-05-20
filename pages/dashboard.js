import Layout from "../components/layout";
import GSearch from "../components/gsearch";
import YoutubeSearch from "../components/youtubesearch";
import Pomodoro from "../components/pomodoro";
import JQ from "../components/jq";
import Link from "next/link";
export default function Sarthak(props) {
  return (
    <Layout title='The Dashboard'>
      <Link href='/memes'>
        <a>Memes</a>
      </Link>{" "}
      <JQ joke={props.joke} quote={props.quote} />
      <GSearch />
      <YoutubeSearch />
      <Pomodoro />
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random",
  );
  const jokes = await res.json();
  const joke = jokes[0];

  const res1 = await fetch("https://type.fit/api/quotes");
  const quotes = await res1.json();
  const quote = quotes[Math.ceil(Math.random() * quotes.length)];

  return {
    props: {
      quote,
      joke,
    },
  };
}
