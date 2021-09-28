import ArtileStyed from '../styles/Articles.module.scss';
import Link from 'next/link';
import { NextPage } from 'next';




interface article {
    userId: number;
    id: number;
    title: string;
    body: string;
}



const ArticleItem:NextPage<any> = ({article} : any) => {
    return (
        <Link href='/article/[id}' as={`/article/${article.id}`}>
            <a className={ArtileStyed.card}>
            <h3 className={ArtileStyed.title}>{article.title}</h3> <br />
            <p>{article.body}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
