"use client"
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import {  Footer as FooterSync,Navbar2 as Navbar2Sync } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
 
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext'; 
import GifLoader from '../components/GifLoader'
 
const Footer = dynamic(() => import('../components').then(m => m.Footer), { ssr: false })
const Navbar2 = dynamic(() => import('../components').then(m => m.Navbar2), { ssr: true })
const WhatsAppIcon = dynamic(() => import('../components/WhatsAppIcon'), { ssr: false })

const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'] })
 




 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html className={`no-js no-touch supports-no-cookies ${inter.className}`} lang="en"> 
    <head>
  <meta content="text/html; charset=utf-8" httpEquiv="Content-Type" />
  <meta content="en" httpEquiv="Content-Language" />
  <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
  <meta
    content="width=device-width, initial-scale=1, maximum-scale=1"
    name="viewport"
  />
  <meta content="max-image-preview:large" name="robots" />
  <title>
    HasbiniArt
  </title>
  <meta
    content="Handcrafted acrylic creations with passion, precision, and timeless beauty."
    name="description" 
  />
  <meta content="HasbiniArt" name="keywords" property="Hasbini Art Est." />
  <meta
    content="Hasbini"
    name=""
    property="og:title"
  />
  <meta
    content="https://scentodiitalia.com/"
    name=""
    property="og:url"
  />
  <meta content="website" name="" property="og:type" />
  <meta
    content="Handcrafted acrylic creations with passion, precision, and timeless beauty."
    name=""
    property="og:description"
  />
  <meta
    content="https://res.cloudinary.com/dntdrlrse/image/upload/v1754820849/logo_dsi854.webp"
    name=""
    property="og:image"
  />
   
  <link
    href="/favicon_io/apple-touch-icon.png"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="/favicon_io/favicon-32x32.png"
    rel="icon"
    sizes="32x32" 
  />
  <link
    href="/favicon_io/favicon-16x16.png"
    rel="icon"
    sizes="16x16" 
  />
  <link
    href="/favicon_io/favicon.ico"
    rel="icon"
  /> 
 
  <meta content="#ffffff" name="msapplication-TileColor" />
  <meta content="#ffffff" name="theme-color" />
  <link href="https://assets.bellroy.com" rel="preconnect" />
  <link href="https://bellroy.imgix.net" rel="preconnect" /> 
  
 
 
 
 
 
 
 
 
 
  <link
    href="css/webfonts-3e3c2400.css"
    rel="preload"
    as="style"
  />
  <link
    rel="stylesheet"
    href="css/webfonts-3e3c2400.css"
    media="print" 
  />
  <link
    rel="stylesheet"
    href="css/style-4109db2b.css"
  />
 
<link href="https://fonts.cdnfonts.com/css/bdo-grotesk" rel="stylesheet"/>
                <link href="https://fonts.cdnfonts.com/css/inter" rel="stylesheet"/>
                
                
                
 
  
</head>

      <body>
 
      <GifLoader onComplete={() => {}} />

        
        <BooleanProvider>
        <CartProvider>
          <Navbar2 />
          <WhatsAppIcon />
          {/* <GoogleAnalytics gaId="" /> */}
          {children} 
          <Footer />
        </CartProvider>
        </BooleanProvider>
        
      </body>
    </html>
  )
}
