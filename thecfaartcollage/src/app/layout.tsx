import Footer from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import Navbar from '../components/layouts/Navbar'
import './globals.css'

export const metadata = {
  title: 'CFA Clone',
  description: 'A clone of the CFA website',
}

export default function RootLayout({ children }:any) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  )
};