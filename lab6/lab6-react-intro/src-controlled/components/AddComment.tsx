import {ChangeEvent, FormEvent, useState} from "react";

export default function AddComment(props: {onAdded:any}){
    const [formData, setFormData] = useState({
        content: ''
    });

    const handleInput = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        props.onAdded(formData.content);
        setFormData({ content: ''})
    }
    return (<>
        <form className="reply-box-wrap" onSubmit={handleSubmit}>
            {/* comment */}
            <textarea
                className="reply-box-textarea"
                placeholder="tell something..."
                value={formData.content}
                name="content"
                onChange={handleInput}
            />
            {/* post button */}
            <button className="reply-box-send">
                <div className="send-text">post</div>
            </button>
        </form>
    </>)

}