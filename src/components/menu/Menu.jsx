"use client"

import React from 'react'
import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'

export default function Menu() {
    // const status = "unauthenticated"
    // const name = "webs"

    const { data: session, status } = useSession();

    return (
        <ul>
            {status === "authenticated" ? (
                <>
                    <li><span>{session.user.name}님 방가워요!!!</span></li>
                    <li><span onClick={signOut}>로그아웃</span></li>
                </>
            ) : (
                <>
                    <li><Link href='/login'>로그인</Link></li>
                    <li><Link href='/join'>회원가입</Link></li>
                </>
            )}
            <li><Link href='/blog'>블로그</Link></li>
            <li><Link href='/notice'>게시판</Link></li>
        </ul>
    )
} 
