import Modal from 'react-modal';

import styles from '../styles/Home.module.css';

Modal.setAppElement('#__next');

export default function ModalComponent({ status, change, close }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <Modal
      isOpen={status}
      onRequestClose={change}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1>Jak zdobyć kod chatbota?</h1>

      <div>
        <span className={styles.modalkrok}>Krok 1:</span> Otwórz konsolę swojego
        chatbota
      </div>
      <div>
        <span className={styles.modalkrok}>Krok 2:</span> Z menu po lewej
        stronie wybierz Integrations / Integracje
      </div>
      <div>
        <span className={styles.modalkrok}>Krok 3:</span> Znajdź pomarańczową
        ikonkę z podpisem "Web Demo" i kliknij
      </div>
      <div>
        <span className={styles.modalkrok}>Krok 4:</span> Znajdź adres https do
        bota
      </div>
      <div>
        Powinien wyglądać jak https://bot.dialogflow.com/
        <span className={styles.codeerror}>
          xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        </span>
      </div>

      <div style={{ 'margin-top': '10px' }}>
        Twój kod to właśnie cały zaznaczony na{' '}
        <span className={styles.codeerror}>fioletowo</span> tekst
      </div>

      <button onClick={close} className={styles.button}>
        Zamknij
      </button>
    </Modal>
  );
}
