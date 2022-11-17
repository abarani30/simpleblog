import "../styles/globals.scss"
import Head from 'next/head'
import Script from "next/script"
import { Provider } from "react-redux"
import { store } from "../store"

const App = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" 
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </ Provider>
  )
}

export default App
