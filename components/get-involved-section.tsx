"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { UserPlus, Users, Heart, MessageSquare } from "lucide-react"

export default function GetInvolvedSection() {
  const opportunities = [
    {
      icon: <UserPlus className="h-10 w-10 text-blue-600" />,
      title: "Become a Member",
      description:
        "Join our club to access all resources, events, and build a network of friends from around the world.",
      buttonText: "Sign Up",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfqhRISm-4mw3KzhFFcatecmQm6FC89ROXh49Jr7OfkFC0N-A/viewform",
    },
    {
      icon: <Users className="h-10 w-10 text-sky-600" />,
      title: "Volunteer",
      description: "Help organize events, welcome new students, or contribute your skills to support our community.",
      buttonText: "Apply Now",
      link: "https://linktr.ee/iucyorku?fbclid=PAZXh0bgNhZW0CMTEAAaeQ5zjtLApuBgRlS59_ubzjbuypejswWz5Yca94cn1tuJCDvfC25SVTLhKdhQ_aem__d36_cVcVrQwL7Im29spVw",
    },
    {
      icon: <Heart className="h-10 w-10 text-indigo-600" />,
      title: "Peer Mentor",
      description:
        "Guide new international students through their first year by sharing your experience and knowledge.",
      buttonText: "Learn More",
      link: "https://linktr.ee/iucyorku?fbclid=PAZXh0bgNhZW0CMTEAAaeQ5zjtLApuBgRlS59_ubzjbuypejswWz5Yca94cn1tuJCDvfC25SVTLhKdhQ_aem__d36_cVcVrQwL7Im29spVw",
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-cyan-600" />,
      title: "Language Partner",
      description:
        "Participate in our language exchange program to help others learn your language while improving your own skills.",
      buttonText: "Join Program",
      link: "https://linktr.ee/iucyorku?fbclid=PAZXh0bgNhZW0CMTEAAaeQ5zjtLApuBgRlS59_ubzjbuypejswWz5Yca94cn1tuJCDvfC25SVTLhKdhQ_aem__d36_cVcVrQwL7Im29spVw",
    },
  ]

  return (
    <section id="get-involved" className="py-20 bg-gradient-to-b from-sky-100 to-blue-100">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
            Get Involved
          </h2>
          <p className="text-blue-800/80 max-w-2xl mx-auto">
            There are many ways to participate in the International Unity Club and make a difference in our community.
            Find the opportunity that's right for you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((opportunity, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 border-blue-200 h-full shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="p-3 rounded-full bg-blue-50 flex-shrink-0">{opportunity.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-blue-800">{opportunity.title}</h3>
                    <p className="text-blue-700/80 mb-4">{opportunity.description}</p>
                    <Button
                      variant="outline"
                      className="border-blue-300 text-blue-700 hover:bg-blue-100 hover:text-blue-800"
                      onClick={() => opportunity.link && window.open(opportunity.link, '_blank', 'noopener,noreferrer')}
                    >
                      {opportunity.buttonText}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 p-8 md:p-12 rounded-lg text-center bg-blue-700 shadow-xl"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Don't Miss Out!
          </h3>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto text-lg">
            Join the International Unity Club community today. Lead initiatives, develop your leadership skills, and make a lasting impact on the international student community. Let's make the most of your student years!
          </p>

        </motion.div>
      </div>
    </section>
  )
}
