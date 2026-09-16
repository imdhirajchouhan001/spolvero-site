import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type Props = { items: { q: string; a: string }[] };

export default function Faq({ items }: Props) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {items.map((item, i) => (
        <AccordionItem key={item.q} value={`q${i}`} className="border-b border-border">
          <AccordionTrigger className="py-5 text-left text-base font-medium text-brand hover:no-underline sm:text-lg">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base text-muted-foreground">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
