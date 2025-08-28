"use client"

import React, { useState, useEffect, useCallback } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { RefreshCcw, AlertTriangle, Quote as QuoteIcon } from "lucide-react" // Added QuoteIcon

interface FetchedQuoteData {
  id: number;
  quote: string;
  author: string;
}

interface QuoteData {
  content: string
  author: string
}

const QUOTE_API_URL = "https://dummyjson.com/quotes/random" // Using DummyJSON API as an alternative

export default function RandomQuote() {
  const [quote, setQuote] = useState<QuoteData | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchQuote = useCallback(async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch(QUOTE_API_URL)
      if (!response.ok) {
        throw new Error(`Failed to fetch quote: ${response.status}`)
      }
      const data: FetchedQuoteData = await response.json()
      setQuote({ content: data.quote, author: data.author }) // Adjusted to match DummyJSON response structure
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message)
      } else {
        setError("An unknown error occurred.")
      }
      setQuote(null) // Clear previous quote on error
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchQuote()
  }, [fetchQuote])

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
  }

  return (
    <motion.section 
      className="py-12 md:py-16 bg-sky-50/70"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto px-4 md:px-6 max-w-3xl text-center">
        <motion.div 
          className="p-6 md:p-8 bg-white rounded-xl shadow-lg border border-sky-100"
          whileHover={{ y: -5, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <QuoteIcon className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mx-auto mb-4 opacity-75" />
          {isLoading && (
            <div className="flex flex-col items-center justify-center h-32">
              <RefreshCcw className="w-8 h-8 text-blue-500 animate-spin mb-2" />
              <p className="text-blue-600">Fetching a fresh quote...</p>
            </div>
          )}
          {error && (
            <div className="flex flex-col items-center justify-center h-32 text-red-600">
              <AlertTriangle className="w-8 h-8 mb-2" />
              <p className="font-semibold">Oops! Could not load quote.</p>
              <p className="text-sm">{error}</p>
            </div>
          )}
          {!isLoading && quote && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <blockquote className="text-xl md:text-2xl lg:text-3xl italic text-blue-800/90 mb-6">
                <span className="leading-relaxed">&ldquo;{quote.content}&rdquo;</span>
              </blockquote>
              <cite className="block text-md md:text-lg text-blue-600 font-medium not-italic">
                &mdash; {quote.author}
              </cite>
            </motion.div>
          )}
          <Button 
            onClick={fetchQuote} 
            disabled={isLoading}
            className="mt-8 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 ease-in-out disabled:opacity-50 flex items-center gap-2 mx-auto"
          >
            <RefreshCcw className={`w-5 h-5 ${isLoading ? 'animate-spin' : ''}`} />
            New Quote
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}
