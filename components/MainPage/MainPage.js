/* 

import React, { useState } from 'react';
import { Row, Col, List, Icon, Breadcrumb } from 'antd';

import Header from '../Header/Header.js';
import Author from '../Author/Author';
import Advert from '../Advert/Advert.js';
import Footer from '../Footer/Footer';

import ArticleList from '../ArticleList/ArticleList.js'

const MainPage = (props) => {
  console.log(props);
  const { data } = props.artListData;
  console.log('list of MainPage:', data);
  const [mylist, setMylist] = useState(data);
  return (
    <>
      <Header />

      <div>
        <Row className="comm-main" type="flex" justify="center">
          <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
            <div>
              <div className="bread-div">
                <Breadcrumb>
                  <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                  <Breadcrumb.Item>文章列表</Breadcrumb.Item>
                  <Breadcrumb.Item>文章详情</Breadcrumb.Item>
                </Breadcrumb>
              </div>
            </div>
            <ArticleList />

            <List
              header={<div>最新日志</div>}
              itemLayout="vertical"
              dataSource={mylist}
              renderItem={item => (
                <List.Item>
                  <div className="list-title">{item.title}</div>
                  <div className="list-icon">
                    <span><Icon type="calendar" />{item.addTime}</span>
                    <span><Icon type="folder" /> {item.typeName}</span>
                    <span><Icon type="fire" /> {item.view_count}人</span>
                  </div>
                  <div className="list-context">{item.introduce}</div>
                  <div className="list-context">
                    {item.article_content}
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

 */