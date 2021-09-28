import { NextPage } from 'next';
import React, { FC } from 'react'
import Articlestyles from '../styles/Articles.module.scss';
import ArticleItem from './ArticleItem';


interface Article {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  interface IProps {
    articles: Article[];
  }

const ArticleList: NextPage<IProps> = ({articles}) => {
    return (
        <div className={Articlestyles.grid}>
            {articles.map((article:any) => (
        <ArticleItem key={article.id} article={article} />
    ))}
        </div>
    )
}

export default ArticleList
