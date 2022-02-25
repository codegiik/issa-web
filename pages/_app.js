import DefaultLayout from 'layouts/Default'
import Head from 'next/head'
import 'styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Reteissa - Museo Interattivo</title>
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  )
}
