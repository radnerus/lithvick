import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const QUALITIES = [
    `I turn <span class="highlight">1🎂🎊</span> today <br />- June 1, 2020`,
    `I have <span class="highlight">SEVEN</span> tooth<span class="highlight">🦷</span> <br /> <span class="highlight">4</span> Up <br /><span class="highlight">3</span> Down`,
    `I say <span class="highlight">🔊  APPA</span>, <span class="highlight">AMMA</span>, <span class="highlight">AWWA</span>, <span class="highlight">AAYA</span> and some more.`,
    `I <span class="highlight">DANCE</span> for some peppy beats🥁`,
    `I decide the <span class="highlight">SLEEP😴</span> schedule😴`,
    `I throw <span class="highlight">PHONES📱</span> and smash <span class="highlight">LAPTOPS💻</span>.`
]

const About = () => {
    const [text, setText] = useState(QUALITIES[0]);
    useEffect(() => {
        console.log('here');
        const timer = setInterval(() => {
            const currentIndex = QUALITIES.findIndex(t => t === text);
            let nextIndex = (currentIndex === QUALITIES.length - 1) ? 0 : currentIndex + 1;
            console.log(QUALITIES[nextIndex]);
            setText(QUALITIES[nextIndex]);
        }, 5000);
        return () => {
            clearInterval(timer);
        }
    }, [text]);
    return (
        <div className="container">
            <Head>
                <title>About | Lithvick 🎂</title>
            </Head>
            <main>
                <motion.div
                    className="main-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <a className="home-link"><Link href="/"><h1 className="main-header">About Me | Lithvick Rahul</h1></Link></a>
                </motion.div>
                <motion.div className='container center'>
                    <p className="about" dangerouslySetInnerHTML={{ __html: text }}></p>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.5, delay: 2 }}
                        className="text-container"
                        className="gallery-container">
                        <a><Link href="gallery"><h2>Photos of me <motion.img src="assets/images/baby.png" /></h2></Link></a>
                    </motion.div>
                </motion.div>
            </main>
        </div>
    )
}

export default About
