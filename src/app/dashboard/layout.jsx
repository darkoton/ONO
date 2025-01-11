'use client'

import Sidebar from "./components/sidebar"
import Main from "./components/main"
import style from "./style.module.scss"
import { useState } from "react"
import { Poppins } from "next/font/google"
import classNames from "classnames"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['400', '500', '600']
})

export default function DashboardLayout({ children }) {

  const [activeSidebar, setActiveSidebar] = useState(false)

  function burgerHandle() {
    setActiveSidebar(!activeSidebar)
  }

  function closeSidebar() {
    setActiveSidebar(false)
  }

  return (
    <div className={classNames(style.layout, poppins.className)}>
      <Sidebar close={closeSidebar} active={activeSidebar} />
      <Main burgerClick={burgerHandle}>
        {children}
      </Main>
    </div>
  )
}