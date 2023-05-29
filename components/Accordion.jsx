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

export default function FaqAccordion() {
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What Does U&U stand for?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            People always ask what U&U stands for. Fun fact about me is that I
            have an identical twin Sister named Ugonna and so my mother is the
            one that actually came up with the name U&U and I loved it so much.
            U&U stands for Ugochi & Ugonna.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How early do I have to Book?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>1-4 months in advance</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What do you take care of?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Full event planning, Day of coordination, Event styling & Christmas
            tree décor.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is a good Budget to have for events?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Budget varies with the nature and size of the event but the
            avearge event that is not a wedding is about $5,000. We work with
            different budgets. Book a consultation for details on how we can
            make your budget work for you.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Where are you located?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Dallas, Texas</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>What areas do you Service?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>DFW, Austin, Houston and all other locations.</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Do you offer balloon classes?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Something we are looking forward to starting. Stay tuned</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What’s the best way to contact you?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>Via email uandudesign@gmail.com or phone number 832-768-6500</p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>Do you do weddings?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes, I do offer styling service and day of coordination services.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            What is the process to schedule an appointment?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            We take $150 for consultation fee and if you move forward the
            deposit is included in your service. If you can cancel, you lose the
            deposit.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How does payment work for events?
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Half deposit upon invoice and balance is due 2 weeks prior to the
            event date.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}
