import { configureStore } from "@reduxjs/toolkit";
import articlePreviewsReducer from "../features/articlePreviews/articlePreviewsSlice";
import currentArticleReducer from "../features/currentArticle/currentArticleSlice";

const store = configureStore({
    reducer: {
        articlePreviews: articlePreviewsReducer,
        currentArticle: currentArticleReducer
    }
})

export default store;