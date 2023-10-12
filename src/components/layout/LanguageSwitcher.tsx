import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const {
    i18n: { changeLanguage, language },
  } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(language);

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'tr' : 'en';
    setCurrentLanguage(newLanguage);
    changeLanguage(newLanguage);
  };
  return (
    <>
      {currentLanguage === 'en' ? (
        <button
          type="button"
          onClick={handleChangeLanguage}
          className="border-2 ml-2 px-4 rounded-md flex justify-between items-center gap-2"
        >
          <img
            className="h-3 w-auto object-contain"
            src="/images/brits.jpeg"
            alt="rexven-logo"
            width={500}
            height={500}
          />
          <span>ENG</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={handleChangeLanguage}
          className="border-2 ml-2 px-4 rounded-md flex justify-between items-center gap-2"
        >
          <img
            className="h-3 w-auto object-contain"
            src="/images/tr.png"
            alt="rexven-logo"
            width={500}
            height={500}
          />
          <span>TR</span>
        </button>
      )}
    </>
  );
};

export default LanguageSwitcher;
