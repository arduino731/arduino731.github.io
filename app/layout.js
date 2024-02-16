// import { Rubik } from 'next/font/google'
import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

// const rubik = Rubik({ subsets: ['latin'] })


export const metadata = {
  title: 'Freelance Developer • Brian van Vlymen',
  description: 'Personal site and portfolio of freelance developer Brian van Vlymen.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body className="">
        <Head />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
