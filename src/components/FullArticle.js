export const FullArticle = ({ article }) => {
    return (
    <div className="fullArticleInnerWrapper">
        <img
            src={article.image}
            alt=""
            className="fullArticleImg"
            style={{height: article.image ? "400px" : "0"}}
        ></img>
        <div className="fullArticleTextWrapper">
            <h2
                className="fullArticleTitle"
            >{article.title}
            </h2>
            <p
                className="fullArticleText"
            >{article.fullText}
            </p>
        </div>
    </div>)

}