import './ExplainerModal.css'
import usaFlag from '../assets/usaFlag.svg'
import brasilFlag from '../assets/brasilFlag.svg'
import { useState } from 'react'
import { texts } from '../assets/ExplainTexts'

interface Texts {
  [key: string]: string;
}

const ExplainerModal = ({ setExplainerModal }: { setExplainerModal: Function }) => {
  const [language, setLanguage] = useState('en')

  return (
    <div
      id='explainer-modal'
      className='explainer-modal'
    >
      <div
        id='explainer-content'
        className='explainer-content'
      >
        <div
          className='flag-container'
        >
          <label
            onClick={() => {
              setLanguage('en')
            }}
          >
            <img
              src={usaFlag}
              alt='USA flag'
              className={`flag ${language === 'en' ? 'selected' : ''}`}
            />
          </label>
          <label
            onClick={() => {
              setLanguage('pt')
            }}
          >
            <img
              src={brasilFlag}
              alt='Brasil flag'
              className={`flag ${language === 'pt' ? 'selected' : ''}`}
            />
          </label>
        </div>
        <h1>Rubber Duck Debugger</h1>
        <p>
          {(texts as Texts)[language]}
        </p>
        <button
          onClick={() => setExplainerModal(false)}
        >
          {language === 'en' ? 'Understood' : 'Entendido'}
        </button>
      </div>
    </div>
  );
};

export default ExplainerModal;
