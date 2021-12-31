import { 
  BrowserRouter as Router, 
  Route, 
  Routes,
  Navigate 
} from "react-router-dom";

import './App.css';
import { ArticlePreviews } from "../features/articlePreviews/ArticlePreviews";
import { ArticleAndComments } from '../containers/ArticleAndComments';

function App() {
  return (
    <Router>
      <main className="App">
      <Routes>
        <Route path="/" element = {<Navigate replace to ="/articles" />}/>
        <Route path="/articles" element ={<ArticlePreviews />}>
          <Route path=":id" element={<ArticleAndComments/>} />
        </Route>
      </Routes>
      </main>
    </Router>
  );
}

export default App;
