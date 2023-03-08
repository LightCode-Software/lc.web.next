import Image from 'next/image';


import abs from '@/assets/img/home/abs-img.png';
import about from '@/assets/img/home/about-us.png';


function Banner() {
    return (
        <article className="banner">
            <section>
                <section>
                    <Image src={abs} alt="" fill={true} quality={85} placeholder="blur"/>
                </section>
                <section>
                    <Image src={about} alt="" fill={true} quality={85} placeholder="blur"/>
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