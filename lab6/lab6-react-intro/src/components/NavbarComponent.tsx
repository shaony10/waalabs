import {useState} from "react";

export default function NavbarComponent(props:{count:number}) {
    const [count, setCount] = useState(props.count)
    return (
        <>
            {/* Nav Tab */}
            <div className="reply-navigation">
                <ul className="nav-bar">
                    <li className="nav-title">
                        <span className="nav-title-text">Comments</span>
                        {/* Like */}
                        <span className="total-reply">{count}</span>
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