import Image from 'next/image';
import classes from './hero.module.css';

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/emanuel.jpg" 
                    alt="An image showing Emanuel (myself)" 
                    width={300} 
                    height={300} 
                />
            </div>
            <h1>Hi, I{"'"}m Emanuel</h1>
            <p>I blog about web development - especially front-end related stacks like React and Next.</p>
        </section>
    );
};

export default Hero;