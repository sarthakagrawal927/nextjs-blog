import { useEffect } from "react";
import Layout from "../../components/layout";

export default function system() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src =
      "https://www.retainable.app/assets/retainable/rss-embed/retainable-rss-embed.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <Layout>
      <h1>Posts on Medium</h1>
      <div
        id='retainable-rss-embed'
        data-rss='https://medium.com/feed/retainable,
https://medium.com/feed/vue-mastery'
        data-maxcols='1'
        data-layout='grid'
        data-poststyle='external'
        data-readmore=' Read More'
        data-buttonclass='btn btn-primary'
        data-offset='-100'></div>
    </Layout>
  );
}
