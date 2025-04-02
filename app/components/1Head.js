import Script from "next/script"

const Head = () => {
    return (
        <div>
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
            <meta name="author" content="Brian van Vlymen"/>
            <meta name="description" content="Front-end Developer" />
            <meta name="keywords"  content="Brian van Vlymen, graphic design, web design, website design, web developer, website builder, responsive web design, front-end developer, build a website, webdesign"/>
            <meta name="Resource-type" content="Document" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="robots" content="index, follow" />

            {/* <!-- Open Graph data -->		 */}
            <meta property="og:author" content="Brian van Vlymen" />
            <meta property="og:description" content="Front-end Developer."/>
            {/* <meta property="og:image" content="https://dejan.works/img/thumbnail.png" /> */}
            <meta property="og:site_name" content="Brian van Vlymen"/>
            <meta property="og:title" content="Brian van Vlymen" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://van-vlymen.com" />

            <link rel="icon" type="image/x-icon" href="/images/favicon.ico"></link>
            {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"></link> */}

        </div>
    )
}

export default Head