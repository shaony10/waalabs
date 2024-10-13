import {CommentModel} from "../model/CommentModel";
import {createContext, ReactNode, useContext, useState} from "react";


interface CommentsContextType {
    comments: CommentModel[],
    sortingType:'top'|'newest',
    populateComments: (comments:CommentModel[]) => void,
    addComment: (comment:CommentModel) => void,
    updateSortingType:(type:'top'|'newest')=>void
}

const CommentsContext = createContext<CommentsContextType | undefined>(undefined);

//Context provider here
// functional Component
export const CommentsProvider = ({children}: { children: ReactNode }) => {
    const [comments, setComments] = useState(new Array<CommentModel>());
    const [sortingType, setSortingType] = useState('top');
    const loadComments = (comments: CommentModel[]) => {
        setComments(comments);
    }

    const addComment = (comment: CommentModel) => {
        setComments([comment, ...comments]);
    }

    const updateSortingType = (type:'top'|'newest')=>{
        setSortingType(type);
    }

    const initialValues:CommentsContextType = {
        comments:comments,
        sortingType:'top',
        updateSortingType:updateSortingType,
        populateComments: loadComments,
        addComment:addComment
    }

    return (
        <CommentsContext.Provider value={initialValues}>
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