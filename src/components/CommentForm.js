import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { sendComment } from "../features/currentComments/currentCommentsSlice";

export const CommentForm = ({ currentArticle }) => {
    const [input, setInput] = useState({comment: "", userName: "", articleId: ""});

    const handleInputChange = ({target}) => {
        setInput((prev) => ({ ...prev, [target.name]: target.value}));
    }

    useEffect(() => setInput((prev) => ({ ...prev, articleId: currentArticle.id})), [currentArticle]);

    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(sendComment(input));
        setInput({comment: "", userName: "", articleId: currentArticle.id});
    }

    return (
        <form className="commentForm">
            <h3 className="commentFormTitle">Add Comment:</h3>
            <input 
                type="text"
                placeholder="Your comment..."
                className="commentInput"
                name="comment"
                value={input.comment}
                onChange={handleInputChange}
                >
            </input>
            <input
                type="text"
                placeholder="Your name"
                className="commentInput"
                name="userName"
                value={input.userName}
                onChange={handleInputChange}
            ></input>
            <input 
                type="submit"
                className="submitBtn"
                value="Submit"
                onClick={handleSubmit}
            >
            </input>
        </form>)
}