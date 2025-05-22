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
            <div>
                <a href="/privacy-policy">Política de Privacidad</a>
                <a href="/terms">Términos y Condiciones</a>
                <a href="/contact">Contacto</a>
            </div>
            <p>© {year} ValmosWorld. Todos los derechos reservados.</p>
        </footer>
    )
}
