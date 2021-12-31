
import './App.css';
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";
import { ArticleAndComments } from '../containers/ArticleAndComments';

function App() {
  return (
    <main className="App">
      <ArticleAndComments />
      <ArticlePreviews />
    </main>
  );
}

export default App;
