import Image from 'next/image';
import abs from '@/assets/img/home/abs-img.png';

function Banner() {
    return (
        <article className="banner">
            <section>
                <Image src={abs} alt="" fill={true} quality={85} placeholder="blur"/>
            </section>
            <section></section>
        </article>
    );
}

export default Banner;