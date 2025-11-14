export default function CommentItem({
  title,
  publishedAt,
  description,
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

// <li className="home__item">
//   <div className="home__item-top">
//     <span className="home__item-fullname">{user.fullName}</span>
//     <span className="home__item-username">{user.username}</span>
//   </div>
//   <div className="home__item-bottom">
//     <h1 className="home__item-title">{body}</h1>
//     <span className="home__item-likes">
//       <i className="home__item-like-icon bi bi-heart-fill"></i>
//       {likes}
//     </span>
//   </div>
// </li>
