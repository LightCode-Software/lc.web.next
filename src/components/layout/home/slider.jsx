import Image from 'next/image';
import Link from 'next/link';

import bgnoblue from '@/assets/img/home/header/bgnoblue.png';
import bg from '@/assets/img/home/header/bg.png';
import img from '@/assets/img/home/header/img2.png';

function Slider() {
    return (
        <article className="slider">
            <section>
                <Image src={bg} alt="" fill={true} quality={85} placeholder="blur"/>
                <Image src={bgnoblue} alt="" fill={true} quality={85} placeholder="blur"/>
                <section>
                    <section>
                        <h1><bold>Light Code</bold> Software</h1>
                        <p>A LightCode é a escolha ideal para empresas que buscam soluções personalizadas e eficientes em desenvolvimento web para alcançar o sucesso digital.</p>
                        <section>
                            <Link href="">Solicitar Orçamento</Link>
                            <Link href="">Começar Agora</Link>
                        </section>
                    </section>
                    <section>
                        <Image src={img} alt="" fill={true} quality={85} placeholder="blur" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                    </section>
                </section>
                <section>
                        <div className="star-animation star-large"></div>
                        <div className="star-animation star-small"></div>
                        <div className="star-animation star-small "></div>
                        <div className="star-animation star-medium"></div>
                        <div className="star-animation star-large star-white"></div>
                        <div className="star-animation star-large star-white"></div>
                </section>
            </section>
        </article>
    );
}

//

export default Slider;