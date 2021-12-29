export const CommentList = ({comments }) => {
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