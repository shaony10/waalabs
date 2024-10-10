export default function NavbarComponent() {
    return (
        <>
            {/* Nav Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">Comments</span>
                        {/* Like */}
                        <span className="total-reply">{10}</span>
                    </li>
                    <li className="nav-sort">
                        {/* highlight class name： active */}
                        <span className='nav-item'>Top</span>
                        <span className='nav-item'>Newest</span>
                    </li>
                </ul>
            </div>
        </>
    );
}