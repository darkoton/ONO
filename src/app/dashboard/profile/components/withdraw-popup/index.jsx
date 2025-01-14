'use client'

import { Popup } from '@ui/Popup'
import { Field } from '@ui/Field'
import { Dropdown } from '@ui/Dropdown'
import { Button } from '@ui/Button'
import style from './style.module.scss'
import { useState } from 'react'

const walletAdress = [
  {
    value: '0x123458654rgbhn9ebc54d'
  },
  {
    value: '0x123458654rgbhn9ebc54a'
  },
  {
    value: '0x123458654rgbhn9ebc54f'
  },
]

const PopupWithdraw = ({ ...props }) => {

const [walletValue, setWalletValue] = useState('')

const {close} = props

  return <Popup {...props}>
    <div className={style.body}>
      <h4 className={style.title}>Withdraw</h4>

      <div className={style.fields}>
        <Dropdown className={style.field} options={walletAdress} value={walletValue} onChange={(v)=>setWalletValue(v)} className={style.field} label='Enter wallet address' />

        <Field className={style.field} label='Enter withdrawal details'/>
        <Field className={style.field} label='Amount in ONO*' note='Available balance: 1,234.56 ONO'/>
      </div>

      <div className={style.buttons}>
      <Button className={style.button} variant='primary'>Send</Button>
      <Button className={style.button} variant='secondary' onClick={close
      }>Cancel</Button>
      </div>
    </div>
  </Popup>
}

export default PopupWithdraw;
