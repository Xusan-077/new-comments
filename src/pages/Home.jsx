import axios from "axios";
import { useEffect, useState } from "react";
import CommentItem from "../components/CommentItem";

export default function Home() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const pageSize = 10;

  async function getComments(q = "now", time = "2025-10-14", page = 1) {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/everything?q=${q}&from=${time}&sortBy=publishedAt&pageSize=${pageSize}&page=${page}&language=fr&apiKey=6bca5b2d6e8b4eb8b7a4d9fc7332a61c`
      );

      setComments([...comments, ...res.data.articles]);

      setIsLoading(false);
    } catch (err) {
      console.log("Getda Xatolik", err);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getComments("now", "2025-10-14", page);
  }, [page]);

  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h2 className="home__title">So`ngi yangiliklar</h2>
          <div className="home__content">
            <div className="home__right">
              <ul className="home__list">
                {isLoading && comments.length === 0
                  ? Array.from({ length: 10 }).map((_, index) => (
                      <li key={index} className="home__item skeleton-item">
                        <div className="item__img-div">
                          <div className="skeleton skeleton-img"></div>
                        </div>
                        <div>
                          <h2 className="skeleton skeleton-title"></h2>
                          <div className="item__bottom">
                            <span className="skeleton skeleton-source"></span>
                            <span className="skeleton skeleton-date"></span>
                          </div>
                        </div>
                      </li>
                    ))
                  : comments.map((el, index) => (
                      <CommentItem key={index} {...el} />
                    ))}
              </ul>

              <button
                onClick={() => setPage(page + 1)}
                className="home__add"
                disabled={isLoading}
              >
                {isLoading ? "Yuklanmoqda..." : "Yana 10 ma'lumot"}
              </button>
            </div>
            <div className="home__left"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
