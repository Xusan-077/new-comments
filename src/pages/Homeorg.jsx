import { useTranslation } from "react-i18next";
import CommentItem from "../components/CommentItem";
import { Articles } from "../constants";
import { useAppContext } from "../hooks/useAppContext";

export default function HomeOrg() {
  const { t } = useTranslation();

  const { like } = useAppContext();

  console.log(like);

  return (
    <section className="home">
      <div className="container">
        <div className="home__inner">
          <h2 className="home__title">{t("main.titel")}</h2>

          <div className="home__content">
            <div className="home__right">
              <ul className="home__list">
                {Articles.map((el, index) => (
                  <CommentItem item={el} key={index} {...el} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
