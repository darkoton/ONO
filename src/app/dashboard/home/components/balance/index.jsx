import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import { Button } from '@ui/Button'

import CommandIcon from '@icons/Command'
import LogOut from '@icons/LogOut'

const Balance = () => {
  return <div className={classNames(globalStyle.section, style.balance)}>
    <div className={style.head}>
      <div className={style.title}>Balance</div>
      <CommandIcon className={style.commandIcon} />
    </div>

    <div className={style.bottom}>
      <div className={style.subtitle}>Current balance</div>

      <div className={style.bottomRow}>
        <span className={style.value}>1,234.56 ONO</span>
        <span className={style.subValue}>~$12,345.67</span>
      </div>

      <Button className={style.button} icon={<LogOut />} iconPosition='left'>Withdraw</Button>

    </div>
  </div>
}

export default Balance