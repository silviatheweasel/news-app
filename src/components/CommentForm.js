export const CommentForm = ({ handleInputChange, handleSubmit, input }) => {

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