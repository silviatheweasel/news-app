import { useDispatch } from "react-redux";

import { CommentReactions } from "./CommentReactions";
import { sendReaction, loadReactions } from "../features/currentComments/currentCommentsSlice";
import { getTimeDiff } from "../utilities/getTimeDiff";

export const CommentList = ({comments, reactions }) => {

    const dispatch = useDispatch();
    const updateReaction = (payload) => {
        dispatch(sendReaction(payload));
        setTimeout(() => {
            dispatch(loadReactions(payload.articleId))
        }, 300);
    }

    return (
    <div className="commentsWrapper">
        <h2 className="commentTitle">Comments</h2>
        {comments &&
            <ul className="commentList">
                {comments.map((comment, index) => (<li
                    className="comment" 
                    key={index}>
                        <div>
                            <span 
                                className="userName"
                                >{comment.user}
                            </span>
                            <span
                                className="timeStamp"
                                >{getTimeDiff(comment.time)}
                            </span>
                            <CommentReactions 
                                reactionByComment={reactions[comment.commentId]}
                                comment={comment}
                                updateReaction={updateReaction}
                                />
                        </div>
                        <p className="commentText">{comment.text}</p>
                    </li>))}
            </ul>
        }
    </div>)
}