import React from "react";
import FaqAccordion from "../components/Accordion";
import TreeAccordion from "../components/TreeAccordion";
import Head from "next/head";

function Faq() {
  return (
    <>
      <Head>
        <title>FAQ - U&U Designs</title>
      </Head>
      <main className="faq-container">
        <h2>FAQ</h2>
        <h3>Event Planning and Styling Services</h3>
        <FaqAccordion />
        <h3 className="christmas">Christmas Tree Design Service</h3>
        <TreeAccordion />
      </main>
    </>
  );
}

export default Faq;
