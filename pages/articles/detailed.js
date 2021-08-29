import React from 'react';
import axios from 'axios';

import Head from 'next/head';
import { Row, Col, Affix, Icon, Breadcrumb } from 'antd';


import Header from '../../components/Header/Header';
import Author from '../../components/Author/Author';
import Advert from '../../components/Advert/Advert';
import Footer from '../../components/Footer/Footer';
import MarkNav from 'markdown-navbar';


import marked from 'marked'
import hljs from 'highlight.js';
// import 'highlight.js/styles/monokai-sublime.css';

import Tocify from '../../components/tocify.tsx';

import  servicePath  from '../../config/apiUrl'



const Detailed = (props) => {

  let articleContent = props.article_content

  const tocify = new Tocify()
  const renderer = new marked.Renderer();
  renderer.heading = function (text, level, raw) {
    const anchor = tocify.add(text, level);
    return `<a id="${anchor}" href="#${anchor}" class="anchor-fix"><h${level}>${text}</h${level}></a>\n`;
  };

  marked.setOptions({
    renderer: renderer,
    gfm: true, // 允许 Git Hub标准的markdown.
    pedantic: false, // 不纠正原始模型任何的不良行为和错误（默认为false）
    sanitize: false, // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    tables: true, // 允许支持表格语法（该选项要求 gfm 为true）
    breaks: false, // 允许回车换行（该选项要求 gfm 为true）
    smartLists: true, // 使用比原生markdown更时髦的列表
    smartypants: false, // 使用更为时髦的标点
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }
  });

  let html = marked(props.article_content);

  console.log(props);
  return (
    <>
      <Head>
        <title>文章详情</title>
      </Head>
      <Header />
      <Row className="comm-main" type="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
          <div>
            <div className="bread-div">
              <Breadcrumb>
                <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                <Breadcrumb.Item>{props.typeName}</Breadcrumb.Item>
                <Breadcrumb.Item> {props.title}</Breadcrumb.Item>
              </Breadcrumb>
            </div>

            <div>
              <div className="detailed-title">
                {props.title}
              </div>

              <div className="list-icon center">
                <span><Icon type="calendar" /> {props.addTime}</span>
                <span><Icon type="folder" /> {props.typeName}</span>
                <span><Icon type="fire" /> {props.view_count}</span>
              </div>

              <div className="detailed-content"
                dangerouslySetInnerHTML={{ __html: html }}   >
              </div>
            </div>
          </div>
        </Col>

        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          <Author />
          <Advert />
          <Affix offsetTop={5}>
            <div className="detailed-nav comm-box">
              <div className="nav-title">文章目录</div>
              <div className="toc-list">
                {tocify && tocify.render()}
              </div>

            </div>
          </Affix>

        </Col>
      </Row>
      <Footer />
    </>
  );
}

//service
Detailed.getInitialProps = async (context) => {

  // console.log(context.query.id);
  let id = context.query.id;
  const promise = new Promise((resolve) => {
    const getArt_byid_url = servicePath.getArticleById
    // const getArt_byid_url = `http://127.0.0.1:7001/default/getArticleList`
    axios(getArt_byid_url + id).then(
      (res) => {
        console.log('articles/detailed/page')
        const data_one = res.data.data[0];
        console.log(data_one.title);
        // console.log(data_one);
        resolve(res.data.data[0]);
      }
    )
  })

  return await promise
}


export default Detailed;
