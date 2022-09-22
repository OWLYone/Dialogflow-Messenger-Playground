import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { useContext, useState } from 'react';
import BotContext from '../context/bot-context';

import styles from '../styles/Home.module.css';

import ModalComponent from '../components/ModalComponent';

export default function Code() {
  const { settings: ctx, addCode } = useContext(BotContext);
  const [isError, setIsError] = useState(null);
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleModal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closeModalEnforce = () => {
    setIsOpen(false);
  };

  const handleCodeChange = (e) => {
    let newCode = e.target.value.trim();

    if (newCode.length > 30 && newCode.length < 40) {
      addCode(newCode);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kod dostępu do chatbota</title>
        <meta name="viewport" content="width-device-width, initial-scale=1" />
      </Head>
      <ModalComponent
        status={modalIsOpen}
        change={setIsOpen}
        close={closeModalEnforce}
      />
      <main className={styles.main}>
        <Image
          src="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/299015157_402993851820347_7072809108916066867_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=E4wFbgXycZEAX9TsW6y&_nc_ht=scontent-waw1-1.xx&oh=00_AT-D6Gsql6G6xEYNG68B9u8deezGC5VW8fb8DIjQjzILuA&oe=63313B3E"
          alt="IT Gra Logo"
          width={300}
          height={300}
        />
        <h1 className={styles.title}>Krok 2: Dodaj kod chatbota</h1>

        <p className={styles.description}>
          Obecny kod to:{' '}
          {isError ? (
            <span className={styles.texterror}> Skopiuj poprawny kod</span>
          ) : (
            ctx.agentId
          )}
        </p>

        <input
          type="text"
          id="agentId"
          name="agentId"
          onChange={handleCodeChange}
          className={styles.inputbox}
          placeholder="Podaj kod chatbota"
        ></input>

        <p className={styles.comment}>
          Poprawny kod powinien wyglądać tak:
          xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
        </p>

        <section>
          <button onClick={handleModal} className={styles.button}>
            Jak zdobyć kod?
          </button>
        </section>

        <section className={styles.return}>
          <Link href="/">{isError ? 'POWRÓT' : 'ZAPISZ I WRÓĆ'}</Link>
        </section>
      </main>
      <footer className={styles.footer}>
        <a href="https://itgra.pl/" target="_blank" rel="noopener noreferrer">
          Opracowano dla&nbsp;<b>ITGra 2022</b>&nbsp;by Ewelina & Marek. All
          Rights Reserved (2022)
        </a>
      </footer>
    </div>
  );
}
