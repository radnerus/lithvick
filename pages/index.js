import Head from 'next/head';
import Link from 'next/link';
import Heart from '../components/heart';
import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { motion } from 'framer-motion'

export default function Home({ name }) {
  const [hearts, setHearts] = useState([]);
  const [wishMe, setWishMe] = useState(true);

  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const lefts = [15, 30, 40, 60, 70, 85];
      const hearts = Array(6).fill().map((_, i) => ({ key: i, heart: <Heart key={i} left={lefts[i]} /> }));
      console.log(hearts);
      setHearts(hearts);
    }, 3000)
  }, []);

  const toggleWish = () => {
    setWishMe(!wishMe);
  }
  return (
    <div>
      <div className="container">
        <Head>
          <title>Lithvick 🎂</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <div className="music">
            {wishMe && <ReactAudioPlayer src='assets/audio/HBD.mp3' autoPlay controls onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)} onAbort={() => isPlaying = setIsPlaying(false)} />}
          </div>
          <motion.div
            className="main-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="main-header">My Boy Turns <span className="highlight">O N E</span> ❣️</h1>
          </motion.div>
          <motion.div className='container center'>
            <motion.div className="right"><div onClick={() => toggleWish()} className="wish-me"><span className="wish-me-text">Wish Me</span> {isPlaying ? <img className="logo" src="assets/images/pause.png" alt="" /> : <img className="logo" src="assets/images/music.png" alt="" />}</div></motion.div>
            <motion.img initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 4, delay: 1 }} className="home-pic" src="assets/images/home.jpg" alt="" />
            <motion.div
              initial={{ y: '500px', opacity: 0 }}
              animate={{ y: '0', opacity: 1 }}
              transition={{ duration: 5, delay: 5 }}
              className="text-container"
            ><h1>🎂 {name} 🎂</h1></motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 10 }}
              className="text-container"
              className="gallery-container">
              <a><Link href="about"><h2>More about me <motion.img src="assets/images/baby.png" /></h2></Link></a>
            </motion.div>
          </motion.div>

        </main>

      </div>

      {
        hearts.map(({ heart }) => heart)
      }
    </div>
  )
}

export function getStaticProps() {
  const name = 'Lithvick Rahul';

  return {
    props: { name }
  }
}
