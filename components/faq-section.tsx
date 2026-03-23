import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "What type of server do I need?",
      answer:
        "DorkPlus works on any modern server with basic specifications. We recommend at least 2GB RAM and a stable internet connection for optimal performance.",
    },
    {
      question: "What type of proxy do I need?",
      answer:
        "We support HTTP, SOCKS4, and SOCKS5 proxies. For best results, we recommend using high-quality residential or datacenter proxies with good speed and reliability.",
    },
    {
      question: "Is Google Proxyless included in all plans?",
      answer:
        "Google Proxyless is only available in our premium plan. The basic plan includes Ask Semi-Proxyless and other multi-engine parsers.",
    },
    {
      question: "What payment method do you accept?",
      answer:
        "We accept all major cryptocurrencies including Bitcoin, Ethereum, and Litecoin. We also accept PayPal and major credit cards for verified customers.",
    },
    {
      question: "What is the cloud storage?",
      answer:
        "Our cloud storage securely stores all your parsed data, scan results, and configurations. Everything is encrypted and accessible from your dashboard 24/7.",
    },
    {
      question: "Can I use DorkPlus on my own PC?",
      answer:
        "Yes, DorkPlus can be installed on your local machine. However, we recommend using our cloud infrastructure for better performance and reliability.",
    },
    {
      question: "Can I use DorkPlus as a complete beginner?",
      answer:
        "DorkPlus is designed with beginners in mind. We provide comprehensive documentation, tutorials, and 24/7 support to help you get started.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <Button variant="outline" className="mb-4 bg-transparent">
            Questions & Answers
          </Button>
          <h2 className="text-4xl font-bold mb-4">Learn more about DorkPlus</h2>
          <p className="text-muted-foreground">
            Feel free to contact us on{" "}
            <a href="#" className="text-primary hover:underline">
              Telegram
            </a>{" "}
            if you need further help.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
