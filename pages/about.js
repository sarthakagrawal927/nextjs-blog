import Image from "next/image";
import Layout from "../components/layout";

const about = () => {
  return (
    <Layout>
      {" "}
      <a href='https://www.imdb.com/user/ur102109993/lists?ref_=nv_usr_lst_3'>
        Movies and Series{" "}
      </a>
      Coding Activity
      <img src='https://wakatime.com/share/@sarthakagrawal927/7466eb9d-adc9-43fa-9bba-8f10836e873f.png' />
      <figure>
        <embed src='https://wakatime.com/share/@sarthakagrawal927/c25c97c9-20d5-414e-9054-5469e2052f51.svg' />
      </figure>
    </Layout>
  );
};

export default about;
