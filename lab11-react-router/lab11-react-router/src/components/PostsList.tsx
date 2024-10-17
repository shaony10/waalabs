import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export type PostModel ={
    id: number;
    title: string;
    body: string;
}

export default function PostsList() {
    const [posts, setPosts] = useState<PostModel[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts));
    }, []);
    return <>
        <ul>
            {
                posts.map((post, index) =>
                    <li key={post.id}>
                        <NavLink to={`/posts/` + post.id}>{post.title}</NavLink>

                    </li>
                )
            }
        </ul>
    </>
}