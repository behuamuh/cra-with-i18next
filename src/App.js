import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import SwitchLang from './components/SwitchLang';

const users = [
  'Yulia', 'German', 'Anna', 'Boris',
];

function App() {
  const { t, i18n } = useTranslation();
  const [userIndex, setUserIndex] = useState(0);

  const lang = useMemo(() => ({ value: i18n.language }), [i18n.language]);

  // { value: i18n.language } === { value: i18n.language } 

  useEffect(() => {
    const timer = setInterval(() => {
      setUserIndex(Math.floor(users.length * Math.random()));
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  }, []);

  // const handleLangChange = useCallback(e => {
  //   const newLang = e.currentTarget.value;
  //   i18n.changeLanguage(newLang);
  // }, []);

  const handleLangChange = useMemo(() => e => {
    const newLang = e.currentTarget.value;
    i18n.changeLanguage(newLang);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {t('welcome', { userName: users[userIndex] })}
        <SwitchLang lang={lang} onChangeLang={handleLangChange} />
        {t('user', { count: userIndex })}
      </header>
    </div>
  );
}

export default App;
