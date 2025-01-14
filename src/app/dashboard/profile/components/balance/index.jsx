'use client'

import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import { Button } from '@ui/Button'
import Popup from '../withdraw-popup'
import { useState } from 'react'

import CommandIcon from '@icons/Command'
import LogOut from '@icons/LogOut'

const Balance = () => {

  const [openPopup, setOpenPopup] = useState(false)

  return <> <div className={classNames(globalStyle.section, style.balance)}>
    <div className={style.head}>
      <div className={style.title}>Balance</div>
      <CommandIcon className={style.commandIcon} />
    </div>

    <div className={style.bottom}>
      <div className={style.subtitle}>Current balance</div>

      <div className={style.bottomRow}>
        <div className={style.balance}>
          <span className={style.value}>1,234.56 ONO</span>
          <span className={style.subValue}>~$12,345.67</span>
        </div>
        <Button onClick={()=>setOpenPopup(true)} className={style.button} icon={<LogOut />} iconPosition='left'>Withdraw</Button>

      </div>
    </div>
  </div>

  <Popup isOpen={openPopup} close={()=>setOpenPopup(false)} />
  </>
}

export default Balance
