import Link from 'next/link';
import Image from 'next/image';

import SliderBackgroundNoBlue from '@/assets/img/home/header/bgnoblue.png';

import Icon1 from '@/assets/img/home/icons/1.png'
import Icon2 from '@/assets/img/home/icons/2.png'
import Icon3 from '@/assets/img/home/icons/3.png'
import Icon4 from '@/assets/img/home/icons/4.png'
import Icon5 from '@/assets/img/home/icons/5.png'
import Icon6 from '@/assets/img/home/icons/6.png'

function Services() {
    return (
        <article className='services'>
            <section>
                <Image src={SliderBackgroundNoBlue} alt="" fill={true}/>
                <section>
                    <section>
                        <section>
                            <section></section>
                            <h3>NOSSOS SERVIÇOS</h3>
                        </section>
                        <h4>O Melhor Que Podemos <br/> Oferecer</h4>
                        <p>O melhor que podemos oferecer é um compromisso incansável com a excelência em cada aspecto do desenvolvimento web, para fornecer soluções personalizadas e eficazes que ajudem sua empresa a alcançar seus objetivos digitais.</p>
                        <section>
                            <Link href="">SABER MAIS</Link>
                        </section>
                    </section>
                    <section>

                        <section>
                            <section>
                                <Image src={Icon1} alt="" fill={false} quality={85} placeholder="blur"/>
                                <h5>Web development</h5>
                            </section>
                        </section>

                        <section>
                            <section>
                                <Image src={Icon2} alt="" fill={false} quality={85} placeholder="blur"/>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <Image src={Icon3} alt="" fill={false} quality={85} placeholder="blur"/>
                                <h5>Web development</h5>
                            </section>
                        </section>

                        <section>
                            <section>
                                <Image src={Icon4} alt="" fill={false} quality={85} placeholder="blur"/>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <Image src={Icon5} alt="" fill={false} quality={85} placeholder="blur"/>
                                <h5>Web development</h5>
                            </section>
                            <section>
                                <Image src={Icon6} alt="" fill={false} quality={85} placeholder="blur"/>
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
