import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import React, { } from 'react';
import { Affix } from 'antd';
// import 'markdown-navbar/dist/navbar.css';

// import { mdfile} from './firstmd.js'
// import { secondmd as mdfile } from './second.js';
import { thirdmd as mdfile } from './static/thirdmd.js';


const ArticleDetail = () => {
  // const {mdfile} = require('./firstmd.js');
  // console.log(mdfile);
  return (
    <div className="detailed-content" >
      <Affix
        offsetTop={5} id="affix"
      >
        <div className="detailed-nav comm-box">
          <div className="nav-title">文章目录</div>
          <MarkNav
            className="article-menu"
            source={mdfile}

            ordered={false}
          />
        </div>
      </Affix>
      <style jsx>
        {`
          #affix{
            position:'absolute',
            width: 'fit-content',
            left:'2rem';
            height:'10rem';
          }
      `}
      </style>
      <ReactMarkdown
        source={mdfile}
        escapeHtml={false}
      >
        {mdfile}
      </ReactMarkdown>
    </div>
  )
}


export default ArticleDetail;