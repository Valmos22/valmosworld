'use client'

import { useState } from 'react';
import styles from '../page.module.css';

export default function NuevoPost() {
    const [form, setForm] = useState({
        title: '',
        slug: '',
        category: '',
        date: new Date().toISOString().split('T')[0],
        excerpt: '',
        image: '',
        content: ''
    });


    const handleChange = e => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async e => {
        e.preventDefault();
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(form);
        localStorage.setItem('posts', JSON.stringify(posts));
    };

    return (
        <>
            <div className={styles.form_container}>
                <form className={styles.form_wrapper} onSubmit={handleSubmit}>
                    <div className={styles.input_group}>
                        <input name="title" placeholder="Título" onChange={handleChange} required />
                    </div>
                    <div className={styles.input_group}>
                        <input name="slug" placeholder="Slug (ej: estreno-naruto)" onChange={handleChange} required />
                    </div>
                    <div className={styles.input_group}>
                        <select name="category" value={form.category} onChange={handleChange}>
                            <option value="animes">Animes</option>
                            <option value="peliculas">Películas</option>
                            <option value="juegos">Juegos</option>
                        </select>
                    </div>
                    <div className={styles.input_group}>
                        {/* <input name="date" type="date" value={form.date} onChange={handleChange} /> */}
                    </div>
                    <div className={styles.input_group}>
                        <input name="excerpt" placeholder="Descripcion" onChange={handleChange} required />
                    </div>
                    <div className={styles.input_group}>
                        <input name="image" placeholder="URL de imagen" onChange={handleChange} required />
                    </div>
                    <div className={styles.input_group}>
                        <textarea name="content" placeholder="Contenido Markdown" onChange={handleChange} required />
                    </div>
                    <button type="submit">Crear Post</button>
                </form>
            </div>
        </>
    );
}
