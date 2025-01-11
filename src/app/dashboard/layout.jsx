import Sidebar from "./components/sidebar"
import Main from "./components/main"
import style from "./style.module.scss"

export default function DashboardLayout({ children }) {

  return (
    <div className={style.layout}>
      <Sidebar />
      <Main>
        {children}
      </Main>
    </div>
  )
}