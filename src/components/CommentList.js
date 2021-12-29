import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadComments } from "../features/currentComments/currentCommentsSlice";

export const CommentList = ({comments, currentArticle }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = setInterval(() => dispatch(loadComments(currentArticle.id)), 2000);
        return () => clearInterval(fetchData);
    }, [currentArticle]);

    return (
    <div className="commentsWrapper">
        <h2 className="commentTitle">Comments</h2>
        {comments &&
            <ul className="commentList">
                {comments.map((comment, index) => (<li
                    className="comment" 
                    key={index}>
                        <p className="userName">{comment.user}</p>
                        <p className="commentText">{comment.text}</p>
                    </li>))}
            </ul>
        }
    </div>)
}