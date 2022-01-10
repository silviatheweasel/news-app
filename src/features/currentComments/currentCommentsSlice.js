import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadComments = createAsyncThunk(
    "currentComments/loadComments",
    async (articleId) => {
        const endpoint = "https://61a4e5c24c822c0017041f89.mockapi.io/articles/" + articleId + "/comments";
        const data = await fetch(endpoint);
        const comments = await data.json();
        return comments;
    }
)

export const sendComment = createAsyncThunk(
    "currentComments/sendComment",
    async (input) => {
        const {comment, userName, articleId} = input;
        const currentTime = Date.now().toString();
        const endpoint = "https://61a4e5c24c822c0017041f89.mockapi.io/articles/" + articleId + "/comments";
        try {
            const config = 
            {
                method: "post",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "articleId": articleId,
                    "text": comment,
                    "user": userName,
                    "time": currentTime,
                    "commentId": currentTime
                }) 
            }
            const response = await fetch(endpoint, config);
            const comments = await response.json();
            return comments;
        } catch(error) {
            console.log(error);
        }
    }
)

export const loadReactions = createAsyncThunk(
    "currentComments/loadReactions",
    async (articleId) => {
        const endpoint = "https://61a4e5c24c822c0017041f89.mockapi.io/articles/" + articleId + "/reactions";
        const data = await fetch(endpoint);
        const jsonData = await data.json();
        let reactions = {};
        const commentIds = [...new Set(jsonData.map(data => data.commentId))];
        commentIds.map(id => reactions[id] = {like: 0, dislike: 0});
        jsonData.forEach(data => reactions[data.commentId][data.reaction] ++);
        return reactions;
    }
)

export const sendReaction = createAsyncThunk(
    "currentComments/sendReaction",
    async (payload) => {
        const { articleId, commentId, reaction } = payload;
        const endpoint = "https://61a4e5c24c822c0017041f89.mockapi.io/articles/" + articleId + "/reactions";
        try {
            const config = 
            {
                method: "post",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "articleId": articleId,
                    "commentId": commentId,
                    "reaction": reaction
                })
            }
            const response = await fetch(endpoint, config);
            const reactions = await response.json();
            return reactions;
        } catch(error) {
            console.log(error);
        }
    }
)

export const currentCommentsSlice = createSlice({
    name: "currentComments",
    initialState: {
        comments: [],
        reactions: null,
        isLoading: false,
        hasErrorLoading: false,
        createCommentIsPending: false,
        failedToCreateComment: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadComments.pending, (state) => {
                state.isLoading = true;
                state.hasErrorLoading = false;
            })
            .addCase(loadComments.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasErrorLoading = false;
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state) => {
                state.isLoading = false;
                state.hasErrorLoading = true;
            })
            .addCase(sendComment.pending, (state) => {
                state.createCommentIsPending = true;
                state.failedToCreateComment = false;
            })
            .addCase(sendComment.fulfilled, (state) => {
                state.createCommentIsPending = false;
                state.failedToCreateComment = false;
            })
            .addCase(sendComment.rejected, (state) => {
                state.createCommentIsPending = false;
                state.failedToCreateComment = true;
            })
            .addCase(loadReactions.fulfilled, (state, action) => {
                state.reactions = action.payload;
            })
    }
})

export const selectCurrentComments = (state) => state.currentComments.comments;

export const selectIsLoading = (state) => state.currentComments.isLoading;

export const selectCurrentReactions = (state) => state.currentComments.reactions;

export default currentCommentsSlice.reducer;