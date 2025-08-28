"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, GraduationCap, Home, Landmark, Utensils, Globe } from "lucide-react"
import { useState } from "react"

export default function ResourcesSection() {
  const [selectedResource, setSelectedResource] = useState(null)

  const resources = [
    {
      icon: <GraduationCap className="h-10 w-10 text-blue-600" />,
      title: "Academic Support",
      description:
        "Study groups, tutoring connections, and academic advising resources specifically for international students.",
      options: [
        {
          title: "York International (YI)",
          description: "Central hub for international students providing professional advising on immigration, finances, housing, employment, and social/cultural issues.",
          link: "https://yorkinternational.yorku.ca/",
          details: "YI is the central hub for international students, providing professional advising on immigration, finances, housing, employment, and social/cultural issues. They are your primary point of contact from application through graduation."
        },
        {
          title: "Student Support & Advising (SSA)",
          description: "University-wide resource providing guidance on administrative matters like student accounts, tuition, and financial aid.",
          link: "https://students.yorku.ca/services-and-support",
          details: "While available to all York students, SSA is a crucial part of the support system for international students. Advisors can help you navigate the administrative side of university life."
        }
      ]
    },
    {
      icon: <Utensils className="h-10 w-10 text-cyan-600" />,
      title: "Cultural Adaptation",
      description:
        "Tips for adjusting to Canadian culture, finding familiar foods, and celebrating cultural traditions.",
      options: [
        {
          title: "YU Connect",
          description: "Explore York University's official student engagement platform for clubs, organizations, and campus activities.",
          link: "https://yorku.campuslabs.ca/engage/",
          details: "YU Connect is York University's official student engagement platform where you can discover and join various clubs, organizations, and participate in campus activities. This platform helps you connect with like-minded students and get involved in the York community."
        },
        {
          title: "YFS - Student Organization",
          description: "York Federation of Students provides resources, funding, and support for student clubs and organizations.",
          link: "https://www.yfs.ca/clubshome",
          details: "The YFS offers comprehensive support for student clubs including funding opportunities, club services, rentals, and access to the extensive club directory. They help students start new clubs and maintain existing ones with various resources and guidance."
        }
      ]
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Language Exchange",
      description:
        "Conversation partners and language practice groups to improve English skills and share your native language.",
      options: [
        {
          title: "English Conversation Partners (ECP)",
          description: "Structured 7-week program pairing international students with fluent English-speaking peers for relaxed, weekly conversational practice.",
          link: "https://yorkinternational.yorku.ca/english-conversations-partners-program/",
          details: "The ECP Program is a cornerstone initiative for language exchange, designed to build confidence in a fun and supportive setting. It formally pairs students for consistent practice and mutual learning."
        },
        {
          title: "ESL Credit Courses",
          description: "Credit-bearing ESL courses to improve English proficiency and academic skills.",
          link: "https://www.yorku.ca/laps/dlll/esl/",
          details: "These courses provide a structured pathway for language development and can be taken as general education courses or as electives to fit into your degree plan."
        }
      ]
    },
  ]

  const openModal = (resource) => {
    setSelectedResource(resource)
  }

  const closeModal = () => {
    setSelectedResource(null)
  }

  return (
    <section id="resources" className="py-20 bg-sky-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center mb-4">
            <div className="px-4 py-1.5 rounded-full border-2 border-blue-400 bg-blue-100/50 text-blue-700 text-sm font-medium">
              Campus Life Updates
            </div>
            <div className="ml-3 text-blue-600 text-sm font-medium">Featuring resources near you! →</div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-sky-700">
            Unlock Your Campus Potential!
          </h2>
          <p className="text-blue-800/80 max-w-2xl mx-auto">
            We provide a variety of resources to help international students navigate university life and make the most
            of their experience at York University.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white/70 border-blue-200 h-full flex flex-col shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 flex-1 flex flex-col">
                  <div className="mb-4 p-3 rounded-full bg-blue-50 self-start">{resource.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-800">{resource.title}</h3>
                  <p className="text-blue-700/80 mb-6 flex-1">{resource.description}</p>
                  
                  {/* Clickable options list */}
                  <div className="space-y-3 mb-6">
                    {resource.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => openModal(option)}
                        className="w-full text-left p-3 bg-blue-50 hover:bg-blue-100 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 border border-blue-200"
                      >
                        <h4 className="font-semibold text-blue-800 text-sm">{option.title}</h4>
                        <p className="text-xs text-blue-600 mt-1">{option.description}</p>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for detailed information */}
      {selectedResource && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2 md:p-4 z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-[95vw] md:max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-blue-200 p-3 md:p-4 flex justify-between items-center">
              <h3 className="text-xl md:text-2xl font-bold text-blue-700">{selectedResource.title}</h3>
              <button 
                onClick={closeModal}
                className="text-blue-500 hover:text-blue-800 text-xl md:text-2xl p-1"
              >
                &times;
              </button>
            </div>
            <div className="p-4 md:p-6">
              <p className="text-blue-700 mb-6 text-sm md:text-base">{selectedResource.details}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={() => window.open(selectedResource.link, '_blank', 'noopener,noreferrer')}
                  className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
                >
                  Visit Resource
                </Button>
                <Button
                  variant="outline"
                  onClick={closeModal}
                  className="border-blue-300 text-blue-700 hover:bg-blue-100 w-full sm:w-auto"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
