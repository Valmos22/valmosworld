'use client'

import { usePostContext } from "@/context/PostContext";
import { client } from "@/sanity/lib/client";
import { queryData } from "@/utils/postsQuery";
import { useEffect } from "react";

const PostStudio = () => {
  const { setAllPost } = usePostContext();
  const { POSTS_QUERY, options } = queryData;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const posts = await client.fetch(POSTS_QUERY, {}, options)
        setAllPost(posts)
      } catch (error) {
        console.error("Error al cargar posts:", error)
      }
    }
    fetchData()
  }, [setAllPost])

  return null;
}

export default PostStudio