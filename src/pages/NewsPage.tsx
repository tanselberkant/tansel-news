import { useTranslation } from 'react-i18next';

const NewsPage = () => {
  const { t } = useTranslation();
  return <div className="text-4xl">{t('morePages.newsPageContent')}</div>;
};

export default NewsPage;
