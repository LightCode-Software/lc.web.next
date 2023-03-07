import Head from 'next/head';
import '@/styles/index.scss';

function App({ Component, pageProps }) {

    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.svg"></link>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
}

export default App;
