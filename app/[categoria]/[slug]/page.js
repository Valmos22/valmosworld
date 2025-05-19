/* eslint-disable @next/next/no-img-element */
import BotonAtras from '@/components/BotonAtras/BotonAtras'
import Sidebar from '@/components/Sidebar/Sidebar'
import { getAllPosts } from '@/utils/getAllPosts'
import fs from 'fs'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import styles from '../../page.module.css'

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

    return params
}

export default async function PostPage({ params }) {
    const { categoria, slug } = await params

    const postPath = path.join(process.cwd(), 'modules', categoria, 'posts')
    if (!fs.existsSync(postPath)) return notFound()

    const files = fs.readdirSync(postPath)

    const matchedFile = files.find((file) => {
        const content = fs.readFileSync(path.join(postPath, file), 'utf-8')
        const { data } = matter(content)
        return data.slug === slug
    })

    if (!matchedFile) return notFound()

    const fullPath = path.join(postPath, matchedFile)
    const fileContent = fs.readFileSync(fullPath, 'utf-8')
    const { data, content } = matter(fileContent)
    const posts = getAllPosts(5);

    return (
        <main className={styles.container_all_md}>
            <article className={styles.all_md}>
                <BotonAtras categoria={categoria} />
                <div className={styles.title_img}>
                    <h1>{data.title}</h1>
                    <span>{"Fecha de publicacion: "}{new Date(data.date).toLocaleDateString('es-ES')}</span>
                    {data.image && <img src={data.image} alt={data.title} />}
                    <p>{data.excerpt}</p>
                </div>

                <div className={styles.mark}>
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </article>
            <Sidebar posts={posts} />
        </main>
    )
}
