"use client"
import style from './style.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import Burger from '@icons/Burger'
import X from '@icons/X'
import classNames from 'classnames'
import { Button } from '@/components/ui/Button'
import { useState } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  function changeMenuOpen(value) {
    return () => {
      if (value) {
        setMenuOpen(value)
        if (value) {
          document.body.classList.add('lock')
        } else {
          document.body.classList.remove('lock')
        }
      } else {
        document.body.classList.toggle('lock')
        setMenuOpen(state => {
          return !state;
        })
      }
    }
  }


  return <header className={
    classNames(style.header, {
      [style.active]: menuOpen
    })
  }>
    <div className={style.container}>
      <div className={style.body}>
        <div
          className={classNames(style.backward, {
            [style.active]: menuOpen
          })}
          onClick={changeMenuOpen(false)}
        ></div>

        <Link href='/'>
          <Image className={style.logo} width='112' height='42' priority={true} src='./img/logo.svg' alt='Logo' />
        </Link>

        <div className={classNames(style.menu, {
          [style.active]: menuOpen
        })}>
          <button className={style.closeMenu} onClick={changeMenuOpen(false)}>
            <X />
          </button>

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
          <Button variant='secondary' className={classNames(style.button, style.buttonMob)}>Wallet Log in</Button>
        </div>

        <Button variant='secondary' className={style.button}>Wallet Log in</Button>

        <button
          className={classNames(style.burger, {
            [style.active]: menuOpen
          })}
          onClick={changeMenuOpen()}>
          <Burger className={style.burgerIcon} />
          <X className={style.closeIcon} />
        </button>

      </div>
    </div>
  </header>
}

export default Header
