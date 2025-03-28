import Head from './components/1Head';
import Nav from './components/2Nav';
import Footer from './components/Footer';
import ClientNextThemes from './clientNextThemes'


export const metadata = {
  title: 'Freelance Developer • Brian van Vlymen',
  description: 'Personal site and portfolio of freelance developer Brian van Vlymen.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Head />
          <ClientNextThemes>
            <Nav />
            {children}
          </ClientNextThemes>
        <Footer />
      </body>
    </html>
  )
}
