export default function AddComment(){

    return (<>
        <div className="reply-box-wrap">
            {/* comment */}
            <textarea
                className="reply-box-textarea"
                placeholder="tell something..."
            />
            {/* post button */}
            <div className="reply-box-send">
                <div className="send-text">post</div>
            </div>
        </div>
    </>)

}