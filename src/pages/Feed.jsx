import React from 'react';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { requestPosts  } from '../services/requests';

import '../styles/feed.css';

export default function Feed() {
    const [posts, setPosts] = useState;

    useEffect(async() => {
        try {
            const req = await requestPosts();
            req = setPosts;
        } catch (erro) {
            console.log(erro);
        }

    });
    
    return (
        <div className='feed-page'>
            { posts.forEach(post => {
                <div>{post}</div>                
            })}
        </div>
    );
}
