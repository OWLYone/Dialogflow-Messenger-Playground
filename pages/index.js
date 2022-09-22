import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState, Suspense } from 'react';

import BotContext from '../context/bot-context';

import styles from '../styles/Home.module.css';

import Card from '../components/Card';
import InactiveCard from '../components/InactiveCard';
import SuccessCard from '../components/SuccessCard';
import ConfigView from '../components/ConfigView';

export default function Home() {
  const { settings: ctx } = useContext(BotContext);
  const [showBot, setShowBot] = useState(false);

  useEffect(() => {
    if (ctx.ready) {
      setShowBot(true);
    } else {
      setShowBot(false);
    }
  }, [ctx]);

  const DynamicBotLoader = dynamic(() => import('../components/Chatbot'), {
    loading: () => <div>Loading...</div>,
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Twój pierwszy chatbot</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
      </Head>
      <main className={styles.main}>
        <Image
          src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/299015157_402993851820347_7072809108916066867_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E4wFbgXycZEAX9TsW6y&_nc_ht=scontent-waw1-1.xx&oh=00_AT-D6Gsql6G6xEYNG68B9u8deezGC5VW8fb8DIjQjzILuA&oe=63313B3E"
          alt="IT Gra Logo"
          width={300}
          height={300}
        />
        <h1 className={styles.title}>
          Mój pierwszy chatbot w <a href="https://itgra.pl/">ITGra!</a>
        </h1>

        <p className={styles.description}>
          Podstawy Sztucznej Inteligencji 2022
        </p>

        <div className={styles.grid}>
          <Card
            title="Krok 1: Konsola bota"
            dsc="Uruchom konsolę bota aby zdobyć jego kod."
            external="https://dialogflow.cloud.google.com"
          />
          <Card
            title="Krok 2: Kod Bota"
            dsc="Zaktualizuj kod dostępu do chatbota."
            url="code"
          />
          {/* //TODO: ZMIANY KOLORÓW */}
          {/* <Card
            title="Krok 3: Kolory"
            dsc="Zmień kolory chatbota (opcjonalne)"
            url="code"
          /> */}

          {showBot ? (
            <SuccessCard
              title="Gotowe!"
              dsc="Twój chatbot jest gotowy poniżej - wystarczy kliknąć 'Witaj'!"
            />
          ) : (
            <InactiveCard
              title="Bot jeszcze nie jest gotowy!"
              dsc="Dokończ konfigurację bota."
            />
          )}
        </div>
        <ConfigView />
      </main>
      <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1"></script>

      {showBot ? (
        <Suspense fallback={`Loading...`}>
          <DynamicBotLoader />
        </Suspense>
      ) : (
        ''
      )}
      <footer className={styles.footer}>
        <a href="https://itgra.pl/" target="_blank" rel="noopener noreferrer">
          Opracowano dla&nbsp;<b>ITGra 2022</b>&nbsp;by Ewelina & Marek. All
          Rights Reserved (2022)
        </a>
      </footer>
    </div>
  );
}
