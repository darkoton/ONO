import classNames from 'classnames'
import style from '../../style.module.scss'

import CommandIcon from '@icons/Command'

const Balance = () => {
  return <div className={classNames(style.section, style.balance)}>
    <div className={style.head}>
      <div className={style.title}>Balance</div>

      <CommandIcon className={style.commandIcon} />
    </div>

    <div className={style.subtitle}>Current balance</div>
    <div className={style.bottom}>
      <div className={style.value}>1,234.56 ONO</div>
      <div className={style.subValue}>~$12,345.67</div>
    </div>
  </div>
}

export default Balance