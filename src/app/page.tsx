import Image from 'next/image';

import cls from './home.module.css';

const Home = () => {
    return (
        <div className={cls.container}>
            <div className={cls.textContainer}>
                <h1 className={cls.title}>Creative Thoughts Agency.</h1>
                <p className={cls.desc}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis adipisci minima reiciendis
                    a autem assumenda dolore.
                </p>
                <div className={cls.buttons}>
                    <button className={cls.button}>Learn More</button>
                    <button className={cls.button}>Contact</button>
                </div>
                <div className={cls.brands}>
                    <Image src='/brands.png' alt='' fill className={cls.brandImg} />
                </div>
            </div>
            <div className={cls.imgContainer}>
                <Image src='/hero.gif' alt='' fill className={cls.heroImg} />
            </div>
        </div>
    );
};

export default Home;
