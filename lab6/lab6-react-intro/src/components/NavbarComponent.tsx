import classnames from "classnames";
import {useState} from "react";
import {CommentModel} from "../model/CommentModel";
import {useCommentsConext} from "../context/CommentsContext";

export type NavProps={
    orderByTop:any,
    orderByNewest:any
}
export default function NavbarComponent(props: NavProps) {
    const {comments, sortingType,updateSortingType} = useCommentsConext();


    const orderByTopHandler = () => {
        updateSortingType('top');
        props.orderByTop();

    }
    const orderByNewestHandler = () => {
        updateSortingType('newest');
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
                        <span className="total-reply">{comments.length}</span>
                    </li>
                    <li className="nav-sort">
                        {/* highlight class name： active */}
                        <span className={classnames('nav-item', {active: sortingType==='top'})}
                              onClick={orderByTopHandler}>Top</span>
                        <span className={classnames('nav-item', {active: sortingType==='newest'})}
                              onClick={orderByNewestHandler}>Newest</span>
                    </li>
                </ul>
            </div>
        </>
    );
}