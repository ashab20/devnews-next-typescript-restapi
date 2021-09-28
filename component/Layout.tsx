import React, { FC } from "react";
import styles from "../styles/Layout.module.scss";
import Nav from "./Nav";
import Header from './header';

const Layout: FC = ({ children }) => {
    return (<>
        <Nav/>
        <div className={styles.container}>
        <Header />
            <main className={styles.main}>
            
                {children}
                </main>
            <footer className={styles.footer}>
                <p>Copyright &copy;2021 Ashab &trade;</p>
            </footer>
        </div>
    </> 
    );
};

export default Layout;
