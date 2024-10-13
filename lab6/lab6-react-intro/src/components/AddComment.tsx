import { MouseEvent, useRef} from "react";
import {useCommentsConext} from "../context/CommentsContext";
import {CommentModel} from "../model/CommentModel";
import dayjs from "dayjs";

export default function AddComment(){

    const {comments,addComment} = useCommentsConext();
    const textareaRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //props.onAdded(textareaRef.current?.value);
        const newComment: CommentModel = {
            rpid: comments.length + 1,
            content: textareaRef.current?.value!,
            ctime: dayjs().format('MM-DD HH:mm').toString(),
            like: 0,
            user: {
                uid: '618085',
                avatar: '',
                uname: 'Shawal',
            }
        }
        addComment(newComment);

        if (textareaRef.current) {
            textareaRef.current.value = '';
        }
    }
    return (<>
        <form className="reply-box-wrap" >
            {/* comment */}
            <textarea
                className="reply-box-textarea"
                placeholder="tell something..."
                name="content"
                ref={textareaRef}
            />
            {/* post button */}
            <button className="reply-box-send" onClick={handleSubmit}>
                <div className="send-text">post</div>
            </button>
        </form>
    </>)
}