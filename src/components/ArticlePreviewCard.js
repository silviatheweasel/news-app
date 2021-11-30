export const ArticlePreviewCard = ({ article }) => {
    return (
    <button 
        className="articleCard"
        >
        <img
            src={article.image}
            alt=""
            className="articlePreviewImg"
        ></img>
        <div
            className="previewContentWrapper"        
        >
            <h2
                className="previewTitle"
                >{article.title}</h2>
            <p
                className="previewCopy"
                >{article.preview}</p>
        </div>

    </button>)
}

