import { faq } from "./data";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

export const Faq = () => {
  return (
    <div className="flex container w-3xl gap-20 mt-52 mb-32">
      <h2 className="text-5xl font-display relative top-4">Have <br /> questions?</h2>
      <div className="flex flex-1">
        <Accordion
          type="single"
          defaultValue={faq[0].id}
          collapsible
          className="flex flex-col gap-2"
        >
          {faq.map((article) => (
            <AccordionItem
              key={article.id}
              value={article.id}
              className="hover:bg-accent rounded-md px-4 border-b-0"
            >
              <AccordionTrigger className="pb-1 pt-0 py-4 text-left hover:no-underline font-display text-lg">
                {article.title}
              </AccordionTrigger>
              <AccordionContent className="text-tertiary pb-4 text-base">
                {article.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
