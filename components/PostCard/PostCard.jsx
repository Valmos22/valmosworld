import Link from 'next/link';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {
    return (
        <article className={styles.card}>
            <Link href={`/${post.category}/${post.slug}`} className={styles.card_img}>
                <img src={post.image} alt={post.title} />
            </Link>
            <div className={styles.card_conte}>
                <h2>{post.title}</h2>
                {/* <p>{post.excerpt}</p> */}
                <span className={styles.date}>{"Fecha de publicacion: "}{new Date(post.date).toLocaleDateString()}</span>
                <Link className={styles.link} href={`/${post.category}/${post.slug}`}>Leer más</Link>
            </div>
        </article>
    );
}
