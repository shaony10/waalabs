import './App.scss'
import avatar from './images/bozai.png'
import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";
import NavbarComponent from "./components/NavbarComponent";
import {CommentModel} from "./model/CommentModel";
import {useEffect, useState} from "react";
import {defaultList} from "./data/data";
import _ from "lodash";
import dayjs from "dayjs";


// Comment List data


let initialComments: CommentModel[] = [];
const populateInitialComments = () => {

    for (const defaultItem of defaultList) {
        initialComments.push({
            ...defaultItem
        } as CommentModel);
    }

    initialComments = _.orderBy(initialComments, ['like'], ['desc'])
}

populateInitialComments();
const App = () => {
    const [comments,
        setComments] = useState(initialComments)

    const [count, setCount]= useState(initialComments.length);
    const orderByTop = () => {
        setComments(_.orderBy(comments, ['like'], ['desc']));
    }

    const orderByNewest = () => {
        setComments(_.orderBy(comments, ['ctime'], ['asc']));
    }



    const onNewCommentAdded = (comment: string) => {
        const newComment: CommentModel = {
            rpid: comments.length + 1,
            content: comment,
            ctime: dayjs().format('MM-DD HH:mm').toString(),
            like: 0

        }

        setComments([newComment, ...comments]);
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