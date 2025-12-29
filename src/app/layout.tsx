import type { Metadata } from "next";

import "./globals.css";

import { inter, helvetica } from './fonts'

export const metadata: Metadata = {
  title: "MiMiSmart",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ru"
      className={`${inter.variable} ${helvetica.variable}`}
    >
      <body className="font-sans">
        {children}
      </body>
    </html>
  )
}
