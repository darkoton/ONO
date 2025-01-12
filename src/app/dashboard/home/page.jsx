import style from './style.module.scss'

import Balance from './components/balance'
import Wallet from './components/wallet'

const Home = () => {
  return <div className={style.grid}>
    <Balance />
    <Wallet />
  </div>
}

export default Home