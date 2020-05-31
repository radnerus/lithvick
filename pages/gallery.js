import React from 'react';
import Gallery from 'react-grid-gallery';
import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

const IMAGES =
    [
        {
            src: "assets/images/main/1.jpg",
            thumbnail: "assets/images/thumbs/1a.jpg",
            caption: "I still remember that day, when you came into my life. It almost feels like yesterday❣️"
        },
        {
            src: "assets/images/main/2.jpg",
            thumbnail: "assets/images/thumbs/2a.jpg",
            caption: "Majestic Prince👑"
        },
        {
            src: "assets/images/main/3_changed.jpg",
            thumbnail: "assets/images/thumbs/3a.jpg",
            caption: "Happy to carry you in my shoulders💕"
        },
        {
            src: "assets/images/main/4.jpg",
            thumbnail: "assets/images/thumbs/4a.jpg",
            caption: "You made us better👨‍👩‍👦"
        },
        {
            src: "assets/images/main/5.jpg",
            thumbnail: "assets/images/thumbs/5a.jpg",
            caption: "You Beauty👼🏻"
        },
        {
            src: "assets/images/main/6_changed.jpg",
            thumbnail: "assets/images/thumbs/6a.jpg",
            caption: "Bundle of Joy💓"
        },
        {
            src: "assets/images/main/7.jpg",
            thumbnail: "assets/images/thumbs/7a.jpg",
            caption: "Most loved pic💌"
        },
        {
            src: "assets/images/main/8.jpg",
            thumbnail: "assets/images/thumbs/8a.jpg",
            caption: "You complete us💜"
        },
        {
            src: "assets/images/main/9.jpg",
            thumbnail: "assets/images/thumbs/9a.jpg",
            caption: "The way you sleep on me. You made me better in every aspect. You made me realise the happiness around me.👨‍👩‍👦💕"
        }
    ];

const GalleryComponent = () => {
    return (
        <div className="container">
            <Head>
                <title>Gallery | Lithvick 🎂</title>
            </Head>
            <main>
                <motion.div
                    className="main-container"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    <a className="home-link"><Link href="/"><h1 className="main-header">Gallery | Lithvick Rahul</h1></Link></a>
                </motion.div>
                <Gallery images={IMAGES} />
            </main>
        </div>
    )
}

export default GalleryComponent
