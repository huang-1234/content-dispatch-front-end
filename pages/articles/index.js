
import React, { useState ,useEffect } from 'react';
import Link from 'next/link';

import axios  from 'axios';

import { Row, Col, List, Icon, Breadcrumb } from 'antd';
import { CalendarOutlined, FolderOpenOutlined, FireOutlined} from '@ant-design/icons';

import Header from '../../components/Header/Header.js';
import Author from '../../components/Author/Author';
import Advert from '../../components/Advert/Advert.js';
import Footer from '../../components/Footer/Footer';
import ArticleList from '../../components/ArticleList/ArticleList.js'

import servicePath from '../../config/apiUrl'
// 这些都是解析Markdown必须的模块和CSS样式。
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';



export default function MainPage({ artListData }){
  // console.log(props);
  const { data } = artListData;
  // console.log('list of MainPage:', data);
  const [artiList, setArtiList] = useState(data);
  console.log(artiList);

  // 之后可以对marked进行setOptions设置，代码如下：
  const renderer = new marked.Renderer();
  marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    sanitize: false,
    xhtml: false,
    highlight: function (code) {
      return hljs.highlightAuto(code).value;
    }

  });

  return (
    <>
      <Header />

      <div>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                  <Breadcrumb.Item>文章详情</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            <ArticleList />

            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={artiList}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">
                    <Link href={{ pathname: '/articles/detailed', query: { id: item.id } }}>
                      <a>{item.title}</a>
                    </Link>
                  </div>
                  <div className="list-icon">
                    <span><Icon type={<CalendarOutlined />}/>{item.addTime}</span>
                    <span><Icon type={<FolderOpenOutlined />} /> {item.typeName}</span>
                    <span><Icon type={<FireOutlined />} /> {item.view_count}人</span>
                  </div>
                  <div className="list-context"
                    dangerouslySetInnerHTML={{ __html: marked(item.introduce) }}
                  >
                  </div>
                  <div className="list-context"
                    dangerouslySetInnerHTML={{ __html: marked(item.article_content) }}
                  >
                    {/* <ArticleDetail /> */}
                  </div>
                </List.Item>
              )}
            />
          </Col>

          <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
            <Author />
            <Advert />
          </Col>
        </Row>
        <Footer />
      </div>
    </>
  )
}

// data from server
export const getStaticProps = async () => {
  const artListUrl = servicePath.getArticleList;
  // const artListUrl = `http://127.0.0.1:7001/default/getArticleById/`

  const promise = new Promise((resolve) => {
    axios(artListUrl)
      .then((res) => {
        // console.log('远程获取数据结果:', res.data);
        // resolve(res.data.data);
        resolve(res.data);
      })
  });
  const artListData = await promise;
  
  return {
    props: {
      artListData
    }
  };
}