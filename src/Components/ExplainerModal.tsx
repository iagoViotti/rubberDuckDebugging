import './ExplainerModal.css'

const ExplainerModal = ({ setExplainerModal }: { setExplainerModal: Function }) => {
  return (
    <div
      id='explainer-modal'
      className='explainer-modal'
    >
      <div
        id='explainer-content'
        className='explainer-content'
      >
        <h1>Rubber Duck Debugger</h1>
        <p>
          In software engineering, rubber duck debugging (or rubberducking) is a method of debugging code by articulating a problem in spoken or written natural language. The name is a reference to a story in the book The Pragmatic Programmer in which a programmer would carry around a rubber duck and debug their code by forcing themselves to explain it, line by line, to the duck.
        </p>
        <button
          onClick={() => setExplainerModal(false)}
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default ExplainerModal;
