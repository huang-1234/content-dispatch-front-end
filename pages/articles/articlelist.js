import React from 'react';
import axios from 'axios';
import servicePath from '../../config/apiUrl';

import GetArticleList from '../../components/ArticleList/index';

const articlelist = ({list}) => {
  return (
    <div>articleList
      <GetArticleList list={list}/>
    </div>
  );
}

export default articlelist;

export const getServerSideProps = async (context) => {

  let id = context.query.id
  const promise = new Promise((resolve) => {
    axios(servicePath.getListById + id).then(
      (res) => resolve(res.data)
    )
  })
  const list = await promise;
  const out1 = list[0].articleId;
  const out2 = list[0].title;
  console.log('pages/articlelist---:id and title',out1,out2);
  return { props: { list } }
}
