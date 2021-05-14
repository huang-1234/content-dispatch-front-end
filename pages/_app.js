import '../styles/globals.css'
import 'antd/dist/antd.css';
import '../static/style/components/header.css'
import '../static/style/pages/comm.css';
import '../static/style/pages/articles/mainpage.css';

import '../components/Advert/advert.css';
import '../components/Footer/footer.css';


//引入marked和highlight.js的样式
import '../static/style/pages/articles/detailed.css';
import 'highlight.js/styles/monokai-sublime.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
