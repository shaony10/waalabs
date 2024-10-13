import {CommentModel} from "../model/CommentModel";
import {createContext, ReactNode, useContext, useState} from "react";


interface CommentsContextType {
    comments: CommentModel[],
    loadComments: (comments:CommentModel[]) => void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

//Context provider here
// functional Component
export const CommentsProvider = ({children}: { children: ReactNode }) => {
    const [comments, setComments] = useState(new Array<CommentModel>());
    const loadComments = (comments: CommentModel[]) => {
        setComments(comments);
    }

    return (
        <CommentsContext.Provider value={{comments, loadComments}}>
            {children}
        </CommentsContext.Provider>
    );
}

export const useCommentsConext = () => {
    const context = useContext(CommentsContext);
    if (!context) {
        throw new Error('Component must be in CommentsContext');
    }
    return context;
}
export default CommentsContext;