import { useDispatch } from "react-redux";

import { CommentReactions } from "./CommentReactions";
import { sendReaction, loadReactions } from "../features/currentComments/currentCommentsSlice";

export const CommentList = ({comments, reactions }) => {

    const dispatch = useDispatch();
    const updateReaction = (payload) => {
        dispatch(sendReaction(payload));
        setTimeout(() => {
            dispatch(loadReactions(payload.articleId))
        }, 100);
    }

    return (
    <div className="commentsWrapper">
        <h2 className="commentTitle">Comments</h2>
        {comments &&
            <ul className="commentList">
                {comments.map((comment, index) => (<li
                    className="comment" 
                    key={index}>
                        <p className="userName">{comment.user}</p>
                        <CommentReactions 
                            reactionByComment={reactions[comment.commentId]}
                            comment={comment}
                            updateReaction={updateReaction}
                            />
                        <p className="commentText">{comment.text}</p>
                    </li>))}
            </ul>
        }
    </div>)
}