import React from "react";
import "react-accessible-accordion/dist/fancy-example.css";

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

export default function TreeAccordion() {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How early do I have to Book?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Bookings start from July</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What does the Christmas tree package include?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Design, Décor and labor fee</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Does the Service Fee Include decorations, ornaments & tree purchase?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            No, it does not. We provide assistant to purchase these items and we
            can do a cost breakdown for you.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Do you offer installation on staircase?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Yes we do at an additional cost.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Does the Price Include a takedown fee?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            No it does not. Take down is a minimum of $200 depending on your
            tree
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
          What is the process to book?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>You schedule a consultation. Deposit is required to finalize a booking.</p>
        </AccordionItemPanel>
      </AccordionItem>      
    </Accordion>
  );
}
