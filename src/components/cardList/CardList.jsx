import Link from 'next/link'
import React from 'react'

const getData = async () => {
    const res = await fetch("http://localhost:3000/api/post", {
        cache: "no-store"
    })

    if (!res.ok) {
        throw new Error("실패!!! 다시 해보세요!")
    }

    return res.json()
}

export default async function CardList() {
    const data = await getData();

    return (
        <section className='blog__list container'>
            {data.map((item) => (
                <div class="blog">
                    <Link href="/">
                        <h4 class="title">{item.title}</h4>
                        <p class="desc">{item.desc}</p>
                        <div class="info">
                            <span class="author">웹쓰</span>
                            <span class="view">{item.views}</span>
                            <span class="like">2</span>
                        </div>
                    </Link>
                </div>
            ))}
        </section>
    )
}
