import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "International Unity Club | York University",
  description:
    "Supporting and empowering international students with guidance, resources, and a welcoming community at York University.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        
        {/* Script to hide the "N" navigation button */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function hideNButton() {
                  // Hide any element with "N" text that might be a navigation button
                  const elements = document.querySelectorAll('*');
                  elements.forEach(el => {
                    if (el.textContent && el.textContent.trim() === 'N') {
                      const rect = el.getBoundingClientRect();
                      // Check if it's positioned in the bottom right area
                      if (rect.bottom > window.innerHeight - 100 && rect.right > window.innerWidth - 100) {
                        el.style.display = 'none';
                      }
                    }
                  });
                }
                
                // Run immediately
                hideNButton();
                
                // Run after a short delay to catch dynamically added elements
                setTimeout(hideNButton, 1000);
                
                // Run on window resize
                window.addEventListener('resize', hideNButton);
                
                // Run periodically to catch any new elements
                setInterval(hideNButton, 5000);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
