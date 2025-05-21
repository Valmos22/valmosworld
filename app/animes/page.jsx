import PostsCategory from '@/components/PostsCategory/PostsCategory';
import { getPostsCategory } from '@/utils/getPostsCategory';
import { parrafos } from '@/utils/parrafos';
import PostCard from '../../components/PostCard/PostCard';
import '../../styles/globals.css';

export default function AnimesPage() {
    const postsMarkDown = getPostsCategory('animes');
    const { parrafoAnime } = parrafos

    return (
        <main className='categoria-main'>
            <section className='categoria-conte'>
                <h1>Animes</h1>
                <article className='categoria-description'>
                    <p>
                        {parrafoAnime.texto}
                    </p>
                </article>
                <article className='categoria-list'>
                    <PostsCategory category={'animes'} />
                    {postsMarkDown?.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </article>
            </section>
        </main>
    );
}
