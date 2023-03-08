import Link from 'next/link';
import Image from 'next/image';

function Services() {
    return (
        <article className='services'>
            <section>
                <Image src='/assets/img/home/header/bgnoblue.png' alt="" fill={true}/>
                <section>
                    <section>
                        <section>
                            <section></section>
                            <h4>NOSSOS SERVIÇOS</h4>
                        </section>
                        <h3>O Melhor Que Podemos <br/> Oferecer</h3>
                        <p>O melhor que podemos oferecer é um compromisso incansável com a excelência em cada aspecto do desenvolvimento web, para fornecer soluções personalizadas e eficazes que ajudem sua empresa a alcançar seus objetivos digitais.</p>
                        <section>
                            <Link href="">SABER MAIS</Link>
                        </section>
                    </section>
                    <section>

                        <section>
                            <section>
                                <h5>Web development</h5>
                            </section>
                        </section>

                        <section>
                            <section>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <h5>Web development</h5>
                            </section>
                        </section>

                        <section>
                            <section>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <h5>Web development</h5>
                            </section>
                        </section>
                    </section>
                </section>
            </section>
        </article>
    );
}

export default Services;
