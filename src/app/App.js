import { useSelector, useDispatch } from "react-redux";

import './App.css';
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";
import { CurrentArticle } from "../features/currentArticle/CurrentArticle";
import { CurrentComments } from "../features/currentComments/CurrentComments";

import { selectCurrentArticle, loadCurrentArticle } from "../features/currentArticle/currentArticleSlice";
import { selectAllArticles } from "../features/articlePreviews/articlePreviewsSlice";
import { loadComments } from "../features/currentComments/currentCommentsSlice";

function App() {
  const dispatch = useDispatch();
  const currentArticle = useSelector(selectCurrentArticle);
  const allArticles = useSelector(selectAllArticles);

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
    <div className="App">
      <div 
        className="currenArticleWrapper"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        >
        <CurrentArticle />
        <CurrentComments />
      </div>
      <h1>All Articles</h1>
      <ArticlePreviews />
    </div>
  );
}

export default App;
