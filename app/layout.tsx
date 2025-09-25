"use client"
import {  Footer,Navbar2 } from '../components'
import './globals.css'
import './custom.css'
import './bootstrap.min.css'
import './bs-select.css'
import './slick.css'
 
import { CartProvider } from './context/CartContext';
import { BooleanProvider } from './context/CartBoolContext'; 
import GifLoader from '../components/GifLoader'
 
import WhatsAppIcon from '../components/WhatsAppIcon';  
 




 

 

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {

 

  return (
    <html className="no-js no-touch supports-no-cookies" lang="en"> 
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
    href="https://res.cloudinary.com/dntdrlrse/image/upload/v1754820849/logo_dsi854.webp"
    rel="apple-touch-icon"
    sizes="180x180"
  />
  <link
    href="https://res.cloudinary.com/dntdrlrse/image/upload/v1754820849/logo_dsi854.webp"
    rel="icon"
    sizes="32x32" 
  />
  <link
    href="https://res.cloudinary.com/dntdrlrse/image/upload/v1754820849/logo_dsi854.webp"
    rel="icon"
    sizes="16x16" 
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
