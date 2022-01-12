export const CommentForm = ({ handleInputChange, handleSubmit, input, showWarning }) => {

    return (
        <form className="commentForm">
            <h3 className="commentFormTitle">Add Comment:</h3>
            <input 
                type="text"
                placeholder="Your comment..."
                className="commentInput"
                name="comment"
                value={input.comment}
                autoComplete="off"
                onChange={handleInputChange}
                style={{
                    borderColor: showWarning ? "red" : "black"
                }}
                >
            </input>
            <input
                type="text"
                placeholder="Your name"
                className="commentInput"
                name="userName"
                autoComplete="off"
                value={input.userName}
                onChange={handleInputChange}
                style={{
                    borderColor: showWarning ? "red" : "black"
                }}
            ></input>
            <input 
                type="submit"
                className="submitBtn"
                value="Submit"
                onClick={handleSubmit}
            >
            </input>
            {showWarning && <p 
                className="warningMsg"
                >Please leave your comment and name before submission.
                </p>}
        </form>)
}