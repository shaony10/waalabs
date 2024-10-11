import './App.scss'
import avatar from './images/bozai.png'
import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";
import NavbarComponent from "./components/NavbarComponent";
import {CommentModel} from "./model/CommentModel";
import {useEffect, useState} from "react";
import {defaultList} from "./data/data";
import _ from "lodash";


// Comment List data


const initialComments: CommentModel[] = [];
const App = () => {
    const [comments,
        setComments] = useState(initialComments)

    const orderByTop = ()=>{
      setComments(_.orderBy(comments, ['like'], ['desc']));
    }

    const orderByNewest = ()=>{
        setComments(_.orderBy(comments, ['ctime'], ['asc']));
    }
    const populateInitialComments = () => {

        for (const defaultItem of defaultList) {
            comments.push({
                ...defaultItem
            } as CommentModel);
        }

        orderByTop();
    }

    useEffect(()=>{
        populateInitialComments();
    },[this]);


    return (
        <div className="app">
            <NavbarComponent count={comments.length}
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
                    <AddComment/>
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