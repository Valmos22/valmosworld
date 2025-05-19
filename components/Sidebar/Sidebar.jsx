'use client'

import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = ({ posts }) => {

    return (
        <aside className={styles.container_sidebar}>
            <h2>Tendencias: </h2>
            {posts.map((post) => (
                <Link href={`/${post.categoria}/${post.slug}`} key={post.slug}>
                    <img src={post.image} alt={post.title} />
                    <p>{post.title}</p>
                </Link>
            ))}
        </aside>
    );
}

export default Sidebar;