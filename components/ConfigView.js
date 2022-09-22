import styles from '../styles/Home.module.css';

import { useContext, useState, useEffect } from 'react';
import BotContext from '../context/bot-context';

const ConfigView = () => {
  const { settings: ctx, addCode } = useContext(BotContext);
  const [isCodeEmpty, setIsCodeEmpty] = useState(true);

  useEffect(() => {
    if (ctx.agentId.length > 30 && ctx.agentId.length < 40) {
      setIsCodeEmpty(false);
    }
  }, [ctx]);

  return (
    <div className={styles.settingsView}>
      <div className={styles.string}>Obecna konfiguracja chatbota:</div>
      <div className={styles.comment}>
        Pierwsza intencja: <span className={styles.keyword}>{ctx.intent}</span>{' '}
        //Zmiana wyłącznie w kodzie
      </div>
      <div className={styles.comment}>
        Obsługiwany język:{' '}
        <span className={styles.keyword}>{ctx.lang.toUpperCase()}</span>{' '}
        //Zmiana wyłącznie w kodzie
      </div>
      <div className={styles.comment}>
        Kod chatbota: <span className={styles.keyword}>{ctx.agentId}</span>{' '}
        {isCodeEmpty ? (
          <span className={styles.codeerror}>
            // MUSISZ ZMIENIĆ KOD ZANIM URUCHOMISZ BOTA
          </span>
        ) : (
          '//NOWY KOD'
        )}
      </div>
      <div className={styles.comment}>
        Elementy wizualne zmienione?{' '}
        <span className={styles.keyword}>
          {ctx.visualsChanged ? 'TAK' : 'NIE'}
        </span>
      </div>

      <div className={styles.comment}>
        Bot gotowy?{' '}
        <span className={styles.keyword}>{ctx.ready ? 'TAK' : 'NIE'}</span>
      </div>
    </div>
  );
};

export default ConfigView;
