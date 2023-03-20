import React from 'react'
import { Test } from '../../constants/teamcard'
import Teamcard from '../Teamcard/Teamcard'
import css from './Showtest.module.css'



function Showtest() {

  return (
    <div>
        <div className={css.wrap}>
        {
            Test.map((el) => (
                    <Teamcard {...el} key={el.id}/> 
            ))
        }
        </div>
    </div>
  )
}

export default Showtest