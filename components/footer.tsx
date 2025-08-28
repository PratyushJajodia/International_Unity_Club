import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-blue-800 py-12 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full overflow-hidden relative">
                <Image
                  src="/images/logo.png"
                  alt="International Unity Club Logo"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <span className="text-xl font-bold text-white">International Unity Club</span>
            </div>
            <p className="text-blue-100 mb-6 max-w-md">
              A student-run organization at York University dedicated to supporting international students and fostering
              connections between domestic and international students.
            </p>

            
            <div className="flex space-x-4">
              
              <a href="https://www.instagram.com/iucyorku/?hl=en" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
             
          

              
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-blue-200 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-blue-200 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-blue-200 hover:text-white transition-colors">
                  Team
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#resources" className="text-blue-200 hover:text-white transition-colors">
                  Campus Resources
                </Link>
              </li>
              <li>
                <Link href="#get-involved" className="text-blue-200 hover:text-white transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="#team" className="text-blue-200 hover:text-white transition-colors">
                  Meet Our Team
                </Link>
              </li>
              <li>
                <Link href="#events" className="text-blue-200 hover:text-white transition-colors">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-blue-700 mt-12 pt-8 text-center">
          <p className="text-blue-200 text-sm">
            © {new Date().getFullYear()} International Unity Club at York University. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
