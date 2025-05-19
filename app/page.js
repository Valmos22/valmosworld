import CardHome from "@/components/CardHome/CardHome";
import Sidebar from "@/components/Sidebar/Sidebar";
import SocialNetworks from "@/components/SocialNetworks/SocialNetworks";
import { getAllPosts } from "@/utils/getAllPosts";
import styles from './page.module.css';

export default function Home() {
  const posts = getAllPosts(6);
  const randomPosts = posts.sort(() => 0.5 - Math.random()).slice(0, 6)

  const postDestacados = getAllPosts(10)
  const randomPostsDestacados = postDestacados.sort(() => 0.5 - Math.random()).slice(0, 10)

  return (
    <main className={styles.container_home}>
      <div id={styles.container_list_random}>
        <section className={styles.posts_list_random}>
          {randomPosts.map((post) => (
            <CardHome key={post.slug} post={post} />
          ))}
        </section>
      </div>

      <SocialNetworks />

      <section className={styles.container_list_random}>
        <article className={styles.post_destacado}>
          {randomPostsDestacados.map((post) => (
            <CardHome key={post.slug} post={post} />
          ))}
        </article>
        <Sidebar posts={randomPosts} />
      </section>
    </main>
  );
}
