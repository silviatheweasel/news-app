import { configureStore } from "@reduxjs/toolkit";
import articlePreviewsReducer from "../features/articlePreviews/articlePreviewsSlice";

const store = configureStore({
    reducer: {
        articlePreviews: articlePreviewsReducer
    }
})

export default store;