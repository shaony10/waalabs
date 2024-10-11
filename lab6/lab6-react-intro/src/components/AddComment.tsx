import { MouseEvent, useRef} from "react";

export default function AddComment(props: {onAdded:any}){
    const textareRef = useRef<HTMLTextAreaElement>(null);


    const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.onAdded(textareRef.current?.value);
    }
    return (<>
        <form className="reply-box-wrap" >
            {/* comment */}
            <textarea
                className="reply-box-textarea"
                placeholder="tell something..."
                name="content"
                ref={textareRef}
            />
            {/* post button */}
            <button className="reply-box-send" onClick={handleSubmit}>
                <div className="send-text">post</div>
            </button>
        </form>
    </>)
}