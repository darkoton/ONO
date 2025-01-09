import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'

import GoogleIcon from '@icons/Google'
import TwitterIcon from '@icons/Twitter'
import InstagramIcon from '@icons/Instagram'

const Footer = () => {
  return <footer className={style.footer}>
    <div className={style.container}>
      <div className={style.body}>
        <div className={style.top}>
          <Link href='/'>
            <Image src='./img/logo.svg' width={112} height={42} alt='logo' />
          </Link>
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

          <div className={style.contacts}>
            <Link href='#' className={style.contact}>
              <GoogleIcon className={style.contactIcon} />
            </Link>
            <Link href='#' className={style.contact}>
              <TwitterIcon className={style.contactIcon} />
            </Link>
            <Link href='#' className={style.contact}>
              <InstagramIcon className={style.contactIcon} />
            </Link>
          </div>
        </div>
        <div className={style.bottom}>
          <p className={style.copyRight}>Copyright 2024</p>
          <div className={style.right}>
            <Link href='#' className={style.infoLink}>Terms of Use</Link>

            <Link href='#' className={style.infoLink}>Privacy Policy</Link>

          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer