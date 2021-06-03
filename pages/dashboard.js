import Layout from "../components/layout";

import Pomodoro from "../components/pomodoro";
import JQ from "../components/jq";

export default function Sarthak(props) {
  return (
    <Layout title='The Dashboard'>
      <JQ joke={props.joke} quote={props.quote} />
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
