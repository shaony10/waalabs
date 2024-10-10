export default function SingleComment() {
    return (
        <>
            {/* comment item */}
            <div className="reply-item">
                {/* profile */}
                <div className="root-reply-avatar">
                    <div className="bili-avatar">
                        <img
                            className="bili-avatar-img"
                            alt=""
                        />
                    </div>
                </div>

                <div className="content-wrap">
                    {/* username */}
                    <div className="user-info">
                        <div className="user-name">jack</div>
                    </div>
                    {/* comment content */}
                    <div className="root-reply">
                        <span className="reply-content">This is reply</span>
                        <div className="reply-info">
                            {/* comment created time */}
                            <span className="reply-time">{'2023-11-11'}</span>
                            {/* total likes */}
                            <span className="reply-time">Like:{100}</span>
                            <span className="delete-btn">
                    Delete
                  </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}