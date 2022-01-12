import { Link } from "react-router-dom";

export const ArticlePreviewCard = ({ article, handleClick }) => {
    return (
        <Link 
            to={`${article.id}`}
            className="articleCard"
            onClick={handleClick}
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
        </Link>)
}

