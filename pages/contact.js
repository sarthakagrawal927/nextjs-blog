import Head from "next/head";
import Layout from "../components/layout";

import ContactForm from "../components/contact-form";
import Calendly from "../components/calendly";

function ContactPage() {
  return (
    <Layout>
      <ContactForm />
      <Calendly />
    </Layout>
  );
}

export default ContactPage;
