import { useSelector, useDispatch } from "react-redux";

import { selectCurrentComments, selectIsLoading, loadComments } from "./currentCommentsSlice";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";

import { CommentList } from "../../components/CommentList";
import { CommentForm } from "../../components/CommentForm";

export const CurrentComments = () => {
    const currentComments = useSelector(selectCurrentComments);
    const currentArticle = useSelector(selectCurrentArticle)
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    if (!currentArticle) {
            return null;
        }
    

    return (
    <div className="commentSection">
        <CommentList 
            comments={currentComments} 
            currentArticle={currentArticle}
            />
        <CommentForm 
            currentArticle={currentArticle} 
            />
    </div>)
}