import React from 'react';
import './CompetitionThemes.css';
import './CompetitionThemesMobile.css';
import aptLogo from '../../img/APT-logo.png';
import bigDataLogo from '../../img/big-data-logo.png';
import Button from '../Button/Button';

function CompetitionThemes() {
  return (
    <div className="competition-themes">
      <h2>Направления конкурса</h2>
      <div className="competition-themes__wrapper">
        <div className="competition-theme">
          <img
            className="competition-theme__icon"
            src={aptLogo}
            alt="Агропромышленные и биотехнологии"
          />
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
          <Button href="https://sochisirius.ru/obuchenie/project/smena617/2993">
            Подробнее о направлении
          </Button>
        </div>
        <div className="competition-theme">
          <img
            className="competition-theme__icon"
            src={bigDataLogo}
            alt="Большие данные, искусственный интеллект, финансовые технологии и машинное обучение"
          />
          <div className="competition-theme__name">
            Большие данные, искусственный интеллект, финансовые технологии и
            машинное обучение
          </div>
          <div className="competition-theme__description">
            Данное направление посвящено работе с большими объемами данных
            (включая вопросы кибербезопасности) в разных проявлениях.
          </div>
          <Button href="https://sochisirius.ru/obuchenie/project/smena624/3018">
            Подробнее о направлении
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CompetitionThemes;
