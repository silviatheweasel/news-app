import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { selectCurrentArticle, loadCurrentArticle } from "./currentArticleSlice";
import { loadComments } from "../currentComments/currentCommentsSlice";
import { FullArticle } from "../../components/FullArticle";
import { selectAllArticles } from "../articlePreviews/articlePreviewsSlice";

export const CurrentArticle = () => {
    const currentArticle = useSelector(selectCurrentArticle);
    const allArticles = useSelector(selectAllArticles);

    // const isLoading = useSelector(selectIsArticleLoading);
    const dispatch = useDispatch();

    const { id } = useParams();
    useEffect(() => {
        dispatch(loadCurrentArticle(id));
        dispatch(loadComments(id));
    }, [id, dispatch]);

    // if (isLoading) {
    //     return (<div className="articlePlaceHolder"></div>);
    // } else if (!currentArticle) {
    //     return null;
    // }

    return (
        <div
            className="fullArticleWrapper"
            >
            {(currentArticle && currentArticle.id > 1) && 
                <Link
                    className="navBtn prevBtn"
                    to={`/articles/${parseInt(currentArticle.id) - 1}`}
                        >Last
                </Link>}
                {/* {isLoading && <div className="articlePlaceHolder"></div>} */}
                {currentArticle && 
                    <>
                        <FullArticle 
                            article={currentArticle} 
                        />
                    </>}
                {(currentArticle && currentArticle.id < allArticles.length) && 
                    <Link
                        className="navBtn nextBtn"
                        to={`/articles/${parseInt(currentArticle.id) + 1}`}
                            >Next
                    </Link>}
        </div>)
}