import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";
import React from "react";

export default function FaqAccordion() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="faq-1">
        <AccordionTrigger>
          Can I enroll in multiple courses at once?
        </AccordionTrigger>
        <AccordionContent>
          Absolutely! You can enroll in multiple courses simultaneously and
          access them at your convenience.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
