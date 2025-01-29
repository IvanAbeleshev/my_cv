import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import "./globals.css"
import Header from "../shared/components/Header/Header"
import { Suspense } from "react"
import Loading from "./loading"
import { AntdRegistry } from "@ant-design/nextjs-registry"
import Script from "next/script"
import '@ant-design/v5-patch-for-react-19'
import './lib/telegram'

export const metadata: Metadata = {
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", url: "/favicon.ico" }
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", sizes: "192x192", url: "/android-chrome-192x192.png" },
      { rel: "icon", sizes: "512x512", url: "/android-chrome-512x512.png" },
    ],
  }
}

const fontNaruto = localFont({ src: '../public/fonts/ninjaNaruto.ttf' })
const inter = Inter({
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${fontNaruto.className} $antialiased h-[100dvh]`}
      >
        <Script 
          strategy="beforeInteractive"
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_GOOGLE_RECAPTURE}`}
        />
        <AntdRegistry>
          <Header/>
          <main className={`w-full h-full pt-16 ${inter.className}`}>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </main>
          <footer className="fixed left-2 bottom-1 z-40">
            <div>
              <ul className="flex flex-row md:flex-col gap-5 mb-3">
                <li>
                  <a href="https://github.com/IvanAbeleshev" target="_blank" rel="noopener noreferrer" className="w-fit">
                    <img src="/img/social-networks/github.svg" alt="github-profile"  className="w-6 aspect-square"/>
                  </a>
                </li>
                <li>
                  <a href="https://t.me/IvanAbeleshev" target="_blank" rel="noopener noreferrer" className="w-fit">
                    <img src="/img/social-networks/telegram.svg" alt="telegram-profile"  className="w-6 aspect-square"/>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ivan-abeleshev-5470b4168/" target="_blank" rel="noopener noreferrer" className="w-fit">
                    <img src="/img/social-networks/linkedin.svg" alt="linkedin-profile"  className="w-6 aspect-square"/>
                  </a>
                </li>
              </ul>
              <span className="select-none">Designed by Abielieshev Ivan ©{new Date().getFullYear()}</span>
            </div>
          </footer>
        </AntdRegistry>
      </body>
    </html>
  )
}
