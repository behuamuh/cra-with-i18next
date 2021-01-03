import { useTranslation } from 'react-i18next';
import './App.css';

function App() {
  const { t } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        {t('welcome')}
      </header>
    </div>
  );
}

export default App;
