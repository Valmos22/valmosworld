import Link from 'next/link';
import styles from './PostCard.module.css';

export default function PostCard({ post }) {

    if (!post) return null;

    const isStudioPost = post?.categories && post?.categories.length > 0;
    const slug = isStudioPost ? post.slug?.current : post.slug;

    const imageUrl = post?.image || post?.mainImage?.asset?.url;
    const altText = post?.mainImage?.alt || post?.title || 'Imagen del post';

    const date = post?.date || post?.publishedAt;
    const formattedDate = date ? new Date(date).toLocaleDateString() : 'Sin fecha';

    const url = isStudioPost
        ? `/${post?.categories[0]?.title}/${slug}`
        : `/${post?.category}/${slug}`;

    return (
        <article className={styles.card}>
            <Link href={url} className={styles.card_img}>
                {imageUrl && <img src={imageUrl} alt={altText} />}
            </Link>
            <div className={styles.card_conte}>
                <h2>{post.title}</h2>
                <span className={styles.date}>Fecha de publicación: {formattedDate}</span>
                <Link className={styles.link} href={url}>
                    Leer más
                </Link>
            </div>
        </article>
    );
}
