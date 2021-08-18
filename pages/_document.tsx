import Document, { Main, Head, Html, NextScript, DocumentContext } from 'next/document';
import Script from 'next/script';
import { ScriptAfterInteraction } from '../components/shared/components/scriptAfterInteraction/ScriptAfterInteraction';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);

    return { ...initialProps };
  }

  render() {
    return (
      <Html
        lang="pl-PL"
        prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"
        itemScope
        itemType="http://schema.org/WebPage"
      >
        <Head>
          <link
            rel="preload"
            href="/fonts/CriteriaCF-Super-Oblique.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GreycliffCF-Medium.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/GreycliffCF-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/LeagueMono-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href="/fonts/LeagueMono-SemiBold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link rel="preload" href="/images/logo-big.png" as="image" />
          <link rel="preload" href="/images/logo-small.png" as="image" />
          <link rel="preload" href="/images/olaf-head.png" as="image" />
          <link rel="apple-touch-icon" sizes="180x180" href="favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="favicons/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="favicons/safari-pinned-tab.svg" color="#ffffff" />
          <link rel="alternate" title="rss feed" type="application/rss+xml" href="/rss.xml" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-title" content="Frontlive" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
