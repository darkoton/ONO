
'use client'

import Image from "next/image"
import Link from "next/link"
import style from './style.module.scss'
import { usePathname } from 'next/navigation'
import classNames from "classnames";
import { Open_Sans } from "next/font/google"

import DashboardIcon from "@icons/Dashboard"
import RecentTimeIcon from "@icons/RecentTime"
import GearIcon from "@icons/Gear"
import LogOutIcon from "@icons/LogOut"
import ArrowLeft from "@icons/ArrowLeft"
import { useState } from "react"

const openSans = Open_Sans({
  subsets: ["latin"],
});

const Sidebar = ({
  active,
  close = () => { }
}) => {

  const [fullWidth, setFullWidth] = useState(false)

  const pathname = usePathname()

  const isActive = (path) => pathname === path;

  return <>
    <div className={classNames(style.backward, {
      [style.active]: active,
    })} onClick={close}></div>
    <div className={classNames(style.sidebar, {
      [style.active]: active,
      [style.full]: fullWidth
    })}>
      <div className={style.top}>
        <div className={style.head}>
          <div className={classNames(style.logo, openSans.className)}>
            <Image src='/img/logo-icon.svg' height={42} width={48} alt='logo' />
            <span>ONO</span>
          </div>
        </div>

        <div className={style.nav}>
          <Link href='/dashboard/home'
            className={
              classNames(style.link, {
                [style.active]: isActive('/dashboard/home')
              })}>
            <DashboardIcon />
            <span>Dashboard</span>
          </Link>

          <Link href='/dashboard/history' className={
            classNames(style.link, {
              [style.active]: isActive('/dashboard/history')
            })
          }>
            <RecentTimeIcon />
            <span>Transaction History</span>
          </Link>

          <Link href='/dashboard/settings' className={
            classNames(style.link, {
              [style.active]: isActive('/dashboard/settings')
            })
          }>
            <GearIcon />
            <span>Settings</span>
          </Link>

          <Link href='/dashboard/profile' className={
            classNames(style.link, {
              [style.active]: isActive('/dashboard/profile')
            })
          }>
            <DashboardIcon />
            <span>Profile</span>
          </Link>
        </div>
      </div>

      <Link href='/logOut' className={style.logOut}>
        <LogOutIcon />
        <span>Log out</span>
      </Link>

      <button
        className={classNames(style.arrowButton, { [style.full]: fullWidth })}
        onClick={() => {
          setFullWidth(!fullWidth)
          close()
        }}>
        <ArrowLeft className={classNames(style.ArrowLeftIcon)} />
      </button>
    </div></>
}

export default Sidebar