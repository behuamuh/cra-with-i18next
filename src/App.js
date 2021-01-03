import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import { EN_LANG, RU_LANG } from './const';

const users = [
  'Yulia', 'German', 'Anna', 'Boris',
];

function App() {
  const { t, i18n } = useTranslation();
  const [userIndex, setUserIndex] = useState(0);
  const lang = i18n.language;

  useEffect(() => {
    const timer = setInterval(() => {
      setUserIndex(Math.floor(users.length * Math.random()));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  const handleLangChange = e => {
    const newLang = e.currentTarget.value;
    i18n.changeLanguage(newLang);
    // localStorage.setItem('LANG', newLang);
  }

  return (
    <div className="App">
      <header className="App-header">
        {t('welcome', { userName: users[userIndex] })}
        <label>
          <input 
            type="radio" 
            name="lang" 
            checked={lang === RU_LANG} 
            value={RU_LANG}
            onChange={handleLangChange}
          />
          Русский
        </label>
        <label>
          <input 
            type="radio" 
            name="lang" 
            checked={lang === EN_LANG} 
            value={EN_LANG} 
            onChange={handleLangChange}
          />
          English
        </label>
        {t('user', { count: userIndex })}
      </header>
    </div>
  );
}

export default App;
