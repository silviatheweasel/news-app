import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { selectCurrentComments, loadComments, sendComment, selectCurrentReactions } from "./currentCommentsSlice";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";

import { CommentList } from "../../components/CommentList";
import { CommentForm } from "../../components/CommentForm";

export const CurrentComments = () => {
    const currentComments = useSelector(selectCurrentComments);
    const currentArticle = useSelector(selectCurrentArticle);
    const currentReactions = useSelector(selectCurrentReactions);

    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (currentArticle) {
    //         const fetchData = setInterval(() => dispatch(loadComments(currentArticle.id)), 1500);
    //         return () => clearInterval(fetchData);
    //     }
    // }, [currentArticle, dispatch]);

    const [input, setInput] = useState({comment: "", userName: "", articleId: ""});

    const handleInputChange = ({target}) => {
        setInput((prev) => ({ ...prev, [target.name]: target.value}));
        setShowWarning(false);
    }

    useEffect(() => {
        if (currentArticle) {
            setInput((prev) => ({ ...prev, articleId: currentArticle.id}))
        }
    }, [currentArticle]);

    const [showWarning, setShowWarning] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (input.comment && input.userName) {
            dispatch(sendComment(input));
        } else {
            setShowWarning(true);
        }
        setInput({comment: "", userName: "", articleId: currentArticle.id});
    }

    if (!currentArticle) {
            return null;
        }
    
    return (
    <div className="commentSection">
        <CommentList 
            comments={currentComments} 
            reactions={currentReactions}
            >
        </CommentList>
        <CommentForm 
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            showWarning={showWarning}
            />
    </div>)
}