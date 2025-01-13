'use client'

import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import { Field } from '@ui/Field'
import { Date } from '@ui/Date'
import Search from '@icons/Search'
import { Dropdown } from '@ui/Dropdown'
import { Pagination } from '@ui/Pagination'
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


const Table = () => {

  const [statusValue, setStatusValue] = useState('')
  const [typeValue, setTypeValue] = useState('')
  const [dateValue, setDateValue] = useState('')
  const [recipientValue, setRecipientValue] = useState('')


  return <div className={classNames(globalStyle.section, style.filters)}>
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
            <div className={style.name}>Date & Time</div>
            <Date className={style.field} placeholder='Choose Date & Time' value={dateValue} onChange={({ target }) => setDateValue(target.value)} />
          </div>

          <div className={style.values}>
            <div className={style.value}>05.11.2023 11:16:11</div>
            <div className={style.value}>05.08.2024 17:27:45</div>
            <div className={style.value}>05.08.2024 17:12:29</div>
            <div className={style.value}>05.08.2023 09:11:33</div>
            <div className={style.value}>31.07.2024 10:54:55</div>
            <div className={style.value}>31.07.2024 10:50:21</div>
            <div className={style.value}>05.11.2023 11:16:11</div>
            <div className={style.value}>31.07.2024 10:50:21</div>
          </div>
        </div>

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Type</div>
            <Dropdown className={style.dropdown} placeholder='Select' value={typeValue} onChange={(v) => setTypeValue(v)} options={statusList} />
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

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Recipient/Sender</div>
            <Dropdown className={style.dropdown} placeholder='Select' value={recipientValue} onChange={(v) => setRecipientValue(v)} options={statusList} />
          </div>

          <div className={style.values}>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
            <div className={style.value}>0x123458654...........9ebgdrtrefercwxsc54d</div>
          </div>
        </div>

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Amount</div>
            <Dropdown className={style.dropdown} placeholder='Select' value={recipientValue} onChange={(v) => setRecipientValue(v)} options={statusList} />
          </div>

          <div className={style.values}>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
            <div className={style.value}>12 ONO  (~ $45.6)</div>
          </div>
        </div>

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Transaction Status</div>
            <Dropdown className={style.dropdown} placeholder='Select' value={recipientValue} onChange={(v) => setRecipientValue(v)} options={statusList} />
          </div>

          <div className={style.values}>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
            <div className={style.value}>Completed</div>
          </div>
        </div>
      </div>
    </div>

    <Pagination className={style.pagination} />
  </div>
}

export default Table