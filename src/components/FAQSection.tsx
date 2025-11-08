import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "What makes ethnic rhinoplasty different from traditional rhinoplasty?",
      answer:
        "Ethnic rhinoplasty requires specialized knowledge of diverse nasal structures. Different ethnicities have unique nasal characteristics - thicker skin, wider nostrils, lower bridges. Our surgeons use preservation techniques that maintain ethnic identity while achieving natural refinement.",
    },
    {
      question: "Will my nose look natural after ethnic rhinoplasty?",
      answer:
        "Yes. Our philosophy is preservation over transformation. We refine proportions while maintaining your ethnic character. Results are balanced and harmonious with your facial features, never 'westernized' or cookie-cutter.",
    },
    {
      question: "How long is the recovery for ethnic rhinoplasty?",
      answer:
        "Initial recovery takes 1-2 weeks with most swelling subsiding in 2-3 months. Final results emerge over 12-18 months as ethnic skin types typically have thicker tissue that settles gradually. We provide comprehensive aftercare throughout your journey.",
    },
    {
      question: "What ethnic backgrounds do you specialize in?",
      answer:
        "Our surgeons have extensive experience with Black, Asian, Middle Eastern, Hispanic, and South Asian rhinoplasty. Each ethnicity requires different surgical approaches, and we tailor techniques to your unique nasal anatomy.",
    },
    {
      question: "How much does ethnic rhinoplasty cost in the UK?",
      answer:
        "Costs typically range from £6,000-£10,000 depending on complexity. We offer transparent pricing, finance options, and detailed consultations to create a treatment plan that fits your goals and budget.",
    },
  ];

  return (
    <section className="py-16 lg:py-20 px-4 bg-[#111418]" id="faq">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-white">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-[#1b1f23] rounded-xl border border-white/10 overflow-hidden px-6"
            >
              <AccordionTrigger className="py-4 hover:no-underline hover:bg-[#1d2328] transition-colors text-left">
                <span className="font-semibold text-white pr-4">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-white/80">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

