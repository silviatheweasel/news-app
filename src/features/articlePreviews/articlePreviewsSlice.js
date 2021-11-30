import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const loadArticlePreviews = createAsyncThunk(
    "articlePreviews/loadArticlePreviews",
    async () => {
        const data = await fetch("https://61a4e5c24c822c0017041f89.mockapi.io/articles");
        const json = data.json();
        return json;
    }
)

export const articlePreviewsSlice = createSlice({
    name: "articlePreviews",
    initialState: {
        articles: [],
        isLoading: false,
        hasError: false
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadArticlePreviews.pending, (state) => {
                state.isLoading = true;
                state.hasError = false;
            })
            .addCase(loadArticlePreviews.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.isLoading = false;
                state.hasError = false;
            })
            .addCase(loadArticlePreviews.rejected, (state) => {
                state.isLoading = false;
                state.hasError = true;
            })
        }
    }
);

export const selectAllArticles = (state) => state.articlePreviews.articles;

export const selectIsLoading = (state) => state.articlePreviews.isLoading;

export default articlePreviewsSlice.reducer;