import React from 'react'
import Menu from '@/components/menu/Menu'
import Category from '@/components/category/Category'
import CardList from '@/components/cardList/CardList'

export default function Home() {
  return (
    <main id='main'>
      <section className="main__header">
        <h2>#main</h2>
        <Menu />
      </section>
      <section className='main__contents'>
        <Category />
        <CardList />
      </section>
    </main>
  )
}
