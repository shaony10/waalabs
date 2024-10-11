import classnames from "classnames";
import {useState} from "react";
import {CommentModel} from "../model/CommentModel";

export type NavProps={
    count:number,
    orderByTop:any,
    orderByNewest:any
}
export default function NavbarComponent(props: NavProps) {
    const [count, setCount] = useState(props.count);
    const [isTop, setIsTop] = useState(true);


    const orderByTopHandler = () => {
        setIsTop(true);
        props.orderByTop();

    }
    const orderByNewestHandler = () => {
        setIsTop(false);
        props.orderByNewest();
    }
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
                        <span className={classnames('nav-item', {active: isTop})}
                              onClick={orderByTopHandler}>Top</span>
                        <span className={classnames('nav-item', {active: !isTop})}
                              onClick={orderByNewestHandler}>Newest</span>
                    </li>
                </ul>
            </div>
        </>
    );
}