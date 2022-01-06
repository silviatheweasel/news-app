import { CommentReactions } from "./CommentReactions";

export const CommentList = ({comments, reactions }) => {
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
                            />
                        {/* {reactions[comment.commentId] && <span>{reactions[comment.commentId].like}</span>} */}
                        <p className="commentText">{comment.text}</p>
                    </li>))}
            </ul>
        }
    </div>)
}