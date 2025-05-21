'use client'

import { PostProvider } from "@/context/PostContext";

export function Providers({ children }) {
    return <PostProvider>{children}</PostProvider>;
}