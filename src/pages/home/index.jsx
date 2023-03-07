import Head from 'next/head';
import { useRouter } from 'next/router';

import Slider from "@/components/layout/home/slider";
import Lang from '@/langs/home.json';


function Home() {
    const { locale } = useRouter();
    const { head, banner, services } = Lang.filter(p => p.locale === locale)[0];
  
    return (
        <>
            <Head>
                <title>{ head.title }</title>
                <meta name="description" content={ head.description }/>
                <meta name="keywords" content={ head.keywords }/>

            </Head>
            <Slider />
            <p>Work in progress.</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
            <p>Teste</p>
        </>
    );
}

export default Home;