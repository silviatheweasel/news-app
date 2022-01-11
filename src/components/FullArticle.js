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
            <div
                className="fullArticleText" 
                dangerouslySetInnerHTML={{__html: article.fullText}} 
                />
        </div>
    </div>)

}