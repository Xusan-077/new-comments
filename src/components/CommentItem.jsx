import { useNavigate } from "react-router-dom";
import { useAppContext } from "../hooks/useAppContext";

export default function CommentItem({ item, title, source, urlToImage }) {
  const { like, setLike } = useAppContext();
  const navigate = useNavigate();

  function handleAddtoLike() {
    const isLiked = like.some((el) => el.id === item.id);
    if (isLiked) {
      setLike(like.filter((el) => el.id !== item.id));
    } else {
      setLike([...like, item]);
    }
  }

  return (
    <li className="home__item">
      <div
        className="item__img-div"
        onClick={() => navigate(`/news/${item.id}`)}
      >
        {/* {urlToImage && (
          <img
            src={urlToImage}
            className="item__img"
            alt={title || "news image"}
          />
        )} */}
      </div>
      <div className="item__content">
        <div className="item__bottom">
          <span className="item__source-name">{source?.name}</span>
          <div className="item__like" onClick={handleAddtoLike}>
            <i
              className={`bi ${
                like.find((el) => el.id === item.id)
                  ? "bi-heart-fill active"
                  : "bi-heart"
              } text-[18px]`}
            ></i>
          </div>
        </div>
        <h2 className="item__title">
          <a className="item__text" href={item.url}>
            {title}
          </a>
        </h2>
      </div>
    </li>
  );
}
