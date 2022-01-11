import { useDispatch } from "react-redux";

import { CommentReactions } from "./CommentReactions";
import { sendReaction, loadReactions } from "../features/currentComments/currentCommentsSlice";

export const CommentList = ({comments, reactions }) => {

    const dispatch = useDispatch();
    const updateReaction = (payload) => {
        dispatch(sendReaction(payload));
        setTimeout(() => {
            dispatch(loadReactions(payload.articleId))
        }, 300);
    }

    const getTimeDiff = (timestamp) => {
        const currentTime = Date.now();
        const timeDiffInSecs = (currentTime - timestamp) / 1000;
        let text;
        if (timeDiffInSecs < 60) {
            text = "a few seconds ago"
        } else if (timeDiffInSecs >= 60 && timeDiffInSecs < 3600) {
            text = Math.floor(timeDiffInSecs / 60) + " minutes ago"
        } else if (timeDiffInSecs >= 3600 && timeDiffInSecs <= 24 * 3600) {
            text = Math.floor(timeDiffInSecs / 3600 ) + " hours ago"
        } else if (timeDiffInSecs > 24 * 3600 && timeDiffInSecs < 48 * 3600) {
            text = "over a day ago"
        }else if (timeDiffInSecs >= 48 * 3600 && timeDiffInSecs < 24 * 3600 * 30) {
            text = Math.floor(timeDiffInSecs / 3600 / 24) + " days ago"
        } else if (timeDiffInSecs >= 24 * 3600 * 30 && timeDiffInSecs <= 24 * 3600 * 30 * 12) {
            text = Math.floor(timeDiffInSecs / 3600 / 24 / 30) + " months ago"
        } else if (timeDiffInSecs > 24 * 3600 * 30 * 12 && timeDiffInSecs < 24 * 3600 * 30 * 24) {
            text = "over a year ago"
        } else {
            text = Math.floor(timeDiffInSecs / 3600 / 24 / 30 /12) + " years ago"
        }
        return text;
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