import React from 'react';
import { useEffect, useState } from 'react';
// import { Navigate } from 'react-router';
// import { useNavigate } from 'react-router-dom';
// import { requestPosts  } from '../services/requests';

import '../styles/feed.css';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    const postsToRender = posts;

    const requestPosts = async () => {
        const responseAPI = await requestPosts();
        setPosts(responseAPI);
    };

    // useEffect(() => {
    //     requestPosts();
    // }, []);
    
    return (
        <div className='feed-page'>
            {postsToRender.map((post) => (
                <div>
                    <img
                    src={ `` }
                    alt="Imagem Post"
                    />
                    <p>
                    {post}
                    </p>
                </div>
                ))
            }
        </div>
    );
}
