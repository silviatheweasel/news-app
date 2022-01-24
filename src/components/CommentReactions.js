export const CommentReactions = ({ reactionByComment, commentId, articleId, updateReaction }) => {

    let likeCount = 0;
    let dislikeCount = 0;
    if (reactionByComment) {
        likeCount = reactionByComment.like;
        dislikeCount = reactionByComment.dislike;
    }

    const handleReactionClick = ({ target }) => {
        const payload = {
            commentId: commentId,
            articleId: articleId,
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