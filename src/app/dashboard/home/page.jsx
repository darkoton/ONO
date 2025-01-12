import style from './style.module.scss'

import Balance from './components/balance'
import Wallet from './components/wallet'
import Transactions from './components/transactions'
import Transfer from './components/transfer'
import Status from './components/status'

const Home = () => {
  return <div className={style.grid}>
    {/* <Balance /> */}
    {/* <Wallet /> */}
    {/* <Transactions /> */}
    {/* <Transfer /> */}
    <Status />
  </div>
}

export default Home