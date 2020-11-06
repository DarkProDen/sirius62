import React from "react";
import "./CompetitionThemes.css";
import "./CompetitionThemesMobile.css";
import aptLogo from "../../img/APT-logo.png";
import bigDataLogo from "../../img/big-data-logo.png";

function CompetitionThemes() {
  return (
    <div className="competition-themes">
      <h2>Направления конкурса</h2>
      <div className="competition-themes__wrapper">
        <div className="competition-theme">
          <img className="competition-theme__icon" src={aptLogo} />
          <div className="competition-theme__name">
            Агропромышленные и биотехнологии
          </div>
          <div className="competition-theme__description">
            Создание новых агротехнологий производства полноценной
            сельскохозяйственной продукции растительного и животного
            происхождения. <br />
            Разработка новых биотехнологий ее хранения, переработки, получения
            высококачественных пищевых продуктов, а также мониторинга их
            экологической и генетической безопасности.
          </div>
          <a
            className="button"
            href="https://sochisirius.ru/obuchenie/project/smena617/2993"
            target="blank"
          >
            Подробнее о направлении
          </a>
        </div>
        <div className="competition-theme">
          <img className="competition-theme__icon" src={bigDataLogo} />
          <div className="competition-theme__name">
            Большие данные, искусственный интелект, финансовые технологии и
            машинное обучение
          </div>
          <div className="competition-theme__description">
            Данное направление посвящено работе с большими объемами данных
            (включая вопросы кибербезопасности) в разных проявлениях.
          </div>
          <a
            className="button"
            href="https://sochisirius.ru/obuchenie/project/smena624/3018"
            target="blank"
          >
            Подробнее о направлении
          </a>
        </div>
      </div>
    </div>
  );
}

export default CompetitionThemes;
