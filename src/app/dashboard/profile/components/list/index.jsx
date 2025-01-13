
import classNames from 'classnames'
import globalStyle from '../../../style.module.scss'
import style from './style.module.scss'
import { Pagination } from '@ui/Pagination'
import { Button } from '@ui/Button'
import ArrowRight from '@icons/ArrowRight'


const Table = () => {

  return <div className={classNames(globalStyle.section, style.list)}>
    <div className={style.head}>
      <div className={style.title}>Game List</div>
    </div>

    <div className={style.table}>
      <div className={style.tableBody}>
        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Date & Time</div>
          </div>

          <div className={style.values}>
            <div className={style.value}>05.11.2023 11:16:11</div>
            <div className={style.value}>05.08.2024 17:27:45</div>
            <div className={style.value}>05.08.2024 17:12:29</div>
            <div className={style.value}>05.08.2023 09:11:33</div>
            <div className={style.value}>05.08.2023 09:11:33</div>
          </div>
        </div>

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Game Type</div>
          </div>

          <div className={style.values}>
            <div className={style.value}>Ranked</div>
            <div className={style.value}>Unranked</div>
            <div className={style.value}>Unranked</div>
            <div className={style.value}>Ranked</div>
            <div className={style.value}>Ranked</div>
          </div>
        </div>

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Results</div>
          </div>

          <div className={style.values}>
            <div className={style.value}>Win</div>
            <div className={style.value}>Loss</div>
            <div className={style.value}>Win</div>
            <div className={style.value}>Win</div>
            <div className={style.value}>Loss</div>
          </div>
        </div>

        <div className={style.tableColumn}>
          <div className={style.tableHead}>
            <div className={style.name}>Coins Earned</div>
          </div>

          <div className={style.values}>
            <div className={style.value}>+8 ONO</div>
            <div className={style.value}>0 ONO</div>
            <div className={style.value}>0 ONO</div>
            <div className={style.value}>+3 ONO</div>
            <div className={style.value}>0 ONO</div>
          </div>
        </div>

        <div className={classNames(style.tableColumn, style.wAuto)}>
          <div className={style.tableHead}>
            <div className={style.name}>Details</div>
          </div>

          <div className={style.values}>
            <div className={style.value}><Button className={style.viewDetail} variant='secondary' icon={<ArrowRight />}>View details</Button></div>
            <div className={style.value}><Button className={style.viewDetail} variant='secondary' icon={<ArrowRight />}>View details</Button></div>
            <div className={style.value}><Button className={style.viewDetail} variant='secondary' icon={<ArrowRight />}>View details</Button></div>
            <div className={style.value}><Button className={style.viewDetail} variant='secondary' icon={<ArrowRight />}>View details</Button></div>
            <div className={style.value}><Button className={style.viewDetail} variant='secondary' icon={<ArrowRight />}>View details</Button></div>
          </div>
        </div>
      </div>
    </div>

    <Pagination className={style.pagination} />
  </div>
}

export default Table