import './App.css';
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";
import { CurrentArticle } from "../features/currentArticle/CurrentArticle";
import { CurrentComments } from "../features/currentComments/CurrentComments";

function App() {
  return (
    <div className="App">
      <div className="currenArticleWrapper">
        <CurrentArticle />
        <CurrentComments />
      </div>
      <h1>All Articles</h1>
      <ArticlePreviews />
    </div>
  );
}

export default App;
