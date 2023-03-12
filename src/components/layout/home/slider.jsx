import Image from 'next/image';
import Link from 'next/link';

import SliderBackground from '@/assets/img/home/header/bg.png';
import SliderBackgroundNoBlue from '@/assets/img/home/header/bgnoblue.png';
import Meeting from '@/assets/svg/meeting.svg';

function Slider() {
    return (
        <article className="slider">
            <section>
                <Image src={SliderBackground} alt="" fill={true} placeholder="blur"/>
                <Image src={SliderBackgroundNoBlue} alt="" fill={true} placeholder="blur"/>
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
                        <section>
                            <Meeting />
                        </section>
                    </section>
                </section>
                <section>
                        <div className="star-animation star-large"></div>
                        <div className="star-animation star-small"></div>
                        <div className="star-animation star-small"></div>
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