
import "./globals.css";

import { GeneralRegular } from "@/utils/fonts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";
import SmoothScroller from "@/components/SmoothScroller";


export const metadata = {
  title: "OffCampusHire",
  description: "Generated by create next app",

};

export default function RootLayout({ children }) {



  return (
    <html lang="en" >
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      </head>
      <body className={`${GeneralRegular.className} relative`}>
        <SmoothScroller>

          <Navbar />
          {children}
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  )
}
