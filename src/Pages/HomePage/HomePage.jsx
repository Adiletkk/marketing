import React from 'react'
import BankCard from '../../components/BankCard/BankCard'
import Block from '../../components/Block/Block'
import Card from '../../components/Card/Card'
import DevCommentsBlock from '../../components/devComemmentsBLock/DevCommentsBlock'
import Faqs from '../../components/faqs/Faqs'
import PriceInfo from '../../components/layout-userLock/PriceInfo'
import MoreCard from '../../components/MoreCard/MoreCard'
import Posts from '../../components/posts/Posts'
import TeamInfo from '../../components/userBlock/TeamInfo'
import Header from '../HeaderPage/Header'
import ImagePage from '../ImagePage/ImagePage'
import Main from '../MainPage/Main'
import css from './HomePage.module.css'

function HomePage() {
  return (
    <div className={css.wrapper}>
      <Header />
      <Main />
      <ImagePage />
      <Block />
      <Card />
      <BankCard />
      <MoreCard />

      <TeamInfo />
      <PriceInfo />
      <Faqs />
      <DevCommentsBlock />
      <Posts />
    </div>
  )
}

export default HomePage