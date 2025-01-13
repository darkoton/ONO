'use client'

import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import { Field } from '@ui/Field'
import { Button } from '@ui/Button'
import PopupSuccess from '../success-popup'
import PopupError from '../error-popup'
import { useState } from 'react'

const Transfer = () => {
  const [popupOpen1, setPopupOpen1] = useState(false)
  const [popupOpen2, setPopupOpen2] = useState(false)

  return <>
    <div className={classNames(globalStyle.section, style.transfer)}>
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

        <Button className={style.submit} onClick={
          () => {
            setPopupOpen1(true)
            setPopupOpen2(true)
          }
        }>Send</Button>
      </div>
    </div>

    <PopupSuccess close={() => setPopupOpen1(false)} isOpen={popupOpen1} />
    <PopupError close={() => setPopupOpen2(false)} isOpen={popupOpen2} />
  </>
}

export default Transfer