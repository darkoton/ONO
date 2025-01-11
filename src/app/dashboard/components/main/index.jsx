import style from './style.module.scss'
import Link from 'next/link'

import NotfIcon from '@icons/Notification'
import classNames from 'classnames'

const Main = ({
  title = 'Dashboard',
  children
}) => {
  return <div className={style.main}>
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.headerBody}>
          <h1 className={style.title}>{title}</h1>

          <button className={style.buttonNotf}>
            <NotfIcon className={style.icon} />
          </button>
        </div></div>
    </div>

    <div className={style.content}>
      <div className={style.container}></div>
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