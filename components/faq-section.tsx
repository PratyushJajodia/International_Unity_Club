"use client"

import { motion } from "framer-motion"

const faqData = [
  {
    question: "What is Campus Vibes all about?",
    answer:
      "We're dedicated to improving student life with awesome products, exclusive deals, and a vibrant community.",
  },
  {
    question: "How do I join the Campus Vibes community?",
    answer:
      "Simply sign up for our newsletter and follow us on social media for the latest updates and events!",
  },
  {
    question: "Can I suggest a product or service for Campus Vibes to offer?",
    answer:
      "Absolutely! We're always looking for new ways to improve student life. Send us your suggestions through our contact form.",
  },
]

export default function FaqSection() {
  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * index,
        duration: 0.5,
        ease: "easeInOut",
      },
    }),
  }

  return (
    <section className="py-16 md:py-24 bg-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900">
            Got Questions? We've Got Answers!
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-md border border-blue-100 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {faq.question}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
