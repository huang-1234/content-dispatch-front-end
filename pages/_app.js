import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../static/style/components/header.css'
import '../static/style/pages/comm.css';
import '../components/MainPage/mainpage.css';
import '../components/Advert/advert.css';
import '../components/Footer/footer.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
