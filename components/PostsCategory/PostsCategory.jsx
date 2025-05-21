'use client'

import { usePostContext } from "@/context/PostContext";
import PostCard from "../PostCard/PostCard";

const PostsCategory = ({ category }) => {
    const { allPost } = usePostContext();

    const animePosts = allPost.filter(post =>
        post.categories?.some(cat => cat.title.toLowerCase() === category)
    );

    return (
        <article className='categoria-list'>
            {animePosts?.map((post) => (
                <PostCard key={post?.slug?.current} post={post} />
            ))}
        </article>
    )
}

export default PostsCategory