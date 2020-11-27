import Layout from "../components/layout";
import GSearch from "../components/gsearch";
import Whatsapp from "../components/whatsapp";

import Pomodoro from "../components/pomodoro";
import Link from "next/link";

export default function Sarthak() {
  return (
    <Layout title='The Dashboard'>
      <GSearch />
      <Pomodoro />
      <Whatsapp />
    </Layout>
  );
}
