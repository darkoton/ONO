import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Burger from '@/components/icons/Burger'
import classNames from 'classnames'

const Header = () => {
  return <header className={style.header}>
    <div className={style.container}>
      <div className={style.body}>
        <Image className={style.logo} width='112' height='42' priority={true} src='./image/logo.svg' alt='Logo' />
        <div className={style.menu}>
          <nav className={style.nav}>
            <Link href='#' className={style.link}>
              About ONO
            </Link>
            <Link href='#' className={style.link}>
              How to Earn
            </Link>
            <Link href='#' className={style.link}>
              Buy ONO
            </Link>
            <Link href='#' className={style.link}>
              Wallet
            </Link>
            <Link href='#' className={style.link}>
              Gaming
            </Link>
            <Link href='#' className={style.link}>
              Resources
            </Link>

          </nav>
          <button variant='secondary' className={classNames(style.button, style.buttonMob)}>Wallet Log in</button>
        </div>

        <button variant='secondary' className={style.button}>Wallet Log in</button>

        <button className={style.burger}><Burger /></button>

      </div>
    </div>
  </header>
}

export default Header