import { useSelector } from "react-redux";

import { selectCurrentArticle, selectIsArticleLoading } from "./currentArticleSlice";
import { FullArticle } from "../../components/FullArticle";

export const CurrentArticle = () => {
    const currentArticle = useSelector(selectCurrentArticle);
    const isLoading = useSelector(selectIsArticleLoading);

    if (isLoading) {
        return (<div className="articlePlaceHolder"></div>);
    } else if (!currentArticle) {
        return null;
    }

    if (currentArticle) {
        return (
            <div
                className="fullArticleWrapper"
            >
                <FullArticle article={currentArticle} />
            </div>)
    }
}