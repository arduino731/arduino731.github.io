import Script from "next/script"

// Google Analytics only — all SEO meta tags live in app/layout.js
// via the Next.js Metadata API, which renders them in <head> properly.
// The ID comes from NEXT_PUBLIC_GOOGLE_ANALYTICS (.env, overridable in .env.local)
// and is inlined at build time.
const GA_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS

const Head = () => {
    if (!GA_ID) return null

    return (
        <>
            {/* Data is hugely beneficial to making good decisions */}
            <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}/>
            <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
    )
}

export default Head
