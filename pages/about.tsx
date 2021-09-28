import React from 'react'
import Header from '../component/header';
import Meta from '../component/Meta'
import styledAbout from '../styles/About.module.scss';


const about = () => {
    return (
        <div>
            <Meta title="About Page" description="description" keyword="keyword"/>
            <Header/>
            <h1 className={styledAbout.title}>this is about page</h1>
        </div>
    )
}

export default about
