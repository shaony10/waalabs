import React, {MouseEvent, useRef} from "react";
import PubSub from "pubsub-js";

export default function Header() {
    const inputRef = useRef<HTMLInputElement>(null);
    const searchHandler = (e: MouseEvent<HTMLButtonElement>) => {
        const keyword = inputRef.current?.value;
        if (keyword && keyword.length > 0)
            PubSub.publish('SEARCH_TOPIC',keyword);
    }

    return <>
        <section className="jumbotron">
            <h3 className="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" ref={inputRef}/>&nbsp;
                <button className="btn btn-primary" onClick={searchHandler}>Search</button>
            </div>
        </section>
    </>;
}