import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export const getPostsCategory = (category) => {

    const dir = path.join(process.cwd(), `modules/${category}/posts`);
    const files = fs.readdirSync(dir);

    const posts = files.map((filename) => {
        const fileContent = fs.readFileSync(path.join(dir, filename), 'utf8');
        const { data } = matter(fileContent);
        return { ...data };
    });

    return posts;
}