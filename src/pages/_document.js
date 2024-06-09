import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="icon" type="image/png" sizes="32x32" href="/ai-high-resolution-logo.png" />
      {/* <link href='https://fonts.googleapis.com/css?family=Inter' rel='stylesheet'/> */}

      <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
      <body>
        <Main/>
        <NextScript />
      </body>
    </Html>
  );
}
