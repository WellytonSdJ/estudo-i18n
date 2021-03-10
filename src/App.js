import './App.css';
import React, { useState } from 'react'
import { i18n } from './translate/i18n'
// import { useTranslation } from 'react-i18next/*';

const i18N_STORAGE_KEY = 'i18nextLng'


function App() {
  // <!-- método 1 -->
  const [language] = useState(localStorage.getItem(i18N_STORAGE_KEY))
 
  const handleSelectChange = event => {
    localStorage.setItem(i18N_STORAGE_KEY, event.target.value)
    window.location = window.location
  }
  // <!-- método 1 -->
  // <!-- método 2 -->
  // const {t, i18n} = useTranslation()
  // const changeLanguage = (language) => {
  //   console.log('foi')
  //   // i18n.changeLanguage(language)
  // }
  // <!-- método 2 -->

  return (

    <>
    <center>

    {/* <button onClick={() => changeLanguage('pt-BR')}>BR</button>
    <button onClick={() => changeLanguage('en-US')}>EN</button> */}

    <select onChange={handleSelectChange} value={language}>
      <option>Selecione um Idioma</option>
      <option value="pt-BR">PT</option>
      <option value="en-US">EN</option>
    </select>
    <hr/>

    <h1>{i18n.t('titles.app')}</h1>

    <p>{i18n.t('messages.app')}</p>
    <small>{i18n.t('messages.smallText')}</small>
    <br/>

    <button>{i18n.t('buttons.save')}</button>
    </center>
    </>
  );
}

export default App;
