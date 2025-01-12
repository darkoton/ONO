'use client'

import classNames from 'classnames'
import globalStyle from '../../style.module.scss'
import style from './style.scss.module.scss'
import { Button } from '@ui/Button'
import { Dropdown } from '@ui/Dropdown'
import { useState } from 'react'

import Plus from '@icons/Plus'
import Copy from '@icons/Copy'

const options = [
  {
    value: '0x123458654rgbhn9ebc54d'
  },
  {
    value: '0xabc1234xyz987efgh123a'
  },
  {
    value: '0x987bc321def567ghij456b'
  },
]

const Wallet = () => {
  const [dropdownValue, setDropdownValue] = useState(null)

  const dropdownChange = (value) => {
    setDropdownValue(value)
  }

  return <div className={classNames(globalStyle.section, style.wallet)}>
    <div className={style.head}>
      <div className={style.title}>Balance</div>
      <Button className={style.button} iconPosition='left' icon={<Plus />}>Add address</Button>
    </div>

    <div className={style.bottom}>
      <Dropdown className={style.dropdown} onChange={dropdownChange} value={dropdownValue} options={options} label='Select an address' />
      <Button variant='secondary' className={style.copy} icon={<Copy />} />
    </div>
  </div>
}

export default Wallet