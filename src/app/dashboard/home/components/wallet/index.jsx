import classNames from 'classnames'
import globalStyle from '../../style.module.scss'
import style from './style.scss.module.scss'
import { Button } from '@ui/Button'

import Plus from '@icons/Plus'


const Wallet = () => {
  return <div className={classNames(globalStyle.section, style.wallet)}>
    <div className={style.head}>
      <div className={style.title}>Balance</div>
      <Button iconPosition='left' icon={<Plus />}>Add address</Button>
    </div>
  </div>
}

export default Wallet