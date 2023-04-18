import { appWithTranslation } from 'next-i18next';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <main class="global_container">
      <Component {...pageProps} />
    </main>
  )
}

export default appWithTranslation(MyApp);