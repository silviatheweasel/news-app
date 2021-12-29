import { useSelector, useDispatch } from "react-redux";

import { selectCurrentArticle, selectIsArticleLoading, loadCurrentArticle } from "./currentArticleSlice";
import { loadComments, selectCurrentComments } from "../currentComments/currentCommentsSlice";
import { FullArticle } from "../../components/FullArticle";
import { CurrentComments } from "../currentComments/CurrentComments";
import { selectAllArticles } from "../articlePreviews/articlePreviewsSlice";

export const CurrentArticle = () => {
    const currentArticle = useSelector(selectCurrentArticle);
    const allArticles = useSelector(selectAllArticles);

    const isLoading = useSelector(selectIsArticleLoading);
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(loadCurrentArticle(id));
        dispatch(loadComments(id));
    }

    // if (isLoading) {
    //     return (<div className="articlePlaceHolder"></div>);
    // } else if (!currentArticle) {
    //     return null;
    // }

    return (<div
        className="fullArticleWrapper"
    >
        {(currentArticle && currentArticle.id > 1) && 
        <button
            onClick={() => handleClick(parseInt(currentArticle.id) - 1)}
            className="navBtn prevBtn"
                >Last
        </button>}
        {/* {isLoading && <div className="articlePlaceHolder"></div>} */}
        {currentArticle && <>
            <FullArticle 
                article={currentArticle} 
            />
            </>}
        {(currentArticle && currentArticle.id < allArticles.length) && 
            <button
                onClick={() => handleClick(parseInt(currentArticle.id) + 1)}
                className="navBtn nextBtn"
                    >Next
            </button>}
    </div>)
}