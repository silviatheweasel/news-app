import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import { useEffect } from "react";

import { CurrentArticle } from "../features/currentArticle/CurrentArticle";
import { CurrentComments } from "../features/currentComments/CurrentComments";

import { selectAllArticles } from "../features/articlePreviews/articlePreviewsSlice";
import { selectCurrentArticle, loadCurrentArticle } from "../features/currentArticle/currentArticleSlice";
import { loadComments, loadReactions, selectCurrentReactions } from "../features/currentComments/currentCommentsSlice";


export const ArticleAndComments = () => {
    const dispatch = useDispatch();
    const currentArticle = useSelector(selectCurrentArticle);
    const allArticles = useSelector(selectAllArticles);
  
    const { id } = useParams();
    useEffect(() => {
        dispatch(loadCurrentArticle(id));
        dispatch(loadComments(id));
        dispatch(loadReactions(id));
    }, [id, dispatch]);

    let touchStartX = 0;
    let touchEndX = 0;
  
    const handleTouchStart = (event) => {
      touchStartX = event.changedTouches[0].clientX;
      return touchStartX;
    }
  
    const handleTouchEnd = (event) => {
      touchEndX = event.changedTouches[0].clientX;
      const articleId = parseInt(currentArticle.id);
      const totalArticleNum = allArticles.length;
  
      if (touchEndX > touchStartX) {
        let idToDisplay = (articleId - 1) % totalArticleNum === 0 ? totalArticleNum : (articleId + 1) % totalArticleNum;
        dispatch(loadCurrentArticle(idToDisplay));
        dispatch(loadComments(idToDisplay));
      } else if (touchEndX < touchStartX) {
        let idToDisplay = (articleId + 1) % totalArticleNum === 0 ? 1 : (articleId + 1) % totalArticleNum;
        dispatch(loadCurrentArticle(idToDisplay));
        dispatch(loadComments(idToDisplay));
      }
    }

    return (
        <article 
                className="currenArticleWrapper"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
            <CurrentArticle />
            <CurrentComments />
        </article>
    )
}