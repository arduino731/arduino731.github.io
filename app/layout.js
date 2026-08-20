import Head from './components/1Head';
import Nav from './components/2Nav';
import Footer from './components/8Footer';
import ClientNextThemes from './clientNextThemes'


export const metadata = {
  metadataBase: new URL('https://van-vlymen.com'),
  title: {
    default: 'Brian van Vlymen · Senior Full-Stack Engineer · AWS Cloud Engineer',
    template: '%s · Brian van Vlymen',
  },
  description:
    'Portfolio of Brian van Vlymen, Senior Full-Stack Engineer and AWS Cloud Engineer with 10+ years of experience building production systems end-to-end with AWS (ECS, Lambda, S3, SES), Terraform, Next.js, and MongoDB Atlas — certified Web Accessibility Specialist (WAS).',
  keywords: [
    'Brian van Vlymen',
    'van Vlymen',
    'van-vlymen',
    'AWS Cloud Engineer',
    'Cloud Architect',
    'Full Stack Architect',
    'Solutions Architect',
    'Senior Full-Stack Engineer',
    'Cloud Infrastructure',
    'AWS',
    'AWS ECS',
    'AWS Lambda',
    'Terraform',
    'Infrastructure as Code',
    'Serverless',
    'React',
    'Next.js',
    'MongoDB Atlas',
    'Node.js',
    'Docker',
    'DevOps',
    'Web Accessibility',
    'WCAG',
    'Web Accessibility Specialist',
    'AI-assisted development',
    'San Antonio developer',
    'Austin developer',
  ],
  authors: [{ name: 'Brian van Vlymen', url: 'https://van-vlymen.com' }],
  creator: 'Brian van Vlymen',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/images/wolfIcon.png',
    apple: '/images/wolfIcon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://van-vlymen.com',
    siteName: 'Brian van Vlymen',
    title: 'Brian van Vlymen · Senior Full-Stack Engineer · AWS Cloud Engineer',
    description:
      'Production systems end-to-end — AWS, Terraform, Next.js, and Node.js. Certified Web Accessibility Specialist (WAS).',
    images: [
      {
        url: '/images/og-banner.png',
        width: 1200,
        height: 630,
        alt: 'Brian van Vlymen — Senior Full-Stack Engineer · AWS Cloud Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@vanvlymenpaws',
    creator: '@vanvlymenpaws',
    title: 'Brian van Vlymen · Senior Full-Stack Engineer · AWS Cloud Engineer',
    description:
      'Production systems end-to-end — AWS, Terraform, Next.js, and Node.js. Certified Web Accessibility Specialist (WAS).',
    images: [
      {
        url: '/images/og-banner.png',
        alt: 'Brian van Vlymen — Senior Full-Stack Engineer · AWS Cloud Engineer',
      },
    ],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Brian van Vlymen',
  url: 'https://van-vlymen.com',
  image: 'https://van-vlymen.com/images/portfolioImageCard.png',
  jobTitle: 'Senior Full-Stack Engineer & AWS Cloud Engineer',
  email: 'mailto:bvanvlymen.dev@gmail.com',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Texas at San Antonio',
  },
  hasCredential: {
    '@type': 'EducationalOccupationalCredential',
    name: 'Web Accessibility Specialist (WAS)',
  },
  knowsAbout: [
    'Amazon Web Services',
    'AWS ECS',
    'AWS Lambda',
    'Terraform',
    'Infrastructure as Code',
    'Cloud Architecture',
    'React',
    'Next.js',
    'Node.js',
    'MongoDB Atlas',
    'Docker',
    'Nginx',
    'Web Accessibility',
  ],
  sameAs: [
    'https://github.com/bvanvlymen',
    'https://www.linkedin.com/in/bvanvlymen-dev',
    'https://x.com/vanvlymenpaws',
  ],
}

export default function RootLayout({ children }) {
 return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
