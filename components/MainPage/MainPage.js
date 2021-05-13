import React, { useState } from 'react';
import Head from 'next/head'
import { Row, Col, List, Icon, Breadcrumb } from 'antd';

import Header from '../Header/Header.js';
import Author from '../Author/Author';
import Advert from '../Advert/Advert.js';
import Footer from '../Footer/Footer';

import ArticleDetail from '../Article/Article.js'

// mock data
import { articleList } from './article-detail.js'


function MainPage() {
  const [mylist, setMylist] = useState(articleList);
  return (
    <>
      <Head>
        <title>博客详细页</title>
      </Head>

      <Header />

      <div>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                  <Breadcrumb.Item>xxxx</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>


            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar" /> 2021-05-12</span>
                    <span><Icon type="folder" /> content</span>
                    <span><Icon type="fire" /> 10000人</span>
                  </div>
                  <div className="list-context">
                    {/* {item.context} */}
                    <ArticleDetail />
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

export default MainPage