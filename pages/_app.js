import '../styles/globals.css';
import { BotProvider } from '../context/bot-context';

function MyApp({ Component, pageProps }) {
  return (
    <BotProvider>
      <Component {...pageProps} />
    </BotProvider>
  );
}

export default MyApp;
