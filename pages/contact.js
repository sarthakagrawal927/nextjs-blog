import Head from "next/head";
import Layout from "../components/layout";

import ContactForm from "../components/contact-form";

function ContactPage() {
  return (
    <Layout>
      <ContactForm />
    </Layout>
  );
}

export default ContactPage;
