import React from 'react'
import BankCard from '../../components/BankCard/BankCard'
import Block from '../../components/Block/Block'
import Card from '../../components/Card/Card'
import MoreCard from '../../components/MoreCard/MoreCard'

import Header from '../HeaderPage/Header'
import ImagePage from '../ImagePage/ImagePage'
import Main from '../MainPage/Main'




function HomePage() {
  return (
    <div >
        <Header/>
        <Main/>
        <ImagePage/>
        <Block/>
        <Card/>
        <BankCard/>
        <MoreCard/>
    </div>
  )
}

export default HomePage