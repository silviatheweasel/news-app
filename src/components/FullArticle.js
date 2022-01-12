import { getTimeDiff } from "../utilities/getTimeDiff"

export const FullArticle = ({ article }) => {
    return (
    <div className="fullArticleInnerWrapper">
        <img
            src={article.image}
            alt=""
            className="fullArticleImg"
            style={{
                height: article.image ? "400px" : "0"
            }}
        ></img>
        <div className="fullArticleTextWrapper">
            <h1
                className="fullArticleTitle"
            >{article.title}
            </h1>
            <div className="articleInfo">
                <p>
                    <i className="far fa-clock clockIcon"></i>
                    {getTimeDiff(article.time * 1000)}
                </p>
                {article.author && 
                    <p>By {article.author}</p>}
            </div>
            <div
                className="fullArticleText" 
                dangerouslySetInnerHTML={{__html: article.fullText}} 
                />
        </div>
    </div>)

}