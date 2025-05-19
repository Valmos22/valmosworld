'use client'

import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    const [year, setYear] = useState('')

    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <footer className={styles.footer}>
            <p>© {year} ValmosWorld. Todos los derechos reservados.</p>
        </footer>
    )
}
