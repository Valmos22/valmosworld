import PostsCategory from '@/components/PostsCategory/PostsCategory';
import { getPostsCategory } from '@/utils/getPostsCategory';
import { parrafos } from '@/utils/parrafos';
import PostCard from '../../components/PostCard/PostCard';

export default function AnimesPage() {
    const postsMarkDown = getPostsCategory('peliculas');
    const { parrafoPelicula } = parrafos

    return (
        <main className='categoria-main'>
            <section className='categoria-conte'>
                <h1>Peliculas</h1>
                <section className='categoria-description'>
                    <p>
                        {parrafoPelicula.texto}
                    </p>
                </section>
                <section className='categoria-list'>
                    <PostsCategory category={'peliculas'} />
                    {postsMarkDown?.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </section>
            </section>
        </main>
    );
}