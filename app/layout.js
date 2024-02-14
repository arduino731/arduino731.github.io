import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';

export const metadata = {
  title: 'Freelance Developer • Brian van Vlymen',
  description: 'Personal site and portfolio of freelance developer Brian van Vlymen.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      
      <body className="bg-slate-300 relative">
        <Head />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
