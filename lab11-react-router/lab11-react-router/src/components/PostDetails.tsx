import {NavLink, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {PostModel} from "./PostsList";


export default function PostDetails() {

    const [post, setPost] = useState({id:0,title:'',body:''});
    const {id} = useParams();

    //const post = {id:0,title:'cxzcxz',body:'cxzcxz'};

    useEffect(() => {
        fetch('https://dummyjson.com/posts/'+id)
            .then(res => res.json())
            .then((result:PostModel) => {
                setPost({...result})
            });
    }, []);
    return <>
        <div>
            Post Details:

            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
        <div>
            <NavLink to={"edit"} >Edit</NavLink>
        </div>
    </>
}