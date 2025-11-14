export default function CommentItem({
  title,
  publishedAt,
  source,
  urlToImage,
}) {
  return (
    <li className="home__item">
      <div className="item__img-div">
        {urlToImage && <img src={urlToImage} className="item__img" alt="" />}
      </div>
      <div className="">
        <h2 className="item__title">{title}</h2>
        <div className="item__bottom">
          <span className="item__source-name">{source.name}</span>
          <span className="item__date">
            {new Date(publishedAt).toISOString().substr(11, 5)}
          </span>
        </div>
      </div>
    </li>
  );
}
