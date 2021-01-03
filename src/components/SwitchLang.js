import React from 'react';

import { EN_LANG, RU_LANG } from '../const';

const SwitchLang = ({ lang: { value }, onChangeLang }) => {
  console.log('Render');

  return (
    <div>
      <label>
        <input
          type="radio"
          name="lang"
          checked={value === RU_LANG}
          value={RU_LANG}
          onChange={onChangeLang}
        />
          Русский
        </label>
      <label>
        <input
          type="radio"
          name="lang"
          checked={value === EN_LANG}
          value={EN_LANG}
          onChange={onChangeLang}
        />
          English
        </label>
    </div>
  );
};

// const areEqual = (prev, next) => prev.lang === next.lang;

export default React.memo(SwitchLang);
