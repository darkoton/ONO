'use client'

import style from './style.module.scss'
import Link from 'next/link'
import classNames from 'classnames'

import Notifications from './components/Notifications';
import NotfIcon from '@icons/Notification'
import Burger from '@icons/Burger'
import { useState } from 'react'

const notificationsList = [
  {
    type: 'error',
    title: 'Your account is not synchronized',
    text: 'To avoid login problems, please login.'
  },
  {
    type: 'success',
    title: 'Incoming funds!',
    text: 'You received 200.00 ONO from Anna Smith. Funds are already available in your account.'
  },
  {
    type: 'warning',
    title: 'Funds sent!',
    text: 'You received 20.00 ONO from Anna Smith. Funds are already available in your account.'
  },
]

const Main = ({
  title = 'Dashboard',
  burgerClick,
  children
}) => {

  const [openNotf, setOpenNotf] = useState(false)

  const onCloseNotf = () => {
    setOpenNotf(false)
  }
  const onOpenNotf = () => {
    setOpenNotf(true)
  }

  return <div className={style.main}>
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.headerBody}>
          <h1 className={style.title}>{title}</h1>
          <button onClick={burgerClick} className={style.burgerButton}><Burger className={style.burger} /></button>

          <button onClick={onOpenNotf} className={style.buttonNotf}>
            <NotfIcon className={style.icon} />
          </button>

          <Notifications onClose={onCloseNotf} list={notificationsList} open={openNotf} />
        </div>
      </div>
    </div>
    <h1 className={classNames(style.title, style.titleMob)}>{title}</h1>


    <div className={style.content}>
      <div className={style.container}>{children}</div>
    </div>

    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.footerBody}>
          <div className={style.footerText}>© 2024 All rights reserved</div>
          <div className={style.footerRight}>
            <Link href='#' className={classNames(style.footerText, style.footerLink)}>Terms of Use</Link>
            <Link href='#' className={classNames(style.footerText, style.footerLink)}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
}

export default Main