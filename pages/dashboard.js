import Layout from "../components/layout";
import GSearch from "../components/gsearch";
import YoutubeSearch from "../components/youtubesearch";
import Whatsapp from "../components/whatsapp";

import Pomodoro from "../components/pomodoro";
import Link from "next/link";

export default function Sarthak() {
  return (
    <Layout title='The Dashboard'>
      <GSearch />
      <YoutubeSearch />
      <Pomodoro />
      <Whatsapp />
      <img src='https://wakatime.com/share/@sarthakagrawal927/7466eb9d-adc9-43fa-9bba-8f10836e873f.png' />
    </Layout>
  );
}
