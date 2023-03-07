import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="shortlink" href="https://lightcode.pt/" />
        <link rel="canonical" href="https://www.lightcode.pt/" />

        <link rel="alternate" hreflang="en" href="https://lightcode.pt/pt/" />
        <link rel="alternate" hreflang="pt" href="https://lightcode.pt/en/" />
        <link rel="alternate" hreflang="x-default" href="https://lightcode.pt/" />
      
        <meta name="robots" content="all" />

        <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}