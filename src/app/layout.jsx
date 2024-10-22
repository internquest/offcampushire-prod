
import "./globals.css";

import { GeneralRegular } from "@/utils/fonts";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/footer/Footer";



export const metadata = {
  title: "OffCampusHire",
  description: "Generated by create next app",

};

export default function RootLayout({ children }) {



  return (
    <html lang="en" id="html" className="w-screen"  >
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />

      </head>
      <body className={`${GeneralRegular.className} relative w-full  `}>


        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  )
}
