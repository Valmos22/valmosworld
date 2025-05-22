'use client'

import Link from 'next/link';
import { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import SocialNetworks from '../SocialNetworks/SocialNetworks';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <img src="/huvalmos.jpg" alt="ValmosWorld logo" />
                </Link>
                <nav className={styles.navbar}>

                    <button className={styles.hamburger} onClick={toggleMenu}>
                        <span className={styles.span_isOpen}>
                            {isOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                        </span>
                    </button>

                    <div className={`${styles.menuMobile} ${isOpen ? styles.open : ''}`}>
                        <SocialNetworks />
                        <ul className={styles.links}>
                            <li><Link href="/" onClick={handleLinkClick}>Home</Link></li>
                            <li><Link href="/animes" onClick={handleLinkClick}>Animes</Link></li>
                            <li><Link href="/peliculas" onClick={handleLinkClick}>Películas</Link></li>
                            <li><Link href="/juegos" onClick={handleLinkClick}>Juegos</Link></li>
                        </ul>
                    </div>

                    <div className={styles.menuDesktop}>
                        <ul className={styles.links}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/animes">Animes</Link></li>
                            <li><Link href="/peliculas">Películas</Link></li>
                            <li><Link href="/juegos">Juegos</Link></li>
                            {/* <li><Link href="/nuevo-post">Crea tu post</Link></li> */}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
