import Image from "next/image";

const jq = ({ joke, quote }) => {
  return (
    <>
      <h1>Joke of the day</h1>
      <h5>{joke.setup}</h5>
      <p>{joke.punchline}</p>
      <h1>Quote of the day</h1>
      <h5>{quote.text}</h5>
    </>
  );
};

export default jq;
