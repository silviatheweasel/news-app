import './App.css';
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";
import { CurrentArticle } from "../features/currentArticle/CurrentArticle";

function App() {
  return (
    <div className="App">
      <CurrentArticle />
      <h1>All Articles</h1>
      <ArticlePreviews />
      
    </div>
  );
}

export default App;
