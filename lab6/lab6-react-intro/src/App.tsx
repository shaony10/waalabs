import './App.scss'
import avatar from './images/bozai.png'
import AddComment from "./components/AddComment";
import SingleComment from "./components/SingleComment";
import NavbarComponent from "./components/NavbarComponent";
import {CommentModel} from "./model/CommentModel";
import {useState} from "react";
import {defaultList} from "./data/data";


// Comment List data


const initialComments: CommentModel[] = [];
const App = () => {
    const [comments,
        setComments] = useState(initialComments)

    const populateInitialComments = () => {
        for (const defaultItem of defaultList) {
            comments.push({
                ...defaultItem
            } as CommentModel);
        }
    }

    populateInitialComments();
    return (
        <div className="app">
            <NavbarComponent count={comments.length}/>

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
                        <SingleComment comment={comment}/>))}

                </div>
            </div>
        </div>
    )
}

export default App