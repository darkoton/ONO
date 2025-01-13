import style from './style.module.scss'

import Info from './components/info'
import Balance from './components/balance'
import Overview from './components/overview'
import List from './components/list'

const Profile = () => {
  return <div className={style.grid}>
    <Info />
    <Balance />
    <Overview />
    <List />
  </div>
}

export default Profile