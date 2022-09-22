import { useContext } from 'react';
import BotContext from '../context/bot-context';

import styles from '../styles/Home.module.css';

export default function Chatbot() {
  const { settings: ctx } = useContext(BotContext);
  const publicLogoUrl =
    'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/346/speech-balloon_1f4ac.png';
  //Source: https://emojipedia.org/speech-balloon/

  return (
    <div className={styles.bot}>
      <df-messenger
        intent={ctx.intent}
        chat-title={ctx.chatTitle}
        agent-id={ctx.agentId}
        language-code={ctx.lang}
        chat-icon={publicLogoUrl}
      ></df-messenger>
    </div>
  );
}
