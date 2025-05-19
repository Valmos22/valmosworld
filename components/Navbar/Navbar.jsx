import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <>
            <header className={styles.header}>
                <Link href="/">
                    <img src="/huvalmos.jpg" alt="ValmosWorld logo" />
                </Link>
                <nav className={styles.navbar}>
                    <ul className={styles.links}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/animes">Animes</Link></li>
                        <li><Link href="/peliculas">Películas</Link></li>
                        <li><Link href="/juegos">Juegos</Link></li>
                        {/* <li><Link href="/nuevo-post">Crea tu post</Link></li> */}
                    </ul>
                </nav>
            </header>
        </>
    );
}
