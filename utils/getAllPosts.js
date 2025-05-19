import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

export function getAllPosts(limit = null) {

    const modulesDir = path.join(process.cwd(), 'modules')
    const categorias = fs.readdirSync(modulesDir)

    let allPosts = []

    categorias.forEach((categoria) => {
        const postsDir = path.join(modulesDir, categoria, 'posts')
        if (fs.existsSync(postsDir)) {
            const files = fs.readdirSync(postsDir)

            files.forEach((file) => {
                const filePath = path.join(postsDir, file)
                const fileContent = fs.readFileSync(filePath, 'utf-8')
                const { data } = matter(fileContent)

                allPosts.push({
                    ...data,
                    categoria,
                })
            })
        }
    })

    allPosts.sort((a, b) => new Date(b.date) - new Date(a.date))

    return limit ? allPosts.slice(0, limit) : allPosts
}