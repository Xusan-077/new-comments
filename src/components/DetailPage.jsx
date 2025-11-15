import { useParams } from "react-router-dom";
import { Articles } from "../constants";
import CommentItem from "./CommentItem";
import { useAppContext } from "../hooks/useAppContext";

export default function DetailPage() {
  const params = useParams();

  const { like, setLike } = useAppContext();

  const find = Articles.find((el) => el.id == params.newsId);

  const news = Articles.filter((el) => el.id !== find.id);

  function handleAddtoLike() {
    const isLiked = like.some((el) => el.id === find.id);
    if (isLiked) {
      setLike(like.filter((el) => el.id !== find.id));
    } else {
      setLike([...like, find]);
    }
  }

  console.log(find);
  return (
    <section className="detail">
      <div className="container">
        <div className="detail__inner">
          <div className="detail__right">
            <h2 className="detail__title">{find.title}</h2>
            <div className="detail__top">
              <span className="detail__source">{find.source.name}</span>
              <div className="detail__like" onClick={handleAddtoLike}>
                <i
                  className={`bi ${
                    like.find((el) => el.id === find.id)
                      ? "bi-heart-fill active"
                      : "bi-heart"
                  } text-[18px]`}
                ></i>
              </div>
            </div>

            <div className="detail__img"></div>

            <p className="detail__description">{find.description}</p>
          </div>
          <div className="detail__left">
            <ul className="detail__list">
              {news.map((el, index) => (
                <CommentItem item={el} key={index} {...el} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
