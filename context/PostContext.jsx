'use client'

import { createContext, useContext, useState } from 'react';

const PostContext = createContext();

export const PostProvider = ({ children }) => {
    const [allPost, setAllPost] = useState([]);

    return (
        <PostContext.Provider value={{ allPost, setAllPost }}>
            {children}
        </PostContext.Provider>
    )
}

export const usePostContext = () => {
    const context = useContext(PostContext);
    if (!context) {
        throw new Error('usePostContext debe usarse dentro de un PostProvider');
    }
    return context;
}