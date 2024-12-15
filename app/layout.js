import Head from './components/Head';
import Nav from './components/Nav';
import Footer from './components/Footer';
import ClientNextThemes from './clientNextThemes'


export const metadata = {
  title: 'Freelance Developer • Brian van Vlymen',
  description: 'Personal site and portfolio of freelance developer Brian van Vlymen.',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-700 dark:bg-slate-400">
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
