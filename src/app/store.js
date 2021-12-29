import { configureStore } from "@reduxjs/toolkit";
import articlePreviewsReducer from "../features/articlePreviews/articlePreviewsSlice";
import currentArticleReducer from "../features/currentArticle/currentArticleSlice";
import currentCommentsSlice from "../features/currentComments/currentCommentsSlice";

const store = configureStore({
    reducer: {
        articlePreviews: articlePreviewsReducer,
        currentArticle: currentArticleReducer,
        currentComments: currentCommentsSlice
    }
})

export default store;