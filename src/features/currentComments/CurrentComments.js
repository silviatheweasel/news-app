import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { selectCurrentComments, loadComments, sendComment } from "./currentCommentsSlice";
import { selectCurrentArticle } from "../currentArticle/currentArticleSlice";

import { CommentList } from "../../components/CommentList";
import { CommentForm } from "../../components/CommentForm";

export const CurrentComments = () => {
    const currentComments = useSelector(selectCurrentComments);
    const currentArticle = useSelector(selectCurrentArticle)
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentArticle) {
            const fetchData = setInterval(() => dispatch(loadComments(currentArticle.id)), 2000);
            return () => clearInterval(fetchData);
        }
    }, [currentArticle, dispatch]);

    const [input, setInput] = useState({comment: "", userName: "", articleId: ""});

    const handleInputChange = ({target}) => {
        setInput((prev) => ({ ...prev, [target.name]: target.value}));
    }

    useEffect(() => {
        if (currentArticle) {
            setInput((prev) => ({ ...prev, articleId: currentArticle.id}))
        }
    }, [currentArticle]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(sendComment(input));
        setInput({comment: "", userName: "", articleId: currentArticle.id});
    }

    if (!currentArticle) {
            return null;
        }
    
    return (
    <div className="commentSection">
        <CommentList 
            comments={currentComments} 
            />
        <CommentForm 
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            input={input}
            />
    </div>)
}