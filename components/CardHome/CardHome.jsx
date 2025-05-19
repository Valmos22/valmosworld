import Link from "next/link";
import styles from './CardHome.module.css';

const CardHome = ({ post }) => {
    return (
        <div className={styles.posts_random} >
            <Link href={`/${post.category}/${post.slug}`}>
                <img src={post.image} alt={post.title} />
            </Link>
            <span>{post.category}</span>
            <h3>{post.title}</h3>
            <Link href={`/${post.category}/${post.slug}`}>Leer más</Link>
        </div>
    )
}

export default CardHome