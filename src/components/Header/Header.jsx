import React from 'react';
import './Header.css';
import { useDispatch } from 'react-redux';
import { toggleLanguage } from '../../store/weatherReducer';
import { Search } from '../Search/Search';

export const Header = ({ language }) => {
  const dispatch = useDispatch();

  const toggleLang = () => {
    if (language === 'en') {
      dispatch(toggleLanguage('ru'));
    } else {
      dispatch(toggleLanguage('en'));
    }
  };

  return (
    <header className="header">
      <div className="header__container">
        <span className="header__logo">Weatherr</span>
        <div className="header__search">
          <Search language={language} />
        </div>
        <button
          type="button"
          className="header__toggle"
          aria-label="change language"
          onClick={toggleLang}
        >
          {language === 'en' ? 'ru' : 'en'}
        </button>
      </div>
    </header>
  );
};
