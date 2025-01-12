'use client'

import classNames from 'classnames'
import globalStyle from '../style.module.scss'
import style from './style.module.scss'
import { Field } from '@ui/Field'
import Search from '@icons/Search'
import { Dropdown } from '@ui/Dropdown'
import { useState } from 'react'

const statusList = [
  {
    value: '23498562'
  },
  {
    value: '58730194'
  },
  {
    value: '80947312'
  }
]

const Wallet = () => {

  const [statusValue, setStatusValue] = useState('')

  return (
    <div className={classNames(globalStyle.section, style.filters)}>
      <div className={style.head}>
        <div className={style.title}>Filter Transactions</div>
        <Field className={style.search} placeholder='Search by transaction' Icon={Search} />
      </div>

      <div className={style.table}>
        <div className={style.tableBody}>
          <div className={style.tableColumn}>
            <div className={style.tableHead}>
              <div className={style.name}>Id</div>
              <Dropdown className={style.dropdown} placeholder='Select Status' value={statusValue} onChange={(v) => setStatusValue(v)} options={statusList} />
            </div>

            <div className={style.values}>
              <div className={style.value}>23498562</div>
              <div className={style.value}>23498562</div>
              <div className={style.value}>80947312</div>
              <div className={style.value}>15023976</div>
              <div className={style.value}>42986357</div>
              <div className={style.value}>42986357</div>
              <div className={style.value}>20394876</div>
              <div className={style.value}>65189034</div>
            </div>
          </div>

          <div className={style.tableColumn}>
            <div className={style.tableHead}>
              <div className={style.name}>Type</div>
              <Dropdown className={style.dropdown} placeholder='Select' value={statusValue} onChange={(v) => setStatusValue(v)} options={statusList} />
            </div>

            <div className={style.values}>
              <div className={style.value}>Sent</div>
              <div className={style.value}>Sent</div>
              <div className={style.value}>Sent</div>
              <div className={style.value}>Sent</div>
              <div className={style.value}>Received</div>
              <div className={style.value}>Received</div>
              <div className={style.value}>Received</div>
              <div className={style.value}>Received</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wallet