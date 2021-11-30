import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadCurrentArticle = createAsyncThunk(
    "currentArticle/loadCurrentArticle",
    async (id) => {
        const data = await fetch(`https://61a4e5c24c822c0017041f89.mockapi.io/articles/${id}`);
        const json = await data.json();
        return json;
});

export const currentArticleSlice = createSlice({
    name: "currentArticle",
    initialState: {
        fullArticle: null,
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCurrentArticle.pending, (state) => {
                state.isLoading = true;
                state.hasError = false
            })
            .addCase(loadCurrentArticle.fulfilled, (state, action) => {
                state.isLoading = false;
                state.fullArticle = action.payload;
                state.hasError = false
            })
            .addCase(loadCurrentArticle.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true
            })
    }
});

export const selectCurrentArticle = (state) => state.currentArticle.fullArticle;

export const selectIsArticleLoading = (state) => state.currentArticle.isLoading;

export default currentArticleSlice.reducer;