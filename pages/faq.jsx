import React from "react";
import FaqAccordion from "../components/Accordion";
import TreeAccordion from "../components/TreeAccordion";

function Faq() {
  return (
    <main className="faq-container">
      <h2>FAQ</h2>
      <h3>Event Planning and Styling Services</h3>
      <FaqAccordion />
      <h3 className="christmas">Christmas Tree Design Service</h3>
      <TreeAccordion />
    </main>
  );
}

export default Faq;
