import { parrafos } from '@/utils/parrafos';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import PostCard from '../../components/PostCard/PostCard';

export default function AnimesPage() {
    const dir = path.join(process.cwd(), 'modules/peliculas/posts');
    const files = fs.readdirSync(dir);

    const posts = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(dir, filename), 'utf8');
        const { data } = matter(fileContent);
        return { ...data };
    });

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
                    {posts.map((post) => (
                        <PostCard key={post.slug} post={post} />
                    ))}
                </section>
            </section>
        </main>
    );
}