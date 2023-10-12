import { useTranslation } from 'react-i18next';

const FeaturesPage = () => {
  const { t } = useTranslation();
  return <div className="text-4xl">{t('morePages.featuresPageContent')}</div>;
};

export default FeaturesPage;
