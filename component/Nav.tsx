/* eslint-disable @next/next/link-passhref */

import styled from '../styles/Nav.module.scss';
import Link from 'next/link'
import Image from 'next/image';
import Logo from '../public/logo.png';

const Nav = () => {
    return (
        <nav className={styled.nav}>
            <Link href="#" > 
                <Image className={styled.logo} src={Logo} alt="logo" width="100px" height="50px"/> 
            </Link>
            <ul>
                <li>
                    <Link href="/">Home</Link>                    
                </li>
                <li>
                <Link href="/about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
