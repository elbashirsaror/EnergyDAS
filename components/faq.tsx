import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What does energyDAS actually do?",
    answer:
      "We provide the complete energy stack: data acquisition hardware, SCADA and automation, monitoring and diagnostics software, plus energy engineering services such as master planning, HVAC, lighting and retro-commissioning.",
  },
  {
    question: "Can energyDAS integrate with our existing meters and control systems?",
    answer:
      "Yes. Our modules and PLC hardware are designed to work alongside existing metering, BMS and control infrastructure, so you can add visibility without ripping out what already works.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We support agricultural, commercial, education, healthcare, industrial, metals, mining, public and governmental, renewables, retail, utilities, and water and wastewater sites.",
  },
  {
    question: "How do you help us reduce carbon and stay compliant?",
    answer:
      "Through demand-side management, greenhouse gas schemas, utility bill analytics and energy policy support, we help you evidence savings and meet regulatory and net-zero commitments.",
  },
  {
    question: "Do you offer ongoing support after installation?",
    answer:
      "Yes. Our monitoring and diagnostics run continuously, and our engineering team provides technical support, downloads and retro-commissioning to keep your systems performing over time.",
  },
]

export function Faq() {
  return (
    <section id="news" className="scroll-mt-16 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">FAQ</p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-lg text-muted-foreground">
            Everything you need to know before partnering with energyDAS.
          </p>
        </div>

        <Accordion className="mt-12 w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={faq.question} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-pretty text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
