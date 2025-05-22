import fs from 'fs';
import path from 'path';

export default function handler(req, res) {

    const obtenerClave = (clave) => {
        const valor = localStorage.getItem(clave);
        return valor ? JSON.parse(valor) : null;
    };

    const posts = obtenerClave("post");

    const validCategories = ['animes', 'juegos', 'peliculas'];
    let guardados = 0;

    posts.forEach((post) => {
        const { title, slug, category, date, excerpt, image, content } = post;

        if (!validCategories.includes(category)) return;

        const mdContent = `---
            title: ${title}
            date: ${date}
            excerpt: ${excerpt}
            slug: ${slug}
            category: ${category}
            image: ${image}
            ---

            ${content}
        `;

        const dirPath = path.join(process.cwd(), `modules/${category}/post`);
        const filePath = path.join(dirPath, `${slug}.md`);

        try {
            fs.writeFileSync(filePath, mdContent, 'utf8');
            guardados++;
        } catch (error) {
            console.error('Error al guardar el archivo:', slug, error);
        }
    });

    return res.status(200).json({ message: `Se guardaron ${guardados} posts.` });
}
