import React from 'react'
import Logo from '../../ui/logo/logo'
import Link from 'next/link'
import classes from './header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <Link href="/">
                <a >
                    <Logo />
                </a>
            </Link>
            <nav>
                <ul>

                    <Link href="/posts">Posts</Link>
                    <Link href="/contact">Contact</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header
