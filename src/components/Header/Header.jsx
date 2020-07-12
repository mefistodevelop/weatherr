import React from 'react';
import './Header.css';

export const Header = ({ language, toggleLang }) => {
  const toggleLanguage = () => {
    if (language === 'en') {
      toggleLang('ru');
    } else {
      toggleLang('en');
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <span className="header__logo">Weatherr</span>
        <button
          type="button"
          className="header__toggle"
          aria-label="change language"
          onClick={toggleLanguage}
        >
          {language === 'en' ? 'ru' : 'en'}
        </button>
      </div>
    </header>
  );
};
