import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { loadArticlePreviews, selectAllArticles, selectIsLoading } from "./articlePreviewsSlice"; 
import { ArticlePreviewCard } from '../../components/ArticlePreviewCard';
import { loadCurrentArticle } from '../currentArticle/currentArticleSlice';

export const ArticlePreviews = () => {
    const allArticles = useSelector(selectAllArticles);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => dispatch(loadArticlePreviews()), [dispatch]);

    const handleClick = (id) => {
        dispatch(loadCurrentArticle(id));
        window.scrollTo(0,0);
    }

    if (isLoading) return (<p className="loadingMsg">Loading...</p>);

    return (
    <div className="previewGalary">
        {allArticles.map((article, index) => (
            <ArticlePreviewCard 
                article={article}
                key={index}
                articleData={article}
                handleClick={() => handleClick(article.id)}
                />))}
        </div>)

}