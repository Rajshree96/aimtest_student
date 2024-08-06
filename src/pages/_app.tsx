import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Toaster } from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'rsuite/dist/rsuite.min.css';
import Layout from './layout';
import { wrapper, persistor } from '../redux/store';
import '../../styles/core.css';
import '../../styles/globals.css';
import '../components/Login/Login.css';
import '../components/Layout/Header/Header.css';
import 'animate.css';
import 'react-quill/dist/quill.snow.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const router1 = useRouter();
  const pathToBlock = [
    '/',
    '/forgot/password',
    '/forgot/reset-message',
    '/resetpassword',
    '/_error',
    '/login',
    '/user/set-password',
  ];
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && pathToBlock.includes(router.route) ? (
        <>
          <Toaster position="top-right" />
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} key={router1.asPath} />
          </PersistGate>
        </>
      ) : (
        <>
          <Toaster position="top-right" />
          <PersistGate loading={null} persistor={persistor}>
            <Layout>
              <Component {...pageProps} key={router1.asPath} />
            </Layout>
          </PersistGate>
        </>
      )}
    </>
  );
}

export default wrapper.withRedux(MyApp);
