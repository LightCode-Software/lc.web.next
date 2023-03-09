import Image from 'next/image';

import ABSBackground from '@/assets/img/home/abs-img.png';
import AboutUs from '@/assets/img/home/about-us.png';

function Banner() {
    return (
        <article className="banner">
            <section>
                <section>
                    <Image src={ABSBackground} alt="" fill={true}/>
                </section>
                <section>
                    <Image src={AboutUs} alt="" fill={true}/>
                </section>
                <section>
                        <div className="star-animation star-small star-white"></div>
                        <div className="star-animation star-medium star-white"></div>
                        <div className="star-animation star-small star-white"></div>
                </section>
            </section>
            <section>
                <h3>
                    Sobre
                        <br/>
                    Nós
                </h3>
                <section>
                    <section>
                        <section></section>
                        <h2>Estamos Aqui <br/> para impulsionar o seu negócio</h2>
                    </section>
                    <section>
                        <p>Estamos apaixonados por desenvolver soluções inovadoras e personalizadas para nossos clientes, e nos esforçamos constantemente para alcançar a excelência em tudo o que fazemos.</p>
                    </section>
                </section>
            </section>
        </article>
    );
}

export default Banner;