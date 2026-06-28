import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { FAQ_DATA } from "@/constants/landingData"

export default function Faq() {
  return (
    <section id="faq" className="bg-gray-50 px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600">
            Temukan jawaban untuk pertanyaan umum tentang CRM kami.
          </p>
        </div>

        <Accordion type="single" collapsible className="mt-12 divide-y divide-gray-200">
          {FAQ_DATA.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id} className="py-2">
              <AccordionTrigger className="text-base text-gray-800 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
