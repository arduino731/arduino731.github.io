import Script from "next/script"

// Google Analytics only — all SEO meta tags live in app/layout.js
// via the Next.js Metadata API, which renders them in <head> properly.
const Head = () => {
    return (
        <>
            {/* Data is hugely beneficial to making good decisions */}
            <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-BZF27Q02HD"/>
            <Script
            id='google-analytics'
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
                __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-BZF27Q02HD', {
                    page_path: window.location.pathname,
                });
                `,
                }}
            />
        </>
    )
}

export default Head
