export const CommentReactions = ({ reactionByComment }) => {
    
    let likeCount = 0;
    let dislikeCount = 0;
    if (reactionByComment) {
        likeCount = reactionByComment.like;
        dislikeCount = reactionByComment.dislike;
    }

    return (
        <span>
            <span>
                <i className="far fa-thumbs-up"></i>
                <span>{likeCount}</span>
            </span>
            <span>
                <i className="far fa-thumbs-down"></i>
                <span>{dislikeCount}</span>
            </span>
        </span>
    )
}