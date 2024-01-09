import t from '../../locales';

const FaqPage = () => {
  return <div><ul className="faq-item-list">
    <li>
      <h3 className="faq-title">{t("51")}</h3>
      <p className="faq-answer">{t("52")}</p>
    </li>
    <li>
      <h3 className="faq-title">{t("53")}</h3>
      <p className="faq-answer">{t("54")}</p>
    </li>
    <li>
      <h3 className="faq-title">{t("55")}</h3>
      <p className="faq-answer">{t("56")} <a href="tg://resolve?domain=Exmobit_support">Telegram</a></p>
    </li>
    <li>
      <h3 className="faq-title">{t("57")}</h3>
      <p className="faq-answer">{t("58")}</p>
    </li>
    <li>
      <h3 className="faq-title">{t("59")}</h3>
      <p className="faq-answer">{t("60")} <a href="tg://resolve?domain=Exmobit_support">Telegram</a>.</p>
    </li>
    <li>
      <h3 className="faq-title">{t("61")}</h3>
      <p className="faq-answer">{t("62")} <a href="tg://resolve?domain=Exmobit_support">Telegram</a>.</p>
    </li>
    <li>
      <h3 className="faq-title">{t("63")}</h3>
      <p className="faq-answer">{t("64")} <a href="https://www.bestchange.ru/Exmobit-exchanger.html" target="blank">bestchange</a>, {t("65")} <a href="https://www.trustpilot.com/review/Exmobit.com" target="blank">Trustpilot</a> {t("66")} <a href="https://www.mywot.com/scorecard/Exmobit.com" target="blank">MyWot</a>. {t("67")} 
      {t("68")}</p>
    </li>
  </ul></div>;
};

export default FaqPage;
