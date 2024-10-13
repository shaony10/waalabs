import './App.scss'
import avatar from './images/bozai.png'
import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";
import NavbarComponent from "./components/NavbarComponent";
import {CommentModel} from "./model/CommentModel";
import {useEffect, useState} from "react";
import _ from "lodash";
import dayjs from "dayjs";
import {CommentsProvider, useCommentsConext} from './context/CommentsContext';


// Comment List data


let initialComments: CommentModel[] = [];

const App = () => {
    /*const [comments,
        setComments] = useState(initialComments)*/

    const [count, setCount] = useState(initialComments.length);

    const {comments, loadComments} = useCommentsConext();

    useEffect(() => {
        async function getList() {
            const res = await fetch('http://localhost:3004/data');
            const data = await res.json();
            console.log(data)
            loadComments(_.orderBy(data.comments, 'like', 'desc'));
        }

        getList();
    }, []);
    const orderByTop = () => {
        loadComments(_.orderBy(comments, ['like'], ['desc']));
    }

    const orderByNewest = () => {
        loadComments(_.orderBy(comments, ['ctime'], ['asc']));
    }


    const onNewCommentAdded = (comment: string) => {
        const newComment: CommentModel = {
            rpid: comments.length + 1,
            content: comment,
            ctime: dayjs().format('MM-DD HH:mm').toString(),
            like: 0,
            user: {
                uid: '618085',
                avatar: '',
                uname: 'Shawal',
            }
        }

        loadComments([newComment, ...comments]);
        setCount(comments.length);
    }

    return (

        <div className="app">
            <NavbarComponent count={count}
                             orderByTop={orderByTop}
                             orderByNewest={orderByNewest}/>

            <div className="reply-wrap">
                {/* comments */}
                <div className="box-normal">
                    {/* current logged in user profile */}
                    <div className="reply-box-avatar">
                        <div className="bili-avatar">
                            <img className="bili-avatar-img" src={avatar} alt="Profile"/>
                        </div>
                    </div>
                    <AddComment onAdded={onNewCommentAdded}/>
                </div>
                {/* comment list */}
                <div className="reply-list">
                    {comments.map(comment => (
                        <SingleComment comment={comment}
                                       key={comment.rpid}/>))}

                </div>
            </div>
        </div>
    )
}

export default App