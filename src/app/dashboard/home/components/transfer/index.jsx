import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import { Field } from '@ui/Field'
import { Button } from '@ui/Button'

const Transfer = () => {
  return <div className={classNames(globalStyle.section, style.transfer)}>
    <div className={style.head}>
      <div className={style.title}>Transfer Form</div>
      <div className={style.desc}>Send ONO quickly and securely. Enter the address, amount, and confirm your transaction.</div>
    </div>

    <div className={style.form}>
      <Field className={style.field} label='Recipient address' />
      <Field className={style.field} label='Amount in ONO*' note='Available balance: 1,234.56 ONO' />

      <div className={style.total}>
        <div className={style.totalTitle}>Total</div>
        <div className={style.totalValue}>123 ONO</div>
      </div>

      <Button className={style.submit}>Send</Button>
    </div>
  </div>
}

export default Transfer