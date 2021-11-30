import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";

import { loadArticlePreviews, selectAllArticles, selectIsLoading } from "./articlePreviewsSlice"; 
import { ArticlePreviewCard } from '../../components/ArticlePreviewCard';

export const ArticlePreviews = () => {
    const allArticles = useSelector(selectAllArticles);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => dispatch(loadArticlePreviews()), [dispatch]);

    if (isLoading) return (<p className="loadingMsg">Loading...</p>);

    return (
    <div className="previewGalary">
        {allArticles.map((article, index) => (
            <ArticlePreviewCard 
                article={article}
                key={index}
                articleData={article}
                />))}
        </div>)

}