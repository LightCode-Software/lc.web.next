import Image from 'next/image';
import Link from 'next/link';

import Meeting from '@/../public/assets/svg/meeting.svg';

function Slider() {
    return (
        <article className="slider">
            <section>
                <Image src="/assets/img/home/header/bg.png" alt="" fill={true}/>
                <Image src="/assets/img/home/header/bgnoblue.png" alt="" fill={true}/>
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