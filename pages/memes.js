import Image from "next/image";
import Layout from "../components/layout";

const jq = ({ memes }) => {
  return (
    <Layout>
      {memes
        .filter(({ ups }) => {
          return ups > 2000;
        })
        .map(({ preview }) => {
          return (
            <Image
              key={preview[0]}
              src={preview[preview.length - 1]}
              alt=''
              height={400}
              width={400}
            />
          );
        })}
    </Layout>
  );
};

export async function getStaticProps() {
  const numberOfMemes = 100;

  const res2 = await fetch(
    "https://meme-api.herokuapp.com/gimme/" + numberOfMemes,
  );
  const res2_ = await res2.json();
  const memes = res2_.memes;
  // console.log(memes);

  return {
    props: {
      memes,
    },
  };
}

export default jq;
