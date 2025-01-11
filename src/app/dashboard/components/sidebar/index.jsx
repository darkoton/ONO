
'use client'

import Image from "next/image"
import Link from "next/link"
import style from './style.module.scss'
import { usePathname } from 'next/navigation'
import classNames from "classnames";

import DashboardIcon from "@icons/Dashboard"
import RecentTimeIcon from "@icons/RecentTime"
import GearIcon from "@icons/Gear"
import LogOutIcon from "@icons/LogOut"
import Arrowleft from "@icons/Arrowleft"

const Sidebar = () => {

  const pathname = usePathname()

  const isActive = (path) => pathname === path;

  return <div className={style.sidebar}>
    <div className={style.top}>
      <div className={style.head}>
        <Image src='/img/logo.svg' height={42} width={112} alt='logo' />
      </div>

      <div className={style.nav}>
        <Link href='/dashboard/home'
          className={
            classNames(style.link, {
              [style.active]: isActive('/dashboard/home')
            })}>
          <DashboardIcon />
          Dashboard
        </Link>

        <Link href='/dashboard/history' className={
          classNames(style.link, {
            [style.active]: isActive('/dashboard/history')
          })
        }>
          <RecentTimeIcon />
          Transaction History
        </Link>

        <Link href='/dashboard/settings' className={
          classNames(style.link, {
            [style.active]: isActive('/dashboard/settings')
          })
        }>
          <GearIcon />
          Settings
        </Link>
      </div>
    </div>

    <Link href='/logOut' className={style.logOut}>
      <LogOutIcon />

      Log out
    </Link>

    <button className={style.arrowButton}>
      <Arrowleft />
    </button>
  </div>
}

export default Sidebar