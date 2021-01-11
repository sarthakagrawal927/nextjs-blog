import Layout from "../components/layout";
import GSearch from "../components/gsearch";
import YoutubeSearch from "../components/youtubesearch";
import Whatsapp from "../components/whatsapp";

import Pomodoro from "../components/pomodoro";
import JQ from "../components/jq";
import Link from "next/link";
export default function Sarthak(props) {
  return (
    <Layout title='The Dashboard'>
      <JQ joke={props.joke} quote={props.quote} />

      <GSearch />
      <YoutubeSearch />
      <Pomodoro />
      <Whatsapp />
      <img src='https://wakatime.com/share/@sarthakagrawal927/7466eb9d-adc9-43fa-9bba-8f10836e873f.png' />
      <figure>
        <embed src='https://wakatime.com/share/@sarthakagrawal927/c25c97c9-20d5-414e-9054-5469e2052f51.svg' />
      </figure>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    "https://official-joke-api.appspot.com/jokes/programming/random",
  );
  const jokes = await res.json();
  const joke = jokes[0];
  // console.log(joke);

  const res1 = await fetch("https://type.fit/api/quotes");
  const quotes = await res1.json();
  const quote = quotes[Math.ceil(Math.random() * quotes.length)];
  // console.log(quote);

  return {
    props: {
      quote,
      joke,
    },
  };
}
