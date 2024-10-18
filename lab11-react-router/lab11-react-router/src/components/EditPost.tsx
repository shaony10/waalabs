import {useParams} from "react-router-dom";
import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {PostModel} from "./PostsList";

export default function EditPost() {
    const [post, setPost] = useState({id: 0, title: '', body: ''});
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            fetch('https://dummyjson.com/posts/' + id)
                .then(res => res.json())
                .then((result: PostModel) => {
                    setPost({...result})
                });
        }

    }, []);

    const handleInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPost({...post, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        fetch('https://dummyjson.com/posts/' + id, {
            method: 'PUT', /* or PATCH */
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                title: post.title,
                body: post.body
            })
        })
            .then(res => res.json())
            .then(console.log);
    }
    return (<>
        <form className="reply-box-wrap" onSubmit={handleSubmit}>
            <div className={'p-10'}>
                <label> Title:</label>
                <input
                    name="title"
                    value={post.title}
                    onChange={handleInput}
                />
            </div>
            <div className={'p-10'}>
                <label> Body:</label>
                <textarea
                    rows={5}
                    cols={200}
                    placeholder="tell something..."
                    value={post.body}
                    name="body"
                    onChange={handleInput}
                />

            </div>

            {/* post button */}
            <button className="">Update</button>
        </form>
    </>)
}