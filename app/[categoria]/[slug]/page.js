/* eslint-disable @next/next/no-img-element */
import BotonAtras from '@/components/BotonAtras/BotonAtras'
import Sidebar from '@/components/Sidebar/Sidebar'
import VideoYoutube from '@/components/VideoYoutube/VideoYoutube'
import { client } from '@/sanity/lib/client'
import { getAllPosts } from '@/utils/getAllPosts'
import { queryData } from '@/utils/postsQuery'
import fs from 'fs'
import matter from 'gray-matter'
import { PortableText } from 'next-sanity'
import { notFound } from 'next/navigation'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import styles from '../../page.module.css'

const { POSTS_QUERY, SANITY_QUERY } = queryData;

export async function generateStaticParams() {
    const modulesPath = path.join(process.cwd(), 'modules')
    const categories = fs.readdirSync(modulesPath)
    const params = []

    categories.forEach((category) => {
        const postsPath = path.join(modulesPath, category, 'posts')
        if (!fs.existsSync(postsPath)) return

        const files = fs.readdirSync(postsPath)

        files.forEach((filename) => {
            const content = fs.readFileSync(path.join(postsPath, filename), 'utf-8')
            const { data } = matter(content)
            if (data.slug) {
                params.push({
                    categoria: category,
                    slug: data.slug,
                })
            }
        })
    })

    const sanityPosts = await client.fetch(POSTS_QUERY);

    sanityPosts.forEach((post) => {
        if (post?.slug?.current && post?.categories?.length > 0) {
            params.push({
                categoria: post.categories[0].title,
                slug: post.slug.current,
            });
        }
    });

    return params;
}

export default async function PostPage({ params }) {
    const { categoria, slug } = await params
    const postPath = path.join(process.cwd(), 'modules', categoria, 'posts')

    let postData = null;
    let content = null;

    if (fs.existsSync(postPath)) {
        const files = fs.readdirSync(postPath);

        const matchedFile = files.find((file) => {
            const fileContent = fs.readFileSync(path.join(postPath, file), 'utf-8');
            const { data } = matter(fileContent);
            return data.slug === slug;
        });

        if (matchedFile) {
            const fullPath = path.join(postPath, matchedFile);
            const fileContent = fs.readFileSync(fullPath, 'utf-8');
            const parsed = matter(fileContent);
            postData = parsed.data;
            content = parsed.content;
        }
    }

    if (!postData) {
        postData = await client.fetch(SANITY_QUERY, { slug });
        if (!postData) return notFound();
        content = postData.body;
    }
    const posts = getAllPosts(5);

    console.log(postData)

    return (
        <main className={styles.container_all_md}>
            <article className={styles.all_md}>
                <BotonAtras categoria={categoria} />
                <div className={styles.title_img}>
                    <h1>{postData.title}</h1>
                    <span>
                        {"Fecha de publicación: "}
                        {new Date(postData.date || postData.publishedAt).toLocaleDateString('es-ES')}
                    </span>
                    {postData.image && <img src={postData.image} alt={postData.title} />}
                    {postData.excerpt && <p>{postData.excerpt}</p>}
                </div>

                <div className={styles.mark}>
                    {content && typeof content === 'string' ? (
                        <ReactMarkdown>{content}</ReactMarkdown>
                    ) : (
                        <PortableText value={postData.body} />
                    )}
                </div>
                {postData?.videoUrl && (
                    <>
                        <p className='ver-video'>Mira el video</p>
                        <br />
                        <VideoYoutube urlVideo={postData?.videoUrl} />
                    </>
                )}
            </article>
            <Sidebar posts={posts} />
        </main>
    )
}
