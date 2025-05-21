import PostsCategory from '@/components/PostsCategory/PostsCategory';
import { getPostsCategory } from '@/utils/getPostsCategory';
import { parrafos } from '@/utils/parrafos';
import PostCard from '../../components/PostCard/PostCard';

export default function AnimesPage() {
    const postsMarkDown = getPostsCategory('juegos');
    const { parrafoJuegos } = parrafos

    return (
        <main className='categoria-main'>
            <section className='categoria-conte'>
                <h1>Juegos</h1>
                <article className='categoria-description'>
                    <p>
                        {parrafoJuegos.texto}
                    </p>
                </article>
                <article className='categoria-list'>
                    <PostsCategory category={'juegos'} />
                    {postsMarkDown?.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </article>
            </section>
        </main>
    );
}