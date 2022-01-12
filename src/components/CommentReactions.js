export const CommentReactions = ({ reactionByComment, comment, updateReaction }) => {

    let likeCount;
    let dislikeCount;
    if (reactionByComment) {
        likeCount = reactionByComment.like;
        dislikeCount = reactionByComment.dislike;
    }

    const handleReactionClick = ({ target }) => {
        const payload = {
            commentId: comment.commentId,
            articleId: comment.articleId,
            reaction: target.id
        };
        updateReaction(payload);
    }


    return (
        <span className="reactionsWrapper">
            <span className="reactionContainer">
                <i 
                    className="far fa-thumbs-up reaction-btn"
                    id="like"
                    onClick={handleReactionClick}
                    >
                </i>
                <span>{likeCount}</span>
            </span>
            <span className="reactionContainer">
                <i 
                    className="far fa-thumbs-down reaction-btn"
                    id="dislike"
                    onClick={handleReactionClick}
                    >
                </i>
                <span>{dislikeCount}</span>
            </span>
        </span>
    )
}