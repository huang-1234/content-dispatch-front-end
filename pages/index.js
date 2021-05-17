
// import Image from 'next/image'
// import { Row,Col } from 'antd';
// import styles from '../styles/Home.module.css';
// import '../static/style/pages/index.css';
import Link  from 'next/link';
// import MainPage from '../components/MainPage/MainPage.js';



export default function Home() {
  return (
    <>Home
      <div id="button">
        <Link className="button-link" href="/articles">goto Article</Link>
      </div>
      <div id="button">
        <Link className="button-link" href="/articles/articlelist">goto articlelist</Link>
      </div>

    </>
  )
}
