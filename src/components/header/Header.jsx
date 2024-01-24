import Link from 'next/link'
import React from 'react'
import Theme from '../theme/Theme'

export default function Header() {
    return (
        <header id='header'>
            <div className='header__inner'>
                <h1 className="header__logo">
                    <Link href="/">codewaa</Link>
                </h1>
                <Theme />
            </div>
        </header>
    )
}
