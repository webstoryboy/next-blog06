"use client"
import React, { useEffect } from 'react'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';

export default function page() {
    const { data, status } = useSession();
    const router = useRouter();

    // console.log(data, status);

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [data, status])

    if (status === "loading") {
        return <div className='loading'>로딩중입니다.</div>
    }

    return (
        <main id='main'>
            <section className="main__header">
                <h2>#login</h2>
                <p>로그인 하려면 회원가입이 필요합니다.</p>
            </section>

            <section className="main__conts">
                <h3>로그인</h3>
                <div className="join__inner">
                    <div className="join__form">
                        <form action="/" method="post">
                            <fieldset>
                                <legend className="blind">회원가입 영역</legend>
                                <div>
                                    <label htmlFor="youEmail">이메일</label>
                                    <input type="text" id="youEmail" name="youEmail" placeholder="이메일을 입력해주세요!" />
                                </div>
                                <div>
                                    <label htmlFor="youPass">비밀번호</label>
                                    <input type="text" id="youPass" name="youPass" placeholder="비밀번호를 입력해주세요!" />
                                </div>
                                <div className="join__btn">
                                    <button>로그인</button>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                    <div className="join__add">
                        <ul>
                            <li className="google" onClick={() => signIn("google")}><span className='ir'>google</span> </li>
                            <li className="github" onClick={() => signIn("github")}><span className='ir'>Github</span></li>
                            <li className="facebook" onClick={() => signIn("facebook")}><span className='ir'>Facebook</span></li>
                            <li className="naver" onClick={() => signIn("naver")}><span className='ir'>naver</span></li>
                            <li className="kakao" onClick={() => signIn("kakao")}><span className='ir'>kakao</span></li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    )
}
